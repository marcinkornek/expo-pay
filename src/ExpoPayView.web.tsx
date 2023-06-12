import * as React from 'react';

import { ExpoPayViewProps } from './ExpoPay.types';

export default function ExpoPayView(props: ExpoPayViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
