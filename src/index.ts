import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoPay.web.ts
// and on native platforms to ExpoPay.ts
import ExpoPayModule from './ExpoPayModule';
import ExpoPayView from './ExpoPayView';
import { ChangeEventPayload, ExpoPayViewProps } from './ExpoPay.types';

// Get the native constant value.
export const PI = ExpoPayModule.PI;

export function hello(): string {
  return ExpoPayModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoPayModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoPayModule ?? NativeModulesProxy.ExpoPay);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoPayView, ExpoPayViewProps, ChangeEventPayload };
