import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadJSON = (file) => {
  const filePath = path.join(__dirname, "../i18n", file);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

export const getLoginTexts = (req, res) => {
  const lang = req.query.lang || "english";

  const translations = {
    english: loadJSON("english.json"),
    swedish: loadJSON("swedish.json"),
  };

  const selectedLang = translations[lang] || translations["english"];

  console.log("Selected language texts:", selectedLang);
  res.json(selectedLang);
};
