'use strict';

import Base from './base';

export default class Addthis extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `http://api-public.addthis.com/url/shares.json?url=${encoded}`;
  }

  formatData (data) {
    return data.shares || 0;
  }
};
