import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";

const enhance = _.identity;

const Header = ({ watchers, forks, repositories }) => (
  <h1>
    <Link to="/">

      {repositories && (
        <span id="projects-count">{repositories} repositories</span>
      )}
    </Link>
  </h1>
);

export default enhance(Header);
