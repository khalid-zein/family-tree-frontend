import { useTranslation } from "react-i18next";

function Aboutus() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="history">
      <div className="upper-bg"></div>
      <div className="lower-bg">
        <div className="content-bg">
          <select onChange={(e) => handleClick(e.target.value)}>
            <option>Choose language</option>
            <option value="ar">عربي</option>
            <option value="en">English</option>
          </select>
          <p className="p-one">{t("1.1")}</p>

          <div>
            <h2>{t("2.1")}</h2>
            <p>{t("3.1")}</p>
          </div>

          <div>
            <h2>{t("4.1")}</h2>
            <p>{t("5.1")}</p>
          </div>

          <div>
            <h2>{t("6.1")}</h2>
            <p>{t("7.1")}</p>
          </div>

          <div>
            <h2>{t("8.1")}</h2>
            <p>{t("9.1")}</p>
          </div>

          <div>
            <h2>{t("10.1")}</h2>
            <p>{t("11.1")}</p>
          </div>

          <div>
            <h2>{t("12.1")}</h2>
            <p>{t("13.1")}</p>
          </div>

          <div>
            <h2>{t("14.1")}</h2>
            <p>{t("15.1")}</p>
          </div>

          <div>
            <p>{t("16.1")}</p>
            <p>{t("17.1")}</p>
          </div>

          <div>
            <p>{t("18.1")}</p>
            <p>{t("19.1")}</p>
            <p>{t("20.1")}</p>
          </div>

          <div>
            <p>{t("21.1")}</p>
          </div>

          <div>
            <p>{t("22.1")}</p>
          </div>

          <div>
            <p>{t("23.1")}</p>
            <p>{t("24.1")}</p>
          </div>

          <div>
            <p>{t("25.1")}</p>
            <p>{t("26.1")}</p>
          </div>

          <div>
            <p>{t("27.1")}</p>
          </div>

          <div>
            <p>{t("28.1")}</p>
            <p>{t("29.1")}</p>
          </div>

          <div>
            <p>{t("30.1")}</p>
            <p>{t("31.1")}</p>
            <p>{t("32.1")}</p>
            <p>{t("33.1")}</p>
          </div>

          <div>
            <p>{t("34.1")}</p>
            <p>{t("35.1")}</p>
          </div>

          <div>
            <p>{t("36.1")}</p>
            <p>{t("37.1")}</p>
          </div>

          <div>
            <p>{t("38.1")}</p>
          </div>

          <div>
            <p>{t("39.1")}</p>
            <p>{t("40.1")}</p>
          </div>

          <div>
            <p>{t("41.1")}</p>
            <p>{t("42.1")}</p>
            <p>{t("43.1")}</p>
          </div>
          <div>
            <p>{t("44.1")}</p>
          </div>

          <div>
            <p>{t("45.1")}</p>
            <p>{t("46.1")}</p>
          </div>

          <div>
            <p>{t("47.1")}</p>
          </div>

          <div>
            <p>{t("48.1")}</p>
          </div>

          <div>
            <p>{t("49.1")}</p>
            <p>{t("50.1")}</p>
          </div>

          <div>
            <p>{t("51.1")}</p>
          </div>

          <div>
            <p>{t("52.1")}</p>
          </div>

          <div>
            <p>{t("53.1")}</p>
            <p>{t("54.1")}</p>
          </div>

          <div>
            <p>{t("55.1")}</p>
          </div>

          <div>
            <p>{t("56.1")}</p>
            <p>{t("57.1")}</p>
            <p>{t("58.1")}</p>
            <p>{t("59.1")}</p>
            <p>{t("60.1")}</p>
          </div>

          <div>
            <p>{t("61.1")}</p>
            <p>{t("62.1")}</p>
            <p>{t("63.1")}</p>
          </div>

          <div>
            <p>{t("64.1")}</p>
          </div>

          <div>
            <p>{t("65.1")}</p>
          </div>

          <div>
            <p>{t("66.1")}</p>
          </div>

          <div>
            <h2>{t("67.1")}</h2>
          </div>

          <div>
            <p>{t("68.1")}</p>
          </div>
          <div>
            <h2>{t("69.1")}</h2>
            <p>{t("70.1")}</p>
            <p>{t("71.1")}</p>
            <p>{t("72.1")}</p>
          </div>

          <div>
            <h2>{t("73.1")}</h2>
            <p>{t("74.1")}</p>
            <p>{t("75.1")}</p>
            <p>{t("76.1")}</p>
            <p>{t("77.1")}</p>
            <p>{t("78.1")}</p>
            <p>{t("79.1")}</p>
          </div>

          <div>
            <p>{t("80.1")}</p>
            <p>{t("81.1")}</p>
          </div>

          <div>
            <p>{t("82.1")}</p>
            <p>{t("83.1")}</p>
            <p>{t("84.1")}</p>
            <p>{t("85.1")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
