import { bodies } from "./institutions";
import { executives, ministers } from "./government";
import { extraCalls, hotlines, unconfirmedShortCodes } from "./hotlines";
import { services } from "./services";
import type { Check } from "./types";

export type OpenPoint = {
  id: string;
  title: string;
  note: string;
  status: Check["status"];
};

export function openPoints(): OpenPoint[] {
  const points: OpenPoint[] = [];
  const push = (id: string, title: string, check: Check) => {
    if (check.note || check.status !== "vérifié") {
      points.push({
        id,
        title,
        note: check.note ?? "Élément incomplet.",
        status: check.status,
      });
    }
  };

  for (const person of [...executives, ...ministers]) {
    push(person.id, person.name, person.check);
  }
  for (const body of bodies) push(body.id, body.name, body.check);
  for (const service of services) push(service.id, service.title, service.check);
  for (const line of hotlines) push(line.id, line.title, line.check);

  points.push({
    id: "numeros-sans-motif",
    title: "Numéros courts sans motif d’usage",
    status: "à vérifier",
    note: `La liste ARCEP du 1er juin 2026 attribue ces numéros sans dire à quoi ils servent : ${unconfirmedShortCodes
      .map((item) => `${item.number} (${item.holder})`)
      .join(", ")}. Ils ne sont pas proposés comme boutons d’appel.`,
  });

  points.push({
    id: "numeros-longs",
    title: "Numéros longs associés",
    status: "vérifié",
    note: extraCalls
      .map((item) => `${item.label} : ${item.number}`)
      .join(" · "),
  });

  points.push({
    id: "non-retenus",
    title: "Éléments non retenus",
    status: "à vérifier",
    note: "eresultats.bj répond, mais aucune source gouvernementale consultée n’en confirme l’objet. Le médiateur de la République, le dirigeant de la CENA, celui de l’INF et le président de la Haute Cour de Justice n’ont pas été inscrits. Les adresses, boîtes postales et numéros de standard des ministères présents dans l’ancienne page n’ont pas été repris.",
  });

  return points;
}

const telPattern = /^(?:\d{3}|\+229\d{8,10})$/;

export function assertCatalog(): void {
  for (const line of hotlines) {
    if (!telPattern.test(line.tel)) {
      throw new Error(`Numéro inattendu : ${line.tel}`);
    }
  }
  for (const call of extraCalls) {
    if (!telPattern.test(call.tel)) {
      throw new Error(`Numéro long inattendu : ${call.tel}`);
    }
  }
  for (const point of openPoints()) {
    if (!point.note.trim()) {
      throw new Error(`Point ouvert sans note : ${point.id}`);
    }
  }
}
