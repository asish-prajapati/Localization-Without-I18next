import en from "./en";
import de from "./de";
const translations = {
  en,
  de,
};
const getTranslate = (local = "en") => {
  const data = translations[local] ? translations[local] : en;
  return data;
};
export default getTranslate;
