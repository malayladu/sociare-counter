'use strict';

const Promise = require('bluebird');
const request = require('request-promise');

export default class Base {
    buildUrl (url) {
      return url;
    }

    sendRequest (url) {
      return request.get(url);
    }

    parseResponse (data) {
      return JSON.parse(data);
    }

    formatData (data) {
      return data.count;
    }

    getCount (url) {
      return Promise.resolve(url)
          .then(this.buildUrl)
          .then(this.sendRequest)
          .then(this.parseResponse)
          .then(this.formatData);
    }
};
