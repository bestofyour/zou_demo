import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom';
import { ShoppingList } from '@/components/index';
import * as React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="invoices">Invoices</Link> <Link to="team">Team</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Team() {
  return <h1>Team</h1>;
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ShoppingList name="5555" />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="invoices" element={<Invoices />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
