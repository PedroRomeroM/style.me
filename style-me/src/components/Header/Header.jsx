import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTrophy,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"; // Importe os ícones que você precisa

const Header = ({ username, img, imgType, totalScore }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  function logOut() {
    localStorage.removeItem("auth");
  }

  return (
    <div className="HeaderContainer">
      <header>
        <Link to="/challenges" className="groupLeft">
          <img src="./images/logo.svg" alt="Logo do site" />
        </Link>

        <div className="groupRight">
          <div className="userDetails">
            <div className="userDetailsContainer">
              <Link to="/profile" className="username">
                <span className="text"> {username} </span>
              </Link>
              <Link to="/ranking" className="rankingInfo">
                <span className="text"> {totalScore} </span>
                <FontAwesomeIcon icon={faTrophy} className="icon" />
              </Link>
            </div>
          </div>
          <div
            className="profileDropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="profilePic"
              src={`data:${imgType};base64,${img}`}
              alt="Foto de perfil"
            />
            <div className={`dropdownContent ${dropdownVisible ? "show" : ""}`}>
              <Link to="/profile">
                <FontAwesomeIcon icon={faUser} className="icon" />{" "}
                <span className="text">Meu Perfil</span>
              </Link>
              <Link to="/ranking">
                <FontAwesomeIcon icon={faTrophy} className="icon" />{" "}
                <span className="text">Ranking</span>
              </Link>
              <Link
                to="/"
                onClick={() => {
                  logOut();
                }}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />{" "}
                <span className="text">Sair</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
