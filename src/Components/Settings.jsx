import React, {useContext} from "react";
import {UserContext} from '../Context';
import ErrorBoundary from './ErrorBoundary';

export default function Settings() {
  const {user, changeUser} = useContext(UserContext);

  function onChange(event) {
    const userName = event.target.value;
    changeUser(user.withNewName(userName));
  }

  return (
    <section className={'content'}>
      <label>
        Who are you?
        <ErrorBoundary>
          <input type={'text'} value={user.name} onChange={onChange}/>
        </ErrorBoundary>
      </label>
    </section>
  );
}
