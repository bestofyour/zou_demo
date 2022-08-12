import { Route, Link, Outlet } from 'react-router-dom';
import * as React from 'react';
import { ShoppingList } from '@/components/move';
export function Dashboard() {
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

export function Invoices() {
  return <h1>Invoices</h1>;
}

export function Team() {
  return <h1>Team</h1>;
}

export function App() {
  return <ShoppingList name="3213" />;
}
