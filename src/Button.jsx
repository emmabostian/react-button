import React, { Component } from "react";
import PropTypes from "prop-types";

import { ButtonTypes, ButtonSizes, ButtonThemes } from "./buttonTypes";
import { IconTypes } from "./IconTypes";
import * as Icons from "./Icons";

import "./button.css";

export default class Button extends Component {
  getButtonIcon() {
    switch (this.props.icon) {
      case IconTypes.SAVE:
        return <Icons.SaveIcon />;

      default:
        return null;
    }
  }

  getButtonClasses() {
    const { icon, size, theme, type } = this.props;
    const buttonClasses = [
      "button",
      `button--${size}`,
      `button--${theme}`,
      `button--${type}`
    ];

    icon && icon !== IconTypes.NONE && buttonClasses.push("button--icon");

    return buttonClasses.join(" ");
  }
  render() {
    const { disabled, onClickHandler, label, icon } = this.props;
    return (
      <button
        className={this.getButtonClasses()}
        onClick={event => onClickHandler(event.target)}
        disabled={disabled}
      >
        {icon && this.getButtonIcon()}
        {label}
      </button>
    );
  }
}
Button.propTypes = {
  type: PropTypes.instanceOf(ButtonTypes),
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.instanceOf(ButtonSizes),
  theme: PropTypes.instanceOf(ButtonThemes),
  icon: PropTypes.instanceOf(IconTypes)
};

Button.defaultProps = {
  type: ButtonTypes.PRIMARY,
  onClickHandler: () => console.log("No click handler specified"),
  label: "",
  disabled: false,
  size: ButtonSizes.MEDIUM,
  theme: ButtonThemes.LIGHT,
  icon: IconTypes.NONE
};
