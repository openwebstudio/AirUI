import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'air-components',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
