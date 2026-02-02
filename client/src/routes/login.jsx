import styles from "../styles/Login.module.css";
import swedenFlag from "../assets/login/SwedenFlag.png";
import ukFlag from "../assets/login/UKFlag.png";
import logo from "../assets/login/Diamond.png";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getLoginTexts } from "../services/getLoginTexts";
import { useEffect } from "react";
import { loginRequest } from "../services/loginRequest";
import { useNavigate } from "react-router";
import { CgMenu } from "react-icons/cg";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const Login = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const navigate = useNavigate();

  const languageRef = useRef(null);
  const hamburgerRef = useRef(null);

  const {
    data: loginTexts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["logintext"],
    queryFn: () => getLoginTexts(selectedLanguage),
  });

  const { mutate: logInMutate, isPending: isLogInPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => loginRequest(logInForm),
    onSuccess: (data) => {
      if (data.token) {
        sessionStorage.setItem("token", data.token);
        navigate("/pricing-list");
      } else {
        setErrorEmail(loginTexts.contents.invalidCredentials);
        console.log("error credentials");
      }
    },
    onError: () => {
      setErrorEmail(loginTexts.contents.invalidCredentials);
    },
  });

  useEffect(() => {
    refetch();
  }, [selectedLanguage]);

  const handleEmailBlur = () => {
    if (!logInForm.email.trim()) {
      setErrorEmail(loginTexts.contents.emailCannotEmpty);
    } else {
      setErrorEmail("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageSelectorOpen(false);
      }

      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setShowHamburgerMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePasswordBlur = () => {
    if (!logInForm.password.trim()) {
      setErrorPassword(loginTexts.contents.passwordCannotEmpty);
    } else {
      setErrorPassword("");
    }
  };

  const handleLanguageButton = (language) => {
    setSelectedLanguage(language);
    setIsLanguageSelectorOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!logInForm.email.trim()) {
      setErrorEmail(loginTexts.contents.emailCannotEmpty);
      hasError = true;
    }
    if (!logInForm.password.trim()) {
      setErrorPassword(loginTexts.contents.passwordCannotEmpty);
      hasError = true;
    }
    if (hasError) return;

    logInMutate();
  };

  if (isLoading || !loginTexts) {
    return <div className={styles.loadingText}>Loading</div>;
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
              <CgMenu size={32} />
            </div>
          </div>
        </div>

        <div className={styles.linksLanguageContainer}>
          <div className={styles.navbarLinks}>
            <div className={styles.navbarLink}>{loginTexts.navbar.home}</div>
            <a href="#" className={styles.navbarLink}>{loginTexts.navbar.order}</a>
            <a href="#" className={styles.navbarLink}>
              {loginTexts.navbar.ourCustomers}
            </a>
            <a href="#" className={styles.navbarLink}>{loginTexts.navbar.about}</a>
            <a href="#" className={styles.navbarLink}>{loginTexts.navbar.contact}</a>
          </div>
          <div ref={languageRef}>
            {isLanguageSelectorOpen && (
              <div className={styles.selectLanguageContainer}>
                <div
                  className={styles.languageSelect}
                  onClick={() => handleLanguageButton("swedish")}
                >
                  <div className={styles.languageSelectText}>Swedesh</div>
                  <img src={swedenFlag} alt="" className={styles.flagImage} />
                </div>
                <div
                  className={styles.languageSelect}
                  onClick={() => handleLanguageButton("english")}
                >
                  <div className={styles.languageSelectText}>English</div>
                  <img src={ukFlag} alt="" className={styles.flagImage} />
                </div>
              </div>
            )}

            {selectedLanguage === "swedish" ? (
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
        </div>
      </nav>

      {showHamburgerMenu && (
        <div className={styles.hamburgerContainer} ref={hamburgerRef}>
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

      <form onSubmit={handleSubmit} className={styles.loginContainer}>
        <div className={styles.login}>
          <h1 className={styles.loginTitle}>{loginTexts.contents.logIn}</h1>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>
              {loginTexts.contents.enterEmail}
            </div>
            <input
              type="text"
              name="email"
              className={styles.email}
              placeholder={loginTexts.contents.email}
              value={logInForm.email}
              onChange={(e) =>
                setLogInForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              onBlur={handleEmailBlur}
            />
            <div className={styles.errorMessage}>{errorEmail}</div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputLabel}>
              {loginTexts.contents.enterPassword}
            </div>
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={styles.password}
                placeholder={loginTexts.contents.password}
                value={logInForm.password}
                onChange={(e) =>
                  setLogInForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                onBlur={handlePasswordBlur}
              />
              {showPassword ? (
                <FiEye
                  style={{ alignSelf: "center" }}
                  onClick={() => setshowPassword(false)}
                />
              ) : (
                <FiEyeOff
                  style={{ alignSelf: "center" }}
                  onClick={() => setshowPassword(true)}
                />
              )}
            </div>
            <div className={styles.errorMessage}>{errorPassword}</div>
          </div>
          <button type="submit" className={styles.loginButton}>
            {loginTexts.contents.logIn}
          </button>
          {isLogInPending && <p>Logging in</p>}
          <div className={styles.registerForgetContainer}>
            <button className={styles.registerButton}>
              {loginTexts.contents.register}
            </button>
            <button className={styles.forgotButton}>
              {loginTexts.contents.forgotPassword}
            </button>
          </div>
        </div>
      </form>

      <footer className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.companyName}>{loginTexts.footer.address}</div>
          <div className={styles.footerLinks}>
            <a href="#">{loginTexts.footer.home}</a>
            <a href="#">{loginTexts.footer.order}</a>
            <a href="#">{loginTexts.footer.contact}</a>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.allRightServed}>
          {loginTexts.footer.allRightServed}
        </div>
      </footer>
    </div>
  );
};
