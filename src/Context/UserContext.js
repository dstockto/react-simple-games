import React, { createContext, useState } from "react";
import User from '../Models/User';

export const Context = createContext();

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    children,
  } = props;

  // Use State to keep the values
  const [user, setUser] = useState(new User());

  const changeUser = user => setUser(user);

  // Make the context object:
  const usersContext = {
    user,
    changeUser,
    children,
  };

  // pass the value in provider and return
  return <Context.Provider value={usersContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
