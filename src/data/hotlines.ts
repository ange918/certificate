import type { Check, SourceRef } from "./types";

export type Hotline = {
  id: string;
  title: string;
  detail: string;
  number: string;
  tel: string;
  free: boolean;
  hours?: string;
  href?: string;
  linkLabel?: string;
  check: Check;
};

const arcepList: SourceRef = {
  label: "Liste ARCEP des numéros courts, version 1.1 du 1er juin 2026",
  url: "https://arcep.bj/wp-content/uploads/2026/06/Num%C3%A9ros-courts-dacc%C3%A8s-aux-services-durgence-ou-dint%C3%A9r%C3%AAt-g%C3%A9n%C3%A9ral-et-aux-services-dassistance.pdf",
};

export const hotlines: Hotline[] = [
  {
    id: "corruption",
    title: "Signaler la corruption",
    detail:
      "Corruption, mauvaise gouvernance, pots-de-vin, fraude fiscale ou douanière, et usage abusif de biens publics.",
    number: "155",
    tel: "155",
    free: true,
    href: "https://denonciation.bj/",
    linkLabel: "denonciation.bj",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "gouv.bj, 1er décembre 2022",
          url: "https://www.gouv.bj/article/2046/la-plateforme-plaintes-denonciations-nouvel-outil-traquer-corruption-operationnel/",
        },
        arcepList,
      ],
    },
  },
  {
    id: "femmes",
    title: "Signaler des violences faites aux femmes et aux filles",
    detail:
      "Violences physiques, psychologiques, sexuelles, économiques, domestiques, mariages forcés, mutilations et harcèlement. Ligne de l’Institut national de la femme.",
    number: "114",
    tel: "114",
    free: true,
    href: "https://inf.bj/",
    linkLabel: "inf.bj",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Communiqué INF, 28 août 2026",
          url: "https://inf.bj/communique-de-presse-du-28-aout-2026/",
        },
        arcepList,
      ],
    },
  },
  {
    id: "enfants",
    title: "Signaler des violences faites aux enfants",
    detail:
      "Ligne d’assistance aux enfants victimes de violences et d’abus, ouverte en 2020. L’ARCEP l’attribue encore au ministère des affaires sociales en juin 2026.",
    number: "138",
    tel: "138",
    free: true,
    check: {
      status: "partiel",
      sources: [
        {
          label: "gouv.bj, 16 mars 2020",
          url: "https://www.gouv.bj/article/552/assistance-aux-enfants-victimes-de-violences-mise-en-service-du-numero-gratuit-138/",
        },
        arcepList,
      ],
      note: "Le motif est décrit en 2020. Aucune page de 2025 ou 2026 ne le réécrit. L’usage actuel du libellé est à confirmer.",
    },
  },
  {
    id: "police",
    title: "Signaler une détresse à la police",
    detail:
      "Écoute, orientation et intervention de la Police républicaine, y compris pour dénoncer un agent. Le 166 est aussi attribué au ministère de l’Intérieur.",
    number: "117",
    tel: "117",
    free: true,
    hours: "24 h/24 et 7 j/7",
    href: "https://www.dgpr.bj/inauguration-du-centre-dappel-de-la-police-republicaine-et-lancement-de-la-ligne-dappel-gratuit-117/",
    linkLabel: "Annonce de la DGPR",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "DGPR, 7 novembre 2025",
          url: "https://www.dgpr.bj/inauguration-du-centre-dappel-de-la-police-republicaine-et-lancement-de-la-ligne-dappel-gratuit-117/",
        },
        {
          label: "CNSR",
          url: "https://cnsr.bj/contact/numeros-verts",
        },
        arcepList,
      ],
    },
  },
  {
    id: "pompiers",
    title: "Signaler un incendie ou demander les secours",
    detail:
      "Numéro court des sapeurs-pompiers. Le ministère de la Santé publie aussi le 21 30 30 11.",
    number: "118",
    tel: "118",
    free: true,
    hours: "Présenté 24 h/24 par le CNSR",
    check: {
      status: "vérifié",
      sources: [
        arcepList,
        { label: "CNSR", url: "https://cnsr.bj/contact/numeros-verts" },
        {
          label: "Ministère de la Santé",
          url: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
        },
      ],
    },
  },
  {
    id: "samu",
    title: "Signaler une urgence médicale",
    detail:
      "SAMU Bénin, numéro court gratuit. Deux numéros longs sont aussi publiés par le ministère de la Santé.",
    number: "112",
    tel: "112",
    free: true,
    hours: "24 h/24 et 7 j/7",
    href: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
    linkLabel: "Page du ministère de la Santé",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Ministère de la Santé",
          url: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
        },
        arcepList,
      ],
    },
  },
  {
    id: "sante-info",
    title: "Demander une orientation sanitaire",
    detail: "Numéro vert du ministère de la Santé pour l’information et l’orientation.",
    number: "136",
    tel: "136",
    free: true,
    hours: "24 h/24 et 7 j/7",
    href: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
    linkLabel: "Page du ministère de la Santé",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Ministère de la Santé",
          url: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
        },
        arcepList,
      ],
    },
  },
  {
    id: "plainte-sante",
    title: "Signaler une plainte sanitaire",
    detail:
      "Numéro publié par le ministère de la Santé pour une plainte ou une urgence. Ce n’est pas un numéro court.",
    number: "+229 01 91 44 44 44",
    tel: "+2290191444444",
    free: false,
    hours: "24 h/24 et 7 j/7",
    href: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
    linkLabel: "Page du ministère de la Santé",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Ministère de la Santé",
          url: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
        },
      ],
    },
  },
  {
    id: "conso-telecom",
    title: "Signaler un litige télécom, internet ou postal",
    detail:
      "Après une réclamation à l’opérateur restée sans réponse satisfaisante pendant 30 jours. Ligne de l’ARCEP.",
    number: "131",
    tel: "131",
    free: true,
    hours: "Jours ouvrables, horaires publiés divergents",
    href: "https://pigru.arcep.bj/plaintes/portail",
    linkLabel: "Portail des plaintes",
    check: {
      status: "partiel",
      sources: [
        {
          label: "Portail des plaintes",
          url: "https://pigru.arcep.bj/plaintes/portail",
        },
        {
          label: "Page ARCEP",
          url: "https://arcep.bj/le-devoir-du-consommateur-de-saisir-larcep-benin/",
        },
        arcepList,
      ],
      note: "Le portail indique 8 h–17 h. Une autre page ARCEP indique 8 h–20 h. L’horaire exact est à vérifier.",
    },
  },
];

export const extraCalls: {
  parent: string;
  label: string;
  number: string;
  tel: string;
  source: string;
}[] = [
  {
    parent: "police",
    label: "Autre numéro police, 166",
    number: "166",
    tel: "166",
    source: "https://cnsr.bj/contact/numeros-verts",
  },
  {
    parent: "samu",
    label: "SAMU",
    number: "+229 01 68 30 00 00",
    tel: "+2290168300000",
    source: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
  },
  {
    parent: "samu",
    label: "SAMU",
    number: "+229 01 68 30 09 09",
    tel: "+2290168300909",
    source: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
  },
  {
    parent: "pompiers",
    label: "Sapeurs-pompiers",
    number: "+229 21 30 30 11",
    tel: "+22921303011",
    source: "https://sante.gouv.bj/article/numeros-durgence/numeros-durgence-sanitaires",
  },
];

export const unconfirmedShortCodes: { number: string; holder: string }[] = [
  { number: "105", holder: "Ministère du Numérique et de la Digitalisation" },
  { number: "110", holder: "ASIN" },
  { number: "113", holder: "Ministère de l'industrie et du Commerce" },
  { number: "115", holder: "Présidence de la République" },
  { number: "116", holder: "Police républicaine" },
  { number: "119", holder: "WAPCO" },
  { number: "130", holder: "Ministère du Numérique et de la Digitalisation" },
  { number: "132", holder: "ONU-Bénin" },
  { number: "133", holder: "Direction générale des impôts" },
  { number: "134", holder: "ANLC" },
  { number: "135", holder: "ASIN" },
  { number: "137", holder: "ANPPDT" },
  { number: "141", holder: "Unité intégrée de gestion des projets / MCVT" },
  { number: "144", holder: "Agence béninoise pour l'environnement" },
  { number: "145", holder: "Direction générale des eaux, forêts et chasse" },
  { number: "150", holder: "Autorité de protection des données personnelles" },
  { number: "160", holder: "Brigarde des mineurs (graphie de la liste ARCEP)" },
  { number: "170", holder: "Port autonome de Cotonou" },
  { number: "181", holder: "WAPCO" },
  { number: "189", holder: "Programme alimentaire mondial" },
  { number: "190", holder: "FNEC" },
  { number: "191", holder: "African Parks Network" },
  { number: "198", holder: "Opération Mirador" },
];
