import * as React from 'react';

type Props = Record<string, unknown>;

export const MoveBox = (props: Props): React.ReactElement => {
  console.log(props);
  return <div className="box-out move"></div>;
};
