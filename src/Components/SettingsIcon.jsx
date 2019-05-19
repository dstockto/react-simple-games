import React from "react";
import {Link} from "react-router-dom";

import "./SettingsIcon.css";

export default function SettingsIcon(props) {
  const {route} = props;
  // This makes settings be a toggle - if you're on settings, it links back to
  // the root. If you're anywhere else, it goes to /settings

  const isSettings = route.location.pathname === '/settings';
  const link = isSettings ? '/' : '/settings';

  let classes = ['settings'];
  if (isSettings) {
    classes.push('rotate');
  }

  return (
    <section className={classes.join(' ')}>
      <Link to={link}>
        <span role={'img'} aria-label={'Settings'}>⚙</span>️
      </Link>
    </section>
  );
};
