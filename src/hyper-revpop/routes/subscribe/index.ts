import { t } from '../../trpc';
import { dynamicGlobalProperties } from './dynamicGlobalProperties';

export const subscribe = t.router({
  subscribe: t.mergeRouters(dynamicGlobalProperties),
});
