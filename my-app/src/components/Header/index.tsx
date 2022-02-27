import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { DarkMode, Home, LightMode } from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

import "./Header.scss";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation()
  const { colorMode, toggleMode } = useDarkMode();

  return (
    <div className={`primary-bg header_container __${colorMode}`}>
      <div>
        <Link to="/">
          <IconButton className={`header_button __${colorMode}`}><Home /></IconButton>

        </Link>
        <h1 className={`__${colorMode}`}>{t("welcome")}</h1>
      </div>
      <IconButton className={`header_button __${colorMode}`} onClick={toggleMode}>{colorMode === "dark" ? <DarkMode /> : <LightMode />}</IconButton>
    </div>
  );
}

export default Header;
