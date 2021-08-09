import React from "react";
import "../components/styles/sidebare.css";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import { RiMessengerFill } from "react-icons/ri";

function Menu() {
  return (
    <menu>
      <li>votre damande</li>

      <li>
        <a href="#a">
          <RiMessengerFill fill="#281AC8" />
          <sapn>Messeges</sapn>
        </a>
        <span className="notif">2</span>
      </li>
    </menu>
  );
}

class Sidebare extends React.Component {
  render() {
    return (
      <div className="side_bar" id="sideBare">
        <Menu />
      </div>
    );
  }
}

export default Sidebare;
