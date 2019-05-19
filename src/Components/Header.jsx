import React, {useContext} from "react";
import SettingsIcon from './SettingsIcon';
import Navigation from './Navigation';
import "./header.css";
import {UserContext} from '../Context';
import ErrorBoundary from './ErrorBoundary';

export default function Header(props) {

  const {user} = useContext(UserContext);

  const {title, history, location, match} = props;
  return (
    <section className={'header'}>
      <span className="title">{title || 'Simple Game Platform'}</span>
      <Navigation/>
      <ErrorBoundary>
        <span className={'greeting'}>Hello, {user.name}</span>
      </ErrorBoundary>
      <SettingsIcon route={{history, location, match}}/>
    </section>
  );
};
