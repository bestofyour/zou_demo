import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Board } from '@/components/index';
const container = document.getElementById('example') as Element;
ReactDOM.createRoot(container).render(<Board />);
