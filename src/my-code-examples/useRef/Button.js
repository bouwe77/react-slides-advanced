import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ handleClick, icon, enabled }) => (
  <i>
    <button onClick={handleClick} disabled={!enabled}>
      <FontAwesomeIcon icon={icon} />
    </button>
  </i>
);
