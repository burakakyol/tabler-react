// @flow

import * as React from "react";
import cn from "classnames";
import { Button, Icon } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  /**
   * Display an arrow alongside the trigger content
   */
  +toggle?: boolean,
  /**
   * The value to be displayed within the trigger if children is not included
   */
  +value?: string,
  /**
   * Render the trigger as an <a> tag or a Button
   */
  +type?: "link" | "button",
  /**
   * The background color for a Button trigger
   */
  +color?: string,
  /**
   * An Icon displayed to the left of the trigger content
   */
  +icon?: string,
  /**
   * Is this trigger being used as a NavLink
   */
  +isNavLink?: boolean,
  /**
   * Is this trigger beind used as a Card.Header option
   */
  +isOption?: boolean,
|};

/**
 * Provides the trigger element for a Dropdown
 */
function DropdownTrigger({
  className,
  toggle = true,
  value,
  children,
  type = "link",
  icon,
  color,
  isNavLink,
  isOption,
}: Props): React.Node {
  const classes = cn(
    { "dropdown-toggle": toggle, "nav-link": isNavLink },
    className
  );

  const childrenFragment = (
    <React.Fragment>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {value}
      {children}
    </React.Fragment>
  );

  return type === "link" ? (
    <a className={classes} data-toggle="dropdown">
      {childrenFragment}
    </a>
  ) : (
    <Button
      className={classes}
      color={color}
      isDropdownToggle
      isOption={isOption}
    >
      {childrenFragment}
    </Button>
  );
}

DropdownTrigger.displayName = "Dropdown.Trigger";

/** @component */
export default DropdownTrigger;
