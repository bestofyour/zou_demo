import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from '@/hooks/index';
const container = document.getElementById('example') as Element;
ReactDOM.createRoot(container).render(
  <React.Fragment>
    <App />
  </React.Fragment>,
);
