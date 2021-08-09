import React from "react";
import logo from "../logo.svg";
import "./styles/nav.css";
import { AiOutlineBell } from "react-icons/ai";

function Logo(props) {
  return (
    <div className="logo">
      <img
        src="https://cdn.pixabay.com/photo/2020/08/23/14/58/education-5511048_960_720.png"
        alt=""
      />
      <h4>Soutenece DZ</h4>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="user-info">
      <div className="userAvatar">
        <img src="https://img.icons8.com/bubbles/2x/user.png" alt="" />
        <h4>safwan bahi</h4>
      </div>
      <Notification />
    </div>
  );
}

function Notification() {
  return (
    <div className="notification">
      <AiOutlineBell />
    </div>
  );
}
function Nav(params) {
  return (
    <nav>
      <div className="nav-container">
        <Logo />
        <UserInfo />
      </div>
    </nav>
  );
}
export default Nav;
