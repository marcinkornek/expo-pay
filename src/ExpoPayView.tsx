import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoPayViewProps } from './ExpoPay.types';

const NativeView: React.ComponentType<ExpoPayViewProps> =
  requireNativeViewManager('ExpoPay');

export default function ExpoPayView(props: ExpoPayViewProps) {
  return <NativeView {...props} />;
}
