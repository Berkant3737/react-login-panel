import React from 'react';
import { UserGreeting, GuestGreeting } from './Test';
import Deneme from './theme.jsx';
function Api() {
  let showUserGreeting = true; // burada değişken false olarak ayarlanıyor
  return <Deneme value={showUserGreeting} />;
}

export default Api;
