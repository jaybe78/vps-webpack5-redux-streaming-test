import React from "react";

export default function Code(props) {
  const style = {
    backgroundColor: "#eaeaea",
    padding: "1px 4px",
    borderRadius: "3px",
    ...props.style,
  };
  return <code {...props} style={style} />;
}
