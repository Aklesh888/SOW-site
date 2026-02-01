import styles from "../styles/Login.module.css";
import swedenFlag from "../assets/login/SwedenFlag.png";
import ukFlag from "../assets/login/UKFlag.png";
import logo from "../assets/login/Diamond.png";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLoginTexts } from "../services/getLoginTexts";
import { useEffect } from "react";

export const Login = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(true);

  const { data: loginTexts, isLoading, refetch } = useQuery({
    queryKey: ["logintext"],
    queryFn: () => getLoginTexts(selectedLanguage),
  });

  useEffect(() => {
    refetch();
  }, [selectedLanguage]);

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleLanguageButton = (language) => {
    setSelectedLanguage(language);
    setIsLanguageSelectorOpen(false);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className={styles.background}>
      <nav className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" className={styles.logo} />
          <div className={styles.mediumScreenNav}>
            <div
              className={styles.hamburger}
              onClick={() => {
                setShowHamburgerMenu(!showHamburgerMenu);
              }}
            >
              Open
            </div>
          </div>
        </div>

        <div className={styles.linksLanguageContainer}>
          <div className={styles.navbarLinks}>
            <div className={styles.navbarLink}>{loginTexts.navbar.home}</div>
            <div className={styles.navbarLink}>{loginTexts.navbar.order}</div>
            <div className={styles.navbarLink}>
              {loginTexts.navbar.ourCustomers}
            </div>
            <div className={styles.navbarLink}>{loginTexts.navbar.about}</div>
            <div className={styles.navbarLink}>{loginTexts.navbar.contact}</div>
          </div>
          {isLanguageSelectorOpen && (
            <div className={styles.selectLanguageContainer}>
              <div
                className={styles.languageSelect}
                onClick={() => handleLanguageButton("swedish")}
              >
                <div>Swedesh</div>
                <img src={swedenFlag} alt="" className={styles.flagImage} />
              </div>
              <div
                className={styles.languageSelect}
                onClick={() => handleLanguageButton("english")}
              >
                <div>English</div>
                <img src={ukFlag} alt="" className={styles.flagImage} />
              </div>
            </div>
          )}

          {selectedLanguage === "Language 1" ? (
            <div
              className={styles.languageSelect}
              onClick={() => {
                setIsLanguageSelectorOpen(true);
              }}
            >
              <div>Swedish</div>
              <img src={swedenFlag} alt="" className={styles.flagImage} />
            </div>
          ) : (
            <div
              className={styles.languageSelect}
              onClick={() => {
                setIsLanguageSelectorOpen(true);
              }}
            >
              <div>English</div>
              <img src={ukFlag} alt="" className={styles.flagImage} />
            </div>
          )}
        </div>
      </nav>

      {showHamburgerMenu && (
        <div className={styles.hamburgerContainer}>
          <div className={styles.hamburgerItem}>{loginTexts.navbar.home}</div>
          <div className={styles.hamburgerItem}>{loginTexts.navbar.order}</div>
          <div className={styles.hamburgerItem}>
            {loginTexts.navbar.ourCustomers}
          </div>
          <div className={styles.hamburgerItem}>{loginTexts.navbar.about}</div>
          <div className={styles.hamburgerItem}>
            {loginTexts.navbar.contact}
          </div>
        </div>
      )}

      <div className={styles.loginContainer}>
        <div className={styles.login}>
          <div className={styles.loginTitle}>{loginTexts.contents.logIn}</div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>
              {loginTexts.contents.enterEmail}
            </div>
            <input
              type="text"
              className={styles.email}
              placeholder={loginTexts.contents.email}
            />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>
              {loginTexts.contents.enterPassword}
            </div>
            <input
              type="text"
              className={styles.password}
              placeholder={loginTexts.contents.password}
            />
          </div>
          <button className={styles.loginButton}>
            {loginTexts.contents.logIn}
          </button>

          <div className={styles.registerForgetContainer}>
            <button className={styles.registerButton}>
              {loginTexts.contents.register}
            </button>
            <button className={styles.forgotButton}>
              {loginTexts.contents.forgotPassword}
            </button>
          </div>
        </div>
      </div>

      <footer className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.companyName}>{loginTexts.footer.address}</div>
          <div className={styles.footerLinks}>
            <div>{loginTexts.footer.home}</div>
            <div>{loginTexts.footer.order}</div>
            <div>{loginTexts.footer.contact}</div>
          </div>
        </div>
        <hr className={styles.line} />
        <div>{loginTexts.footer.allRightServed}</div>
      </footer>
    </div>
  );
};
