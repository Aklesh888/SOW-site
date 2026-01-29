import styles from "../styles/Login.module.css";
import swedenFlag from "../assets/login/SwedenFlag.png";
import ukFlag from "../assets/login/UKFlag.png";
import logo from "../assets/login/Diamond.png";
import { useState } from "react";

export const Login = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Language 2");
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(true);

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleLanguageButton = (language) => {
    setSelectedLanguage(language);
    setIsLanguageSelectorOpen(false);
  };

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
        
        <div className={styles.navbarLinks}>
          <div className={styles.navbarLink}>Home</div>
          <div className={styles.navbarLink}>Home</div>
          <div className={styles.navbarLink}>Home</div>
          <div className={styles.navbarLink}>Home</div>
          <div className={styles.navbarLink}>Home</div>
        </div>
        {isLanguageSelectorOpen && (
          <div className={styles.selectLanguageContainer}>
            <div
              className={styles.languageSelect}
              onClick={() => handleLanguageButton("Language 1")}
            >
              <div>Language 1</div>
              <img src={swedenFlag} alt="" className={styles.flagImage} />
            </div>
            <div
              className={styles.languageSelect}
              onClick={() => handleLanguageButton("Language 2")}
            >
              <div>Language 2</div>
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
            <div>Language 1</div>
            <img src={swedenFlag} alt="" className={styles.flagImage} />
          </div>
        ) : (
          <div
            className={styles.languageSelect}
            onClick={() => {
              setIsLanguageSelectorOpen(true);
            }}
          >
            <div>Language 2</div>
            <img src={ukFlag} alt="" className={styles.flagImage} />
          </div>
        )}
      </nav>

      {showHamburgerMenu && (
        <div className={styles.hamburgerContainer}>
          <div className={styles.hamburgerItem}>Home</div>
          <div className={styles.hamburgerItem}>Home</div>
          <div className={styles.hamburgerItem}>Home</div>
          <div className={styles.hamburgerItem}>Home</div>
          <div className={styles.hamburgerItem}>Home</div>
        </div>
      )}

      <div className={styles.loginContainer}>
        <div className={styles.login}>
          <div className={styles.loginTitle}>Log in</div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Enter your email address</div>
            <input
              type="text"
              className={styles.email}
              placeholder="Email address"
            />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>Enter your password address</div>
            <input
              type="text"
              className={styles.password}
              placeholder="Password"
            />
          </div>
          <button className={styles.loginButton}>Login</button>

          <div className={styles.registerForgetContainer}>
            <button className={styles.registerButton}>Register</button>
            <button className={styles.forgotButton}>Forgot Password</button>
          </div>
        </div>
      </div>

      <footer className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.companyName}>123 Fakturera</div>
          <div className={styles.footerLinks}>
            <div>Home</div>
            <div>Order</div>
            <div>Contact Us</div>
          </div>
        </div>
        <hr className={styles.line} />
        <div>© Lättfaktura, CRO no. 638537, 2025. All rights reserved.</div>
      </footer>
    </div>
  );
};
