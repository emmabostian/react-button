import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import { ButtonTypes } from "../buttonTypes";

storiesOf("Button", module)
  .add("primary", () => (
    <Button
      type={ButtonTypes.PRIMARY}
      onClick={action("clicked")}
      label="Primary"
    />
  ))
  .add("secondary", () => (
    <Button
      type={ButtonTypes.SECONDARY}
      onClick={action("clicked")}
      label="Secondary"
    />
  ))
  .add("tertiary", () => (
    <Button
      type={ButtonTypes.TERTIARY}
      onClick={action("clicked")}
      label="Tertiary"
    />
  ));
