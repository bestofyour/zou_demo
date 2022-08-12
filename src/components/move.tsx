import * as React from 'react';

type Props = Record<string, unknown>;

export const MoveBox = (props: Props): React.ReactElement => {
  console.log(props);
  return <div className="box-out move">111111</div>;
};
interface Name {
  name?: string;
}

export default class ShoppingList extends React.Component<Name, Record<string, unknown>> {
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
