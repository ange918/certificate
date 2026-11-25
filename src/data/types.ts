export const VERIFIED_ON = "2026-11-25";
export const VERIFIED_ON_LABEL = "25 novembre 2026";

export type SourceRef = {
  label: string;
  url: string;
};

export type Check = {
  status: "vérifié" | "partiel" | "à vérifier";
  sources: SourceRef[];
  note?: string;
};

export type OfficialLink = {
  href: string;
  label: string;
};
