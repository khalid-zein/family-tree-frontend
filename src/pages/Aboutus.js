import { useTranslation } from "react-i18next";

function Aboutus() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="history">
      <select onChange={(e) => handleClick(e.target.value)}>
        <option>Choose language</option>
        <option value="ar">عربي</option>
        <option value="en">English</option>
      </select>

      <div className="aboutus">
        <p>{t("About.1")}</p>
      </div>
    </div>
  );
}

export default Aboutus;
