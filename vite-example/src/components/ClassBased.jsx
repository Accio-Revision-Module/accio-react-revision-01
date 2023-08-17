/* eslint-disable react/prop-types */
import { Component } from "react";

export default class ClassBased extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      state: "",
    };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    console.log("only once: class");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  changeState = () => {
    this.setState({
      ...this.state,
      state: "hello",
    });
  };

  render() {
    return (
      <div>
        ClassBased: {this.props.name}{" "}
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
