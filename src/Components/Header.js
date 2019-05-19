import React from "react";
import SettingsIcon from './SettingsIcon';

export default function Header(props) {
  const {title, history, location, match} = props;
  return (
    <section className={'header'}>
      <span className="title">{title || 'Simple Game Platform'}</span>
      <SettingsIcon route={{history, location, match}} />
    </section>
  );
};
