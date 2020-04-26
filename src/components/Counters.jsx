import React from "react";
import "../scss/Counters.scss";
import { connect } from "react-redux";
import { app } from "../actions";

class Counters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meterHTML: [<MeterGenerator {...props} />],
    };
  }

  addNewMeter = () => {
    this.setState({
      meterHTML: [...this.state.meterHTML, <MeterGenerator {...this.props} />],
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
  return state;
}
export default connect(mapStateToProps)(Counters);

class MeterGenerator extends React.Component {
  constructor(props, key) {
    super(props, key);
    this.state = {
      value: 0,
    };
  }

  increment = () => {
    this.props.dispatch(
      app.increamentCounter(this._reactInternalFiber.index, (state) => {
        this.setState({
          value: state.app["counter-" + this._reactInternalFiber.index],
        });
      })
    );
  };
  decrement = () => {
    this.props.dispatch(
      app.decreamentCounter(this._reactInternalFiber.index, (state) => {
        this.setState({
          value: state.app["counter-" + this._reactInternalFiber.index],
        });
      })
    );
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
