// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +position?: string,
  /**
   * Display an arrow poiting towards the trigger
   */
  +arrow?: boolean,
|};

/**
 * The wrapper element for a Dropdowns Items
 */
function DropdownMenu({
  className,
  children,
  position = "",
  arrow,
}: Props): React.Node {
  const classes = cn(
    {
      "dropdown-menu": true,
      [`dropdown-menu-${position}`]: position,
      [`dropdown-menu-arrow`]: arrow,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

DropdownMenu.displayName = "Dropdown.Menu";

export default DropdownMenu;
