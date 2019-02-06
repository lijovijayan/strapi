#!/usr/bin/env node
'use strict';

/**
 * Module dependencies
 */

const fetch = require('node-fetch');
const { machineIdSync } = require('node-machine-id');

/*
 * No need to worry about this file, we only retrieve anonymous data here.
 * It allows us to know on how many times the package has been installed globally. 
 */

if (process.env.npm_config_global === 'true') {
  fetch('https://analytics.strapi.io/track', {
    method: 'POST',
    body: JSON.stringify({ event: 'didInstallStrapi', deviceId: machineIdSync() }),
    headers: { 'Content-Type': 'application/json' }
  })
    .catch(() => {});
}