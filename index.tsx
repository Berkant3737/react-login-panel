import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Api from './App';

import Deneme from './theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Api />
  </StrictMode>
);
