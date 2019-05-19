import React from "react";
import SettingsIcon from './SettingsIcon';

export default function Header(props) {
  console.log(props);
  const {title} = props;
  return (
    <section className={'header'}>
      <span class="title">{title || 'Simple Game Platform'}</span>
      <SettingsIcon/>
    </section>
  );
};
