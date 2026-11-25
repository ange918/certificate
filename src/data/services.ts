import type { Check } from "./types";

export type ServiceItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  category: string;
  ministry: string;
  check: Check;
};

export const serviceCategories = [
  "Guichet",
  "Identité et état civil",
  "Voyage",
  "Entreprise",
  "Impôts et foncier",
  "Justice",
  "Protection sociale",
  "Sécurité",
  "Textes et information",
] as const;

const gouvPlatforms = "https://www.gouv.bj/plateformes-services/";

export const services: ServiceItem[] = [
  {
    id: "service-public",
    title: "Portail national des services publics",
    summary:
      "Porte d’entrée officielle des démarches administratives, liée depuis l’en-tête de gouv.bj.",
    href: "https://service-public.bj/",
    category: "Guichet",
    ministry: "Plusieurs administrations",
    check: {
      status: "vérifié",
      sources: [
        { label: "gouv.bj", url: "https://www.gouv.bj/" },
        { label: "Plateformes, gouv.bj", url: gouvPlatforms },
      ],
    },
  },
  {
    id: "casier",
    title: "Casier judiciaire, extrait B3",
    summary:
      "Se connecter sur service-public.bj avec le NPI, puis choisir « Délivrance du Casier judiciaire (Extrait B3 du casier judiciaire) ». Autorité compétente : ministère de la Justice et de la Législation.",
    href: "https://service-public.bj/",
    category: "Justice",
    ministry: "Ministère de la Justice et de la Législation",
    check: {
      status: "partiel",
      sources: [
        {
          label: "Fiche CatIS, mise à jour du 6 novembre 2026",
          url: "https://catis.xroad.bj/publicservices/PS00373/eServiceSection",
        },
        {
          label: "Fiche service",
          url: "https://catis.xroad.bj/publicservices/PS00373/publicService",
        },
      ],
      note: "La fiche décrit la démarche sur service-public.bj. Une adresse dédiée du type casierjudiciaire.justice.gouv.bj ne répond pas. Le lien direct de la page du service reste à vérifier.",
    },
  },
  {
    id: "nationalite",
    title: "Certificat de nationalité",
    summary:
      "Le portail national est le guichet où cette démarche a été annoncée. La page précise du certificat n’a pas été retrouvée.",
    href: "https://service-public.bj/",
    category: "Justice",
    ministry: "Administration non précisée",
    check: {
      status: "à vérifier",
      sources: [
        {
          label: "Bénin Révélé, 12 janvier 2021",
          url: "https://beninrevele.bj/article/75/roles-portail-national-service-public.bj/",
        },
        { label: "Portail national", url: "https://service-public.bj/" },
      ],
      note: "L’article de 2021 cite le certificat de nationalité parmi les services du portail. Aucune fiche à jour ni URL directe n’a été confirmée le 25 novembre 2026.",
    },
  },
  {
    id: "anip",
    title: "Actes d’état civil et identité",
    summary:
      "L’ANIP gère le numéro personnel d’identification, la carte biométrique, le registre des actes d’état civil et les certificats d’identification.",
    href: "https://eservices.anip.bj/",
    category: "Identité et état civil",
    ministry: "Administration non précisée",
    check: {
      status: "partiel",
      sources: [{ label: "e-services ANIP", url: "https://eservices.anip.bj/" }],
      note: "La tutelle ministérielle n’est pas indiquée sur la page. Le détail de chaque formulaire n’a pas été ouvert un par un.",
    },
  },
  {
    id: "evisa",
    title: "e-Visa",
    summary:
      "Demande de visa électronique. gouv.bj pointe vers www.evisa.bj, et evisa.gouv.bj y redirige.",
    href: "https://www.evisa.bj/",
    category: "Voyage",
    ministry: "Administration non précisée",
    check: {
      status: "partiel",
      sources: [
        { label: "En-tête gouv.bj", url: "https://www.gouv.bj/" },
        { label: "Plateformes, gouv.bj", url: gouvPlatforms },
        { label: "e-Visa", url: "https://www.evisa.bj/" },
      ],
      note: "Le ministère responsable n’est pas nommé sur la fiche gouv.bj.",
    },
  },
  {
    id: "passeport",
    title: "Passeport, carte de séjour et visa",
    summary:
      "Site de la Direction de l’émigration et de l’immigration pour les passeports, les cartes de séjour et les visas, selon gouv.bj.",
    href: "https://dei.gouv.bj/",
    category: "Voyage",
    ministry: "Administration non précisée",
    check: {
      status: "partiel",
      sources: [{ label: "Plateformes, gouv.bj", url: gouvPlatforms }],
      note: "dei.gouv.bj répondait HTTP 503 le 25 novembre 2026. Le ministère de tutelle n’est pas nommé sur la fiche.",
    },
  },
  {
    id: "monentreprise",
    title: "Créer une entreprise",
    summary:
      "Plateforme liée par gouv.bj sous l’intitulé « Créer mon entreprise ». L’accueil oriente selon le type d’entité. Le contact affiché est celui de l’APIEx.",
    href: "https://monentreprise.bj/",
    category: "Entreprise",
    ministry: "Présidence de la République",
    check: {
      status: "vérifié",
      sources: [
        { label: "En-tête gouv.bj", url: "https://www.gouv.bj/" },
        { label: "MonEntreprise", url: "https://monentreprise.bj/" },
        {
          label: "Tutelle de l’APIEx",
          url: "https://investbenin.bj/about/apiex",
        },
      ],
    },
  },
  {
    id: "apiex",
    title: "Investir et exporter",
    summary:
      "Site de l’Agence de promotion des investissements et des exportations, guichet de création d’entreprise selon gouv.bj.",
    href: "https://apiex.bj/",
    category: "Entreprise",
    ministry: "Présidence de la République",
    check: {
      status: "vérifié",
      sources: [
        { label: "Plateformes, gouv.bj", url: gouvPlatforms },
        { label: "APIEx", url: "https://investbenin.bj/about/apiex" },
      ],
    },
  },
  {
    id: "impots",
    title: "e-services des impôts",
    summary:
      "Sous-domaine de la Direction générale des impôts. Le contenu des démarches n’était pas lisible.",
    href: "https://e-services.impots.bj/",
    category: "Impôts et foncier",
    ministry: "Administration non précisée",
    check: {
      status: "à vérifier",
      sources: [
        { label: "DGI", url: "https://www.impots.bj/" },
        { label: "e-services impôts", url: "https://e-services.impots.bj/" },
      ],
      note: "Le domaine répond, mais la page n’a pas permis de confirmer la déclaration, le paiement ou l’IFU le 25 novembre 2026.",
    },
  },
  {
    id: "andf",
    title: "Situation géographique d’une parcelle",
    summary:
      "Démarche publiée sur le portail national. Elle permet de vérifier si une parcelle est dans l’emprise d’un domaine de l’État, d’une zone d’utilité publique ou d’un titre existant. Institution compétente : ANDF.",
    href: "https://service-public.bj/public/services/service/PS01425",
    category: "Impôts et foncier",
    ministry: "Ministère de l'Économie et des Finances",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Fiche service-public.bj",
          url: "https://service-public.bj/public/services/service/PS01425",
        },
      ],
    },
  },
  {
    id: "cnss",
    title: "Services en ligne de la CNSS",
    summary: "Page des services en ligne de la Caisse nationale de sécurité sociale.",
    href: "https://cnss.bj/service-en-ligne/",
    category: "Protection sociale",
    ministry: "Administration non précisée",
    check: {
      status: "partiel",
      sources: [
        { label: "Services en ligne CNSS", url: "https://cnss.bj/service-en-ligne/" },
      ],
      note: "L’intitulé de la page est confirmé. La liste des téléprocédures et la tutelle ne l’ont pas été.",
    },
  },
  {
    id: "anpe",
    title: "Agence nationale pour l’emploi",
    summary:
      "Consultation des offres et inscription des demandeurs d’emploi, selon la page indexée du site.",
    href: "https://anpe.bj/",
    category: "Protection sociale",
    ministry: "Administration non précisée",
    check: {
      status: "à vérifier",
      sources: [{ label: "ANPE", url: "https://anpe.bj/" }],
      note: "anpe.bj répondait HTTP 503 le 25 novembre 2026. Les parcours en ligne n’ont pas été ouverts.",
    },
  },
  {
    id: "plainte-arcep",
    title: "Plainte télécom, internet ou poste",
    summary:
      "Dépôt en ligne après une réclamation à l’opérateur restée sans réponse satisfaisante sous 30 jours. Ligne gratuite 131.",
    href: "https://pigru.arcep.bj/plaintes/portail",
    category: "Sécurité",
    ministry: "Administration non précisée",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Portail des plaintes ARCEP",
          url: "https://pigru.arcep.bj/plaintes/portail",
        },
      ],
    },
  },
  {
    id: "denonciation",
    title: "Dénoncer la corruption",
    summary:
      "Plateforme des plaintes et dénonciations pour corruption et mauvaise gouvernance. Numéro gratuit 155.",
    href: "https://denonciation.bj/",
    category: "Justice",
    ministry: "Présidence de la République",
    check: {
      status: "vérifié",
      sources: [
        {
          label: "Article gouv.bj, 1er décembre 2022",
          url: "https://www.gouv.bj/article/2046/la-plateforme-plaintes-denonciations-nouvel-outil-traquer-corruption-operationnel/",
        },
        { label: "denonciation.bj", url: "https://denonciation.bj/" },
      ],
    },
  },
  {
    id: "sgg",
    title: "Lois, décrets et Conseil des ministres",
    summary:
      "Comptes rendus du Conseil des ministres, lois, décrets, ordonnances et décisions.",
    href: "https://sgg.gouv.bj/",
    category: "Textes et information",
    ministry: "Présidence de la République",
    check: {
      status: "vérifié",
      sources: [{ label: "Plateformes, gouv.bj", url: gouvPlatforms }],
    },
  },
  {
    id: "ask",
    title: "#AskGouvBénin",
    summary:
      "Sessions publiques de questions et de réponses avec les autorités, annoncées par gouv.bj.",
    href: "https://ask.gouv.bj/",
    category: "Textes et information",
    ministry: "Plusieurs administrations",
    check: {
      status: "vérifié",
      sources: [{ label: "Plateformes, gouv.bj", url: gouvPlatforms }],
    },
  },
  {
    id: "dgpr",
    title: "Police républicaine",
    summary: "Site de la Direction générale de la Police républicaine.",
    href: "https://dgpr.bj/",
    category: "Sécurité",
    ministry: "Ministère de l'Intérieur et de la Sécurité publique",
    check: {
      status: "partiel",
      sources: [
        { label: "Plateformes, gouv.bj", url: gouvPlatforms },
        { label: "DGPR", url: "https://www.dgpr.bj/" },
      ],
      note: "Le rattachement au ministère de l’Intérieur est celui du portefeuille publié sur gouv.bj pour la sécurité publique. La page de la DGPR ne le réécrit pas explicitement.",
    },
  },
  {
    id: "ravip",
    title: "Recensement administratif à vocation d’identification",
    summary:
      "Site RAVIP indiqué par gouv.bj. Le nom de domaine ne se résolvait plus le jour de la vérification.",
    href: "https://ravip.bj/",
    category: "Identité et état civil",
    ministry: "Administration non précisée",
    check: {
      status: "à vérifier",
      sources: [{ label: "Plateformes, gouv.bj", url: gouvPlatforms }],
      note: "ravip.bj était introuvable (DNS) le 25 novembre 2026, alors que gouv.bj le publie encore.",
    },
  },
];
