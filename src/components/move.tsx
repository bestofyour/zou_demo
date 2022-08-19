import * as React from 'react';

type Props = Record<string, unknown>;

export const MoveBox = (props: Props): React.ReactElement => {
  console.log(props);
  return <div className="box-out move">111111</div>;
};
interface Name {
  name?: string;
}

interface State {
  count?: number;
}

export class ShoppingList extends React.Component<Name, Record<string, unknown>> {
  constructor(props: Name) {
    super(props);
    this.state = { count: 1 };
  }
  shouldComponentUpdate(nextProps: Name, nextState: Name): boolean {
    console.log(nextProps, nextState);
    return true;
  }

  click() {
    this.setState((state: State) => ({ count: state.count! + 1 }));
  }
  render() {
    const { count } = this.state;
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
