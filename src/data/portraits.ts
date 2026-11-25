const modules = import.meta.glob("../assets/display/portraits/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const byFile = new Map<string, string>();

for (const [path, url] of Object.entries(modules)) {
  const file = path.split("/").pop();
  if (file) byFile.set(file, url);
}

export function portrait(file: string): string {
  const stem = file.replace(/\.(jpg|jpeg|webp)$/i, "");
  const url = byFile.get(`${stem}.webp`);
  if (!url) {
    throw new Error(`Portrait introuvable : ${file}`);
  }
  return url;
}
