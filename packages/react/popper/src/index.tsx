'use client';

import { PopperProps } from './popper.types';
import { PopperProvider } from './popper-context';

export function Popper(props: PopperProps) {
  const { children } = props;
  return <PopperProvider>{children}</PopperProvider>;
}

/**
 * Base Popper components
 */

export * from './popper-content'
export * from './popper-item';
export * from './popper-trigger';
export * from './popper-separator';
export * from './popper-group';
export * from './popper-label';

/**
 * Popper sub components
 */
export * from './popper-sub-trigger';
export * from './popper-sub-context';
