import { portrait } from "./portraits";
import type { Check } from "./types";

const MEMBERS = "https://www.gouv.bj/membres/";
const MINISTRIES = "https://www.gouv.bj/ministeres/";
const COURT =
  "https://www.courconstitutionnelle.bj/files/decisions/EP26-002_23_avril_2026.pdf";
const PRESIDENCE = "https://presidence.bj/";
const VP = "https://presidence.bj/home/la-presidence/vice-president/";

const listCheck: Check = {
  status: "vérifié",
  sources: [
    { label: "Membres du Gouvernement, gouv.bj", url: MEMBERS },
    { label: "Ministères, gouv.bj", url: MINISTRIES },
  ],
};

const missingSite = (sigle: string): Check => ({
  status: "partiel",
  sources: [
    { label: "Membres du Gouvernement, gouv.bj", url: MEMBERS },
    { label: "Ministères, gouv.bj", url: MINISTRIES },
  ],
  note: `Le nom et le portefeuille sont publiés sur gouv.bj. Aucun site web n’est indiqué pour ${sigle} sur gouv.bj/ministeres au 25 novembre 2026.`,
});

export type Official = {
  id: string;
  name: string;
  role: string;
  sigle?: string;
  portrait: string;
  href?: string;
  linkLabel: string;
  check: Check;
  publicNote?: string;
};

export const president: Official = {
  id: "president",
  name: "Romuald Wadagni",
  role: "Président de la République, Chef de l'État, Chef du Gouvernement, Chef Suprême des Armées",
  portrait: portrait("wadagni.jpg"),
  href: PRESIDENCE,
  linkLabel: "Présidence de la République",
  publicNote:
    "La Cour constitutionnelle a proclamé élu Kossi Mbueke Romuald Wadagni. Il est entré en fonction le 24 mai 2026.",
  check: {
    status: "vérifié",
    sources: [
      { label: "Membres du Gouvernement, gouv.bj", url: MEMBERS },
      {
        label: "Décision EP 26-002 du 23 avril 2026, Cour constitutionnelle",
        url: COURT,
      },
      { label: "Présidence de la République", url: PRESIDENCE },
    ],
    note: "La décision EP 26-002 proclame élu monsieur Kossi Mbueke Romuald Wadagni. L’entrée en fonction est fixée au 24 mai 2026. gouv.bj retient la forme Romuald Wadagni.",
  },
};

export const vicePresident: Official = {
  id: "vice-presidente",
  name: "Mariam Chabi Talata",
  role: "Vice-présidente de la République",
  portrait: portrait("talata.jpg"),
  href: VP,
  linkLabel: "Page de la vice-présidente",
  publicNote:
    "La Cour constitutionnelle l’a proclamée vice-présidente. La Présidence la nomme aussi Mariam Chabi Talata, épouse Zime Yerima.",
  check: {
    status: "vérifié",
    sources: [
      {
        label: "Décision EP 26-002 du 23 avril 2026, Cour constitutionnelle",
        url: COURT,
      },
      { label: "La vice-présidente, presidence.bj", url: VP },
    ],
    note: "La page de la Présidence la nomme Mariam Chabi Talata, épouse Zime Yerima. Elle ne figure pas dans la liste des membres du Gouvernement sur gouv.bj/membres.",
  },
};

export const ministers: Official[] = [
  {
    id: "justice",
    name: "Yvon Detchenou",
    role: "Garde des Sceaux, Ministre de la Justice et de la Législation",
    sigle: "MJL",
    portrait: portrait("yvon-detchenou.jpg"),
    href: "https://justice.gouv.bj",
    linkLabel: "justice.gouv.bj",
    check: listCheck,
  },
  {
    id: "finances",
    name: "Aristide Medenou",
    role: "Ministre de l'Économie et des Finances, chargé de la Coopération",
    sigle: "MEF",
    portrait: portrait("aristide-medenou.jpg"),
    href: "https://finances.bj",
    linkLabel: "finances.bj",
    check: listCheck,
  },
  {
    id: "affaires-etrangeres",
    name: "Corinne Amori Brunet",
    role: "Ministre des Affaires Etrangères, chargé de l'intégration des afrodescendants",
    sigle: "MAE",
    portrait: portrait("corinne-amori-brunet.jpg"),
    href: "https://diplomatie.gouv.bj",
    linkLabel: "diplomatie.gouv.bj",
    check: listCheck,
  },
  {
    id: "interieur",
    name: "Djibril Mama Cisse Moussa",
    role: "Ministre délégué auprès du Président de la République, chargé de l'Intérieur et de la Sécurité Publique",
    sigle: "MISP",
    portrait: portrait("djibril-mama-cisse-moussa.jpg"),
    href: "https://securite.gouv.bj",
    linkLabel: "securite.gouv.bj",
    check: listCheck,
  },
  {
    id: "defense",
    name: "Gildas Agonkan",
    role: "Ministre délégué auprès du Président de la République, chargé de la Défense Nationale",
    sigle: "MDN",
    portrait: portrait("gildas-agonkan.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MDN"),
  },
  {
    id: "tourisme",
    name: "Olushegun Adjadi Bakari",
    role: "Ministre du Tourisme et du Commerce Extérieur, en charge de l'Industrie et de la Promotion de l'investissement privé",
    sigle: "MTCE",
    portrait: portrait("olushegun-adjadi-bakari.jpg"),
    href: "https://tourisme.gouv.bj",
    linkLabel: "tourisme.gouv.bj",
    check: listCheck,
  },
  {
    id: "agriculture",
    name: "Adin Yeton Bloukounon Goubalan",
    role: "Ministre de l'Agriculture, de l'Elevage et de la Pêche",
    sigle: "MAEP",
    portrait: portrait("adin-yeton-bloukounon-goubalan.jpg"),
    href: "https://agriculture.gouv.bj",
    linkLabel: "agriculture.gouv.bj",
    check: listCheck,
  },
  {
    id: "sante",
    name: "Benjamin Ignace Bodounrin Hounkpatin",
    role: "Ministre de la Santé",
    sigle: "MS",
    portrait: portrait("benjamin-ignace-bodounrin-hounkpatin.jpg"),
    href: "https://sante.gouv.bj",
    linkLabel: "sante.gouv.bj",
    check: listCheck,
  },
  {
    id: "enseignement-superieur",
    name: "Sèdami Medegan Fagla",
    role: "Ministre de l'Enseignement Supérieur et de la Recherche Scientifique, en charge de la Formation Technique",
    sigle: "MESRS",
    portrait: portrait("sedami-medegan-fagla.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MESRS"),
  },
  {
    id: "enseignement-secondaire",
    name: "Clément Kouchade",
    role: "Ministre de l'Enseignement Secondaire",
    sigle: "MES",
    portrait: portrait("clement-kouchade.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MES"),
  },
  {
    id: "enseignement-primaire",
    name: "Armand Kuyema Natta",
    role: "Ministre des Enseignements Maternel et Primaire",
    sigle: "MEMP",
    portrait: portrait("armand-kuyema-natta.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MEMP"),
  },
  {
    id: "famille",
    name: "Véronique Tognifode",
    role: "Ministre de la Famille et de l'Action Sociale",
    sigle: "MFAS",
    portrait: portrait("veronique-tognifode.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MFAS"),
  },
  {
    id: "decentralisation",
    name: "Janvier Yahouedeou",
    role: "Ministre de la Décentralisation et de la Gouvernance Locale",
    sigle: "MDGL",
    portrait: portrait("janvier-yahouedeou.jpg"),
    href: "https://decentralisation.gouv.bj",
    linkLabel: "decentralisation.gouv.bj",
    check: listCheck,
  },
  {
    id: "culture",
    name: "Yassine Latoundji",
    role: "Ministre de la Culture, des Arts et du Patrimoine",
    sigle: "MCAP",
    portrait: portrait("yassine-latoundji.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MCAP"),
  },
  {
    id: "commerce",
    name: "Shadiya Alimatou Assouman",
    role: "Ministre du Commerce Intérieur, en charge de la formalisation de l'économie",
    sigle: "MCI",
    portrait: portrait("shadiya-alimatou-assouman.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MCI"),
  },
  {
    id: "numerique",
    name: "Mahuna Akplogan",
    role: "Ministre de la Transformation Digitale et de l'Innovation, en charge de la stratégie nationale d'intelligence artificielle",
    sigle: "MTDI",
    portrait: portrait("mahuna-akplogan.jpg"),
    href: "https://innovation.gouv.bj",
    linkLabel: "innovation.gouv.bj",
    check: listCheck,
  },
  {
    id: "energie",
    name: "Edouard Dahome",
    role: "Ministre de l'Energie, de l'Eau et des Mines",
    sigle: "MEEM",
    portrait: portrait("edouard-dahome.jpg"),
    href: "https://eau-mines.gouv.bj",
    linkLabel: "eau-mines.gouv.bj",
    check: listCheck,
  },
  {
    id: "cadre-de-vie",
    name: "Georges Ale",
    role: "Ministre du Cadre de Vie et des Transports, chargé du Développement Durable",
    sigle: "MCVT",
    portrait: portrait("georges-ale.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MCVT"),
  },
  {
    id: "pme",
    name: "Awaou Baco",
    role: "Ministre des Petites et Moyennes Entreprises et de la Promotion de l'Emploi, en charge de la Formation Professionnelle",
    sigle: "MPMEPE",
    portrait: portrait("awaou-baco.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MPMEPE"),
  },
  {
    id: "communication",
    name: "Aurelie Adam Soule épouse Zoumarou",
    role: "Ministre de la Communication, en charge des Médias",
    sigle: "MCM",
    portrait: portrait("aurelie-adam-soule-epouse-zoumarou.jpg"),
    href: "https://communication.gouv.bj",
    linkLabel: "communication.gouv.bj",
    check: {
      status: "partiel",
      sources: [
        { label: "Membres du Gouvernement, gouv.bj", url: MEMBERS },
        { label: "Ministères, gouv.bj", url: MINISTRIES },
        {
          label: "La ministre, communication.gouv.bj",
          url: "https://communication.gouv.bj/ministre",
        },
      ],
      note: "gouv.bj/ministeres ne publie pas de site pour le MCM. Le site du ministère nomme Aurélie Adam Soulé Zoumarou, avec une graphie accentuée différente de la liste gouvernementale.",
    },
  },
  {
    id: "sports",
    name: "Benoît K. M. Dato",
    role: "Ministre des Sports et de l'Engagement Civique",
    sigle: "MSEC",
    portrait: portrait("benoit-k-m-dato.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MSEC"),
  },
  {
    id: "microfinance",
    name: "Nicolas Yenoussi",
    role: "Ministre délégué auprès du Ministre de l'Economie et des Finances, chargé des finances et de la microfinance",
    sigle: "MFM",
    portrait: portrait("nicolas-yenoussi.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MFM"),
  },
  {
    id: "budget",
    name: "Rodrigue Chaou",
    role: "Ministre délégué auprès du Ministre de l'Economie et des Finances, chargé du budget et de la fonction publique",
    sigle: "MBFP",
    portrait: portrait("rodrigue-chaou.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MBFP"),
  },
  {
    id: "dette",
    name: "Hugues Oscar Lokossou",
    role: "Ministre délégué auprès du Ministre de l'Economie et des Finances, chargé de la mobilisation des ressources extérieures et de la gestion de la dette",
    sigle: "MMG",
    portrait: portrait("hugues-oscar-lokossou.jpg"),
    linkLabel: "Site non publié",
    check: missingSite("le MMG"),
  },
];

export const executives: Official[] = [president, vicePresident];
