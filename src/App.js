import React from "react";
import "./App.css";
import { Circle } from "./components/Circle";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      circles: [
        { active: true },
        { active: false },
        { active: false },
        { active: false },
      ],
      prevButtonDisabled: true,
      nextButtonDisabled: false,
    };
    this.progressWidth = 80;
  }

  prevHandler = () => {
    const idxOfActiveCircles = this.state.circles.findIndex((c) => c.active);
    console.log({ idxOfActiveCircles });
    if (idxOfActiveCircles === 0) {
      this.setState({ prevButtonEnabled: false }, () => {
        console.log({ state: this.state });
      });
      return;
    }

    this.setState({ prevButtonEnabled: true });

    const resetActiveCircles = this.state.circles
      .slice()
      .map((c, i) =>
        i === idxOfActiveCircles ? (c.active = true) : (c.active = false)
      );

    this.setState({ circles: resetActiveCircles });
  };

  nextHandler = () => {
    const idxOfActiveCircles = this.state.circles.findIndex((c) => c.active);
    console.log({ idxOfActiveCircles });
    if (idxOfActiveCircles === 3) {
      this.setState({ nextButtonEnabled: false }, () =>
        console.log({ state: this.state })
      );
      return;
    }

    this.setState({ nextButtonEnabled: true });

    const resetActiveCircles = this.state.circles
      .slice()
      .map((c, i) =>
        i === idxOfActiveCircles ? (c.active = true) : (c.active = false)
      );

    this.setState({ circles: resetActiveCircles });
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
            style={{ width: `${this.progressWidth}%` }}
          ></div>
          {this.state.circles.map((c, i) => {
            return <Circle key={i} props={c} />;
          })}
        </div>

        <div className="btn-container">
          <button
            className="btn"
            id="prev"
            disabled={this.state.prevButtonEnabled}
            onClick={this.prevHandler}
          >
            Prev
          </button>

          <button
            className="btn"
            id="next"
            disabled={this.state.nextButtonEnabled}
            onClick={this.nextHandler}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
