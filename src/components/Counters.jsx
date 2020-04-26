import React from "react";
import "../scss/Counters.scss";
import { connect } from 'react-redux';


class Counters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meterHTML: [<MeterGenerator />],
    };
  }

  addNewMeter = () => {
    this.setState({
      meterHTML: [...this.state.meterHTML, <MeterGenerator />],
    });
  };

  render() {
    const className = this.state.animate ? "animate" : "";
    return (
      <div className={"counters"}>
        <div className={"counters-button"}>
          <button className={"myButton"} onClick={this.addNewMeter}>
            {"Add new meter"}
          </button>
        </div>
        <div className={`wrapper ${className}`}>
          {this.state.meterHTML.map((meter) => meter)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

export default connect(mapStateToProps)(Counters);


class MeterGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  decrement = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  render() {
    return (
      <div className="counter-wrapper">
        <span className="counter">{this.state.value}</span>

        <div className="controls">
          <button className="decrement" onClick={this.decrement}>
            -
          </button>
          <button className="increment" onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}
