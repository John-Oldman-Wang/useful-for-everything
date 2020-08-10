import React from "react";

class B extends React.Component {
  render() {
    return <h2>{this.props.children}</h2>;
  }
}

function A(props) {
  return <h1 className={props.className}>{props.name}</h1>;
}

export function App(props) {
  return (
    <div {...props}>
      <A {...props} />
      {/* <B>hhhh</B> */}
    </div>
  );
}
