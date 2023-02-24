import { Component, useState } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "string",
    };
  }

  changeData = () => {
    this.setState({ data: "integer" });
  };

  render() {
    return <></>;
  }
}

function MyCom() {
  let [data, setData] = useState("string");

  const changeData = () => {
    setData("integer");
  };

  return <></>;
}

// export default MyComponent;
export default MyCom;
