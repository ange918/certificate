import { bodies } from "./institutions";
import { executives, ministers } from "./government";
import { hotlines } from "./hotlines";
import { services } from "./services";

export type Hit = {
  id: string;
  kind: "Personne" | "Institution" | "Agence" | "Démarche" | "Numéro";
  title: string;
  text: string;
  to: string;
};

export function fold(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}

export function matchesQuery(query: string, haystack: string): boolean {
  const tokens = fold(query).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return true;
  const folded = fold(haystack);
  return tokens.every((token) => folded.includes(token));
}

export const hits: Hit[] = [
  ...executives.map((person) => ({
    id: person.id,
    kind: "Personne" as const,
    title: person.name,
    text: `${person.role} ${person.name}`,
    to: `/gouvernement#${person.id}`,
  })),
  ...ministers.map((person) => ({
    id: person.id,
    kind: "Personne" as const,
    title: person.name,
    text: `${person.role} ${person.sigle ?? ""} ${person.name}`,
    to: `/gouvernement#${person.id}`,
  })),
  ...bodies.map((body) => ({
    id: body.id,
    kind: body.kind === "institution" ? ("Institution" as const) : ("Agence" as const),
    title: body.name,
    text: `${body.name} ${body.sigle ?? ""} ${body.category} ${body.mission} ${body.leader ?? ""}`,
    to: `/institutions#${body.id}`,
  })),
  ...services.map((service) => ({
    id: service.id,
    kind: "Démarche" as const,
    title: service.title,
    text: `${service.title} ${service.summary} ${service.category} ${service.ministry}`,
    to: `/demarches#${service.id}`,
  })),
  ...hotlines.map((line) => ({
    id: line.id,
    kind: "Numéro" as const,
    title: line.title,
    text: `${line.title} ${line.detail} ${line.number}`,
    to: `/signaler#${line.id}`,
  })),
];

export function searchHits(query: string): Hit[] {
  return hits.filter((hit) => matchesQuery(query, `${hit.title} ${hit.text} ${hit.kind}`));
}
