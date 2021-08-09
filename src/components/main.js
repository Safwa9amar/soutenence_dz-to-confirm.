import React from "react";
import "./styles/main.css";

class Main extends React.Component {
  componentDidMount() {
    let sideBare = document.getElementById("sideBare");
    let Humberger = document.getElementById("toggleSideBare");
    Humberger.addEventListener("click", () => {
      sideBare.classList.toggle("active");
      Humberger.classList.toggle("close");
    });
  }
  render() {
    return (
      <div className="main">
        <div className="Humberger" id="toggleSideBare">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Main;
