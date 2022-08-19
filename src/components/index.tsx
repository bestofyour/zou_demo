import * as React from 'react';
interface Name {
  name?: string;
}
import { add } from 'ramda';

export class ShoppingList extends React.Component<Name, Record<string, unknown>> {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

interface Props {
  value?: number;
  age?: number;
}

class Square extends React.Component<Props & Name, Record<string, unknown>> {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

export class Board extends React.Component {
  renderSquare(i: number) {
    return <Square value={add(i, 100)} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
