import React from 'react';
import { UserGreeting, GuestGreeting } from './Test';

function User(props) {
  const value = props.value;
  console.log(value);
  if (value === true) {
    // burada eşitlik kontrolü için "===" kullanıyoruz
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}
export default User;
