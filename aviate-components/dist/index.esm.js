import React$1 from 'react';

function SampleComponent() {
  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("h1", null, "You are in the sample component"));
}

function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "button",
    onClick: props.onClick
  }, props.children);
}

export { Button, SampleComponent };
