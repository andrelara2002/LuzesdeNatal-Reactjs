import React, { Component } from "react";
import "./styles.css";

class MainComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      systemState: "off",
      lightsQuant: [1, 2, 1, 2, 1]
    };
  }

  generateLights = () => {
    return this.state.lightsQuant.map((value, idx) => {
      return (
        <div className={"luz" + this.state.systemState} id={"light" + value} />
      );
    });
  };

  tweakerLights = () => {
    if (this.state.systemState === "off") {
      this.setState(
        {
          systemState: "on"
        },
        () => {
          this.generateLights;
          document.getElementById("buttonOn").innerHTML = "OFF";
        }
      );
    } else {
      this.setState(
        {
          systemState: "off"
        },
        () => {
          this.generateLights;
          document.getElementById("buttonOn").innerHTML = "ON";
        }
      );
    }
  };

  render() {
    return (
      <div className="main">
        <div className="luzes">{this.generateLights()}</div>
        <div className="luzes">{this.generateLights()}</div>
        <div className="luzes">{this.generateLights()}</div>

        <div className="botoes">
          <button
            id="buttonOn"
            onClick={() => {
              this.tweakerLights();
            }}
          >
            ON
          </button>
        </div>
      </div>
    );
  }
}
export default MainComponent;
