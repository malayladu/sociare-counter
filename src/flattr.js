'use strict';

import Base from './base';

export default class Flattr extends Base {
  buildUrl (url) {
    let encoded = encodeURIComponent(url);
    return `https://api.flattr.com/rest/v2/things/lookup/?url=${encoded}`;
  }

  formatData (data) {
    return data.flattrs || 0;
  }
};
