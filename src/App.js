import React from "react";
import "./App.css";
import { Circle } from "./components/Circle";

class App extends React.Component {
  constructor() {
    super();
    this.state = { activeCircle: 0, circles: 4 };
  }

  logState = () => {
    console.log({ state: this.state.activeCircle });
  };

  prevHandler = () => {
    this.changeActiveCircle(-1);
  };

  nextHandler = () => {
    this.changeActiveCircle(1);
  };

  changeActiveCircle(dir) {
    const saneModulus = (a, b) => ((a % b) + b) % b;

    this.setState(
      (prevState) => {
        const newActiveCircle = saneModulus(
          prevState.activeCircle + dir,
          this.state.circles
        );

        console.log({ newActiveCircle });

        const abs = Math.abs(
          saneModulus(prevState.activeCircle + dir, this.state.circles)
        );

        console.log({ abs });

        return {
          activeCircle: Math.abs(
            saneModulus(prevState.activeCircle + dir, this.state.circles)
          ),
        };
      },
      () => this.logState()
    );
  }

  getProgressWidth = () => {
    return (this.state.activeCircle / (this.state.circles - 1)) * 100;
  };

  componentDidUpdate = () => {
    console.log("update");
  };

  disableEndOfRange = () => {};

  render() {
    return (
      <div className="container">
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${this.getProgressWidth()}%` }}
          ></div>
          {[0, 1, 2, 3].map((c, i) => {
            return (
              <Circle
                key={i}
                active={i === this.state.activeCircle}
                i={i + 1}
              />
            );
          })}
        </div>

        <div className="btn-container">
          <button
            className="btn"
            id="prev"
            disabled={this.state.activeCircle < 1}
            onClick={this.prevHandler}
          >
            Prev
          </button>

          <button
            className="btn"
            id="next"
            disabled={this.state.activeCircle > 2}
            onClick={this.nextHandler}
          >
            Next
          </button>

          <button
            className="btn btn--green"
            id="next"
            onClick={this.nextHandler}
          >
            Loop + 1
          </button>
        </div>
      </div>
    );
  }
}

export default App;
