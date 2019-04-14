import React, { Component } from "react";
import PropTypes from "prop-types";

import "./button.css";

const ButtonTypes = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary"
};

const ButtonSizes = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

const ButtonThemes = {
  LIGHT: "light",
  DARK: "dark"
};

const ButtonStatuses = {
  WARNING: "warning",
  NONE: "none"
};

export default class Button extends Component {
  render() {
    const {
      type,
      disabled,
      onClickHandler,
      label,
      size,
      theme,
      icon,
      status,
      loading
    } = this.props;
    return (
      <button
        className={`button button--${type} button--${size}`}
        onClick={event => onClickHandler(event.target)}
        disabled={disabled}
      >
        {icon && <h1>Icon goes here</h1>}
        {label}
      </button>
    );
  }
}
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.string,
  status: PropTypes.string,
  loading: PropTypes.bool
};

Button.defaultProps = {
  type: ButtonTypes.PRIMARY,
  onClickHandler: () => console.log("No click handler specified"),
  label: "",
  disabled: false,
  size: ButtonSizes.MEDIUM,
  theme: ButtonThemes.LIGHT,
  icon: null,
  status: ButtonStatuses.NONE,
  loading: false
};
