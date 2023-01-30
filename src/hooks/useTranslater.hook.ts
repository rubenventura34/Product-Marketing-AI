import { useEffect, useState } from "react";
import { getTranslation } from "../services/getTranslation";

const useTranslater = (originalText: string, originalLang = "en") => {
  const [text, setText] = useState(originalText);
  const [fromLang] = useState(originalLang);
  const [toLang, setToLang] = useState<string | undefined>(undefined);
  const [loadingTranslation, setLoading] = useState(false);

  useEffect(() => {
    console.log(originalText);
    if (toLang) {
      if (toLang === originalLang) return setText(originalText);
      setLoading(true);
      getTranslation(fromLang, toLang, originalText)
        .then((result) => {
          setText(result);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [toLang]);

  return { text, setToLang, loadingTranslation, setText };
};
export default useTranslater;
