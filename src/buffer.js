'use strict';

import Base from './base';

export default class Buffer extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `https://api.bufferapp.com/1/links/shares.json?url=${encoded}`;
  }

  formatData (data) {
    return data.shares || 0;
  }
};
