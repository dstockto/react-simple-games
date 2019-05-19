import React from "react";
import SettingsIcon from './SettingsIcon';
import Navigation from './Navigation';
import "./header.css";

export default function Header(props) {
  const {title, history, location, match} = props;
  return (
    <section className={'header'}>
      <span className="title">{title || 'Simple Game Platform'}</span>
      <Navigation/>
      <SettingsIcon route={{history, location, match}} />
    </section>
  );
};
