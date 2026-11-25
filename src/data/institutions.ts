import type { Check } from "./types";

export type Body = {
  id: string;
  kind: "institution" | "agence";
  category: string;
  sigle?: string;
  name: string;
  mission: string;
  href?: string;
  linkLabel: string;
  leader?: string;
  leaderLabel?: string;
  check: Check;
};

const checked = "2026-11-25";

export const bodies: Body[] = [
  {
    id: "assemblee",
    kind: "institution",
    category: "Pouvoir législatif",
    name: "Assemblée nationale",
    mission:
      "Le Parlement est constitué par une Assemblée unique. Il exerce le pouvoir législatif et contrôle l’action du Gouvernement.",
    href: "https://assemblee-nationale.bj/",
    linkLabel: "assemblee-nationale.bj",
    leader: "Joseph Djogbenou",
    leaderLabel: "Président, 10e législature",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Fiche Présidence",
          url: "https://presidence.bj/les-institutions/l-assemblee-nationale-benin",
        },
        {
          label: "Site de l’Assemblée, 10e législature",
          url: "https://refonte.assemblee-nationale.bj/",
        },
      ],
      note: `Le président est nommé sur refonte.assemblee-nationale.bj. La Présidence renvoie vers assemblee-nationale.bj. Consulté le ${checked}.`,
    },
  },
  {
    id: "cour-constitutionnelle",
    kind: "institution",
    category: "Haute juridiction",
    name: "Cour constitutionnelle",
    mission:
      "Plus haute juridiction de l’État en matière constitutionnelle. Elle juge la constitutionnalité de la loi, garantit les droits fondamentaux et les libertés publiques, et régule le fonctionnement des institutions.",
    href: "https://www.courconstitutionnelle.bj/fr",
    linkLabel: "courconstitutionnelle.bj",
    leader: "Cossi Dorothé Sossa",
    leaderLabel: "Président",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Fiche Présidence",
          url: "https://presidence.bj/les-institutions/la-cour-constitutionnelle-benin",
        },
        {
          label: "Page du président",
          url: "https://courconstitutionnelle.bj/fr/la-cour/president",
        },
      ],
    },
  },
  {
    id: "cour-supreme",
    kind: "institution",
    category: "Haute juridiction",
    name: "Cour suprême",
    mission:
      "Plus haute juridiction en matière administrative et judiciaire, et juge du contentieux des élections locales. Le contrôle des comptes publics est présenté, sur la même Présidence, comme relevant de la Cour des comptes.",
    href: "https://coursupreme.bj/",
    linkLabel: "coursupreme.bj",
    leader: "Victor Dassi Adossou",
    leaderLabel: "Président",
    check: {
      status: "partiel",
      sources: [
        {
          label: "Fiche Présidence",
          url: "https://presidence.bj/les-institutions/la-cour-supreme-benin",
        },
        {
          label: "Décret n° 2026-082 du 4 mars 2026",
          url: "https://sgg.gouv.bj/doc/decret-2026-082/download",
        },
        { label: "Site de la Cour suprême", url: "https://coursupreme.bj/" },
      ],
      note: "La fiche Présidence mentionne encore « les comptes de l’État » parmi les matières de la Cour suprême. La fiche Cour des comptes du même site attribue ce contrôle à la Cour des comptes. Le site coursupreme.bj annonçait une indisponibilité technique le 25 novembre 2026, tout en nommant Victor Dassi Adossou.",
    },
  },
  {
    id: "cour-des-comptes",
    kind: "institution",
    category: "Haute juridiction",
    name: "Cour des comptes",
    mission:
      "Elle vérifie les comptes des comptables publics, contrôle la gestion des entreprises publiques et des organismes de sécurité sociale, et assiste le Parlement et le Gouvernement dans le contrôle de l’exécution des lois de finances.",
    href: "https://courdescomptes.bj/",
    linkLabel: "courdescomptes.bj",
    leader: "Ismath Bio Tchané Mamadou",
    leaderLabel: "Présidente",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Fiche Présidence",
          url: "https://presidence.bj/les-institutions/la-cour-comptes",
        },
        { label: "Site de la Cour des comptes", url: "https://courdescomptes.bj/" },
      ],
    },
  },
  {
    id: "haac",
    kind: "institution",
    category: "Régulation",
    name: "Haute Autorité de l’Audiovisuel et de la Communication",
    mission:
      "Elle régule la presse écrite, les radios et les télévisions, veille à un traitement juste de l’information et à l’accès équitable aux médias de service public, et attribue les fréquences.",
    href: "https://www.haac.bj/",
    linkLabel: "haac.bj",
    leader: "Édouard Loko",
    leaderLabel: "Président",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Fiche Présidence",
          url: "https://presidence.bj/les-institutions/la-haute-autorite-audiovisuel-communication-benin",
        },
        { label: "Actualités HAAC, novembre 2026", url: "https://www.haac.bj/" },
      ],
      note: "Le nom du président est celui utilisé par les actualités du site haac.bj en novembre 2026, pas une page biographique séparée.",
    },
  },
  {
    id: "ces",
    kind: "institution",
    category: "Assemblée consultative",
    name: "Conseil économique et social",
    mission:
      "Il donne son avis sur les projets de loi, d’ordonnance ou de décret ainsi que sur les propositions de loi qui lui sont soumis. Les projets de loi de programme à caractère économique et social lui sont obligatoirement soumis.",
    href: "https://ces.bj/",
    linkLabel: "ces.bj",
    leader: "Abdoulaye Bio Tchané",
    leaderLabel: "Président",
    check: {
      status: "partiel",
      sources: [
        {
          label: "Fiche Présidence",
          url: "https://presidence.bj/les-institutions/le-conseil-economique-social-benin",
        },
        { label: "Site du CES", url: "https://ces.bj/" },
      ],
      note: "Le site ces.bj est en refonte. Il cite la loi n° 2026-13 du 31 juillet 2026 et nomme Abdoulaye Bio Tchané. Le détail des missions issues de cette loi n’est pas publié sur la page consultée.",
    },
  },
  {
    id: "haute-cour",
    kind: "institution",
    category: "Haute juridiction",
    name: "Haute Cour de Justice",
    mission:
      "Elle est compétente pour juger le président de la République et les membres du Gouvernement pour haute trahison et pour les infractions commises dans l’exercice de leurs fonctions, ainsi que leurs complices en cas de complot contre la sûreté de l’État.",
    href: "https://presidence.bj/les-institutions/la-haute-cour-justice-benin",
    linkLabel: "Fiche de la Présidence",
    check: {
      status: "partiel",
      sources: [
        {
          label: "Fiche Présidence",
          url: "https://presidence.bj/les-institutions/la-haute-cour-justice-benin",
        },
      ],
      note: "Aucun site propre ni nom de président n’a été confirmé le 25 novembre 2026. Le lien ouvre la fiche de la Présidence.",
    },
  },
  {
    id: "cena",
    kind: "institution",
    category: "Élections",
    name: "Commission électorale nationale autonome",
    mission:
      "Le site se présente comme la Commission électorale nationale autonome. La mission détaillée n’a pas été extraite : la page d’accueil est une application et le certificat TLS était expiré.",
    href: "https://www.cena.bj/",
    linkLabel: "cena.bj",
    check: {
      status: "à vérifier",
      sources: [{ label: "Site CENA", url: "https://www.cena.bj/" }],
      note: "Le 25 novembre 2026, www.cena.bj présentait un certificat TLS expiré. Le responsable en exercice n’a pas été confirmé.",
    },
  },
  {
    id: "inf",
    kind: "institution",
    category: "Droits",
    name: "Institut national de la femme",
    mission:
      "Prévention, prise en charge et suivi des violences et discriminations faites aux femmes et aux filles : violences physiques, psychologiques, sexuelles et économiques, violences domestiques, mariages forcés et précoces, mutilations génitales féminines, harcèlement et violences facilitées par les technologies.",
    href: "https://inf.bj/",
    linkLabel: "inf.bj",
    check: {
      status: "partiel",
      sources: [
        { label: "Institut national de la femme", url: "https://inf.bj/" },
        {
          label: "Communiqué du 28 août 2026",
          url: "https://inf.bj/communique-de-presse-du-28-aout-2026/",
        },
      ],
      note: "La personne qui dirige l’INF n’a pas été confirmée sur les pages consultées.",
    },
  },
  {
    id: "anip",
    kind: "agence",
    category: "Identité",
    name: "Agence nationale d’identification des personnes",
    mission:
      "Mettre en œuvre le numéro personnel d’identification et la carte biométrique, gérer le registre national d’identification et le registre des actes d’état civil, et délivrer les certificats d’identification.",
    href: "https://anip.bj/",
    linkLabel: "anip.bj",
    check: {
      status: "vérifié",
      sources: [
        { label: "ANIP", url: "https://anip.bj/" },
        { label: "e-services ANIP", url: "https://eservices.anip.bj/" },
      ],
      note: "La tutelle ministérielle n’est pas indiquée sur la page consultée. Le service client annonce l’appel gratuit 7054.",
    },
  },
  {
    id: "asin",
    kind: "agence",
    category: "Numérique",
    name: "Agence des systèmes d’information et du numérique",
    mission:
      "Mise en œuvre opérationnelle des projets relatifs au secteur du numérique.",
    href: "https://asin.bj/",
    linkLabel: "asin.bj",
    check: {
      status: "vérifié",
      sources: [{ label: "ASIN", url: "https://asin.bj/" }],
    },
  },
  {
    id: "apiex",
    kind: "agence",
    category: "Investissement",
    name: "Agence de promotion des investissements et des exportations",
    mission:
      "Bras opérationnel de la promotion des investissements et des exportations. Guichet unique de création des entreprises et porte d’entrée des investisseurs. Placée sous la tutelle de la Présidence de la République.",
    href: "https://apiex.bj/",
    linkLabel: "apiex.bj",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Plateformes, gouv.bj",
          url: "https://www.gouv.bj/plateformes-services/",
        },
        {
          label: "Présentation APIEx",
          url: "https://investbenin.bj/about/apiex",
        },
      ],
      note: "apiex.bj redirige vers investbenin.bj.",
    },
  },
  {
    id: "arcep",
    kind: "agence",
    category: "Régulation",
    name: "Autorité de régulation des communications électroniques et de la poste",
    mission:
      "Traite les plaintes des consommateurs de communications électroniques et de services postaux après réclamation restée sans réponse satisfaisante auprès de l’opérateur.",
    href: "https://arcep.bj/",
    linkLabel: "arcep.bj",
    check: {
      status: "vérifié",
      sources: [
        { label: "ARCEP", url: "https://arcep.bj/" },
        {
          label: "Saisir l’ARCEP",
          url: "https://arcep.bj/le-devoir-du-consommateur-de-saisir-larcep-benin/",
        },
      ],
    },
  },
  {
    id: "cnss",
    kind: "agence",
    category: "Protection sociale",
    name: "Caisse nationale de sécurité sociale",
    mission:
      "Caisse nationale de sécurité sociale. Un espace de services en ligne est publié sur cnss.bj. Le détail des démarches n’a pas été recopié au-delà de l’intitulé de cette page.",
    href: "https://cnss.bj/",
    linkLabel: "cnss.bj",
    check: {
      status: "partiel",
      sources: [
        { label: "CNSS", url: "https://cnss.bj/" },
        { label: "Services en ligne", url: "https://cnss.bj/service-en-ligne/" },
      ],
      note: "La tutelle et la liste précise des téléprocédures n’ont pas été confirmées sur la page consultée.",
    },
  },
  {
    id: "anpe",
    kind: "agence",
    category: "Emploi",
    name: "Agence nationale pour l’emploi",
    mission:
      "Le site se présente comme l’agence qui œuvre pour la promotion de l’emploi et de l’auto-emploi des jeunes, présente dans les 12 départements.",
    href: "https://anpe.bj/",
    linkLabel: "anpe.bj",
    check: {
      status: "à vérifier",
      sources: [{ label: "ANPE", url: "https://anpe.bj/" }],
      note: "Le 25 novembre 2026, anpe.bj répondait HTTP 503. Le texte de présentation provient de la page indexée, pas d’une lecture en direct.",
    },
  },
  {
    id: "andf",
    kind: "agence",
    category: "Foncier",
    name: "Agence nationale du domaine et du foncier",
    mission:
      "Agence du domaine et du foncier. Le portail des services publics décrit la demande de situation géographique comme instruite par l’ANDF, pour le ministère de l’Économie et des Finances.",
    href: "https://andf.bj/",
    linkLabel: "andf.bj",
    check: {
      status: "partiel",
      sources: [
        { label: "ANDF", url: "https://andf.bj/" },
        {
          label: "Situation géographique, service-public.bj",
          url: "https://service-public.bj/public/services/service/PS01425",
        },
      ],
      note: "La mission générale de l’agence, au-delà de ce service, n’a pas été lue sur andf.bj.",
    },
  },
  {
    id: "dgi",
    kind: "agence",
    category: "Impôts",
    name: "Direction générale des impôts",
    mission:
      "Site de la Direction générale des impôts. Le sous-domaine e-services.impots.bj répond, sans que le détail des démarches ait pu être lu.",
    href: "https://www.impots.bj/",
    linkLabel: "impots.bj",
    check: {
      status: "partiel",
      sources: [
        { label: "DGI", url: "https://www.impots.bj/" },
        { label: "e-services impôts", url: "https://e-services.impots.bj/" },
      ],
      note: "La page e-services est une application dont le texte n’était pas lisible le 25 novembre 2026. La tutelle ministérielle n’était pas écrite sur la page d’accueil.",
    },
  },
  {
    id: "dgpr",
    kind: "agence",
    category: "Sécurité",
    name: "Direction générale de la Police républicaine",
    mission:
      "Direction générale de la Police républicaine. Elle a ouvert le 7 novembre 2025 le numéro gratuit 117, disponible 24 h/24.",
    href: "https://www.dgpr.bj/",
    linkLabel: "dgpr.bj",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Plateformes, gouv.bj",
          url: "https://www.gouv.bj/plateformes-services/",
        },
        {
          label: "Lancement du 117",
          url: "https://www.dgpr.bj/inauguration-du-centre-dappel-de-la-police-republicaine-et-lancement-de-la-ligne-dappel-gratuit-117/",
        },
      ],
    },
  },
  {
    id: "dei",
    kind: "agence",
    category: "Voyage",
    name: "Direction de l’émigration et de l’immigration",
    mission:
      "Site des services de la DEI, dont les demandes de passeports, de cartes de séjour et de visa, selon la fiche gouv.bj.",
    href: "https://dei.gouv.bj/",
    linkLabel: "dei.gouv.bj",
    check: {
      status: "partiel",
      sources: [
        {
          label: "Plateformes, gouv.bj",
          url: "https://www.gouv.bj/plateformes-services/",
        },
      ],
      note: "Le 25 novembre 2026, dei.gouv.bj répondait HTTP 503. Le ministère de tutelle n’est pas nommé sur la fiche gouv.bj.",
    },
  },
  {
    id: "sgg",
    kind: "agence",
    category: "Textes officiels",
    name: "Secrétariat général du Gouvernement",
    mission:
      "Publication des comptes rendus du Conseil des ministres, des lois promulguées, décrets, ordonnances et décisions.",
    href: "https://sgg.gouv.bj/",
    linkLabel: "sgg.gouv.bj",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Plateformes, gouv.bj",
          url: "https://www.gouv.bj/plateformes-services/",
        },
      ],
    },
  },
  {
    id: "cnsr",
    kind: "agence",
    category: "Sécurité routière",
    name: "Centre national de sécurité routière",
    mission:
      "Le centre publie une page de numéros verts pour la police, les sapeurs-pompiers, le SAMU et la santé publique.",
    href: "https://cnsr.bj/",
    linkLabel: "cnsr.bj",
    check: {
      status: "partiel",
      sources: [
        {
          label: "Numéros verts, CNSR",
          url: "https://cnsr.bj/contact/numeros-verts",
        },
      ],
      note: "La mission institutionnelle complète du CNSR n’a pas été lue au-delà de cette page.",
    },
  },
];

const sigles: Record<string, string> = {
  assemblee: "AN",
  "cour-constitutionnelle": "CC",
  "cour-supreme": "CS",
  "cour-des-comptes": "CDC",
  haac: "HAAC",
  ces: "CES",
  "haute-cour": "HCJ",
  cena: "CENA",
  inf: "INF",
  anip: "ANIP",
  asin: "ASIN",
  apiex: "APIEx",
  arcep: "ARCEP",
  cnss: "CNSS",
  anpe: "ANPE",
  andf: "ANDF",
  dgi: "DGI",
  dgpr: "DGPR",
  dei: "DEI",
  sgg: "SGG",
  cnsr: "CNSR",
};

for (const body of bodies) {
  const sigle = sigles[body.id];
  if (sigle) body.sigle = sigle;
}
