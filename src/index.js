'use strict';

import Facebook from './facebook';
import Pinterest from './pinterest';
import LinkedIn from './linkedin';
import GooglePlus from './googleplus';
import Buffer from './buffer';
import Stumbleupon from './stumbleupon';
import Reddit from './reddit';
import Vk from './vk';
import Addthis from './addthis';
import Flattr from './flattr';
import Xing from './xing';

const Promise = require('bluebird');
const $facebook = Symbol('facebook');
const $pinterest = Symbol('pinterest');
const $linkedin = Symbol('linkedin');
const $googleplus = Symbol('googleplus');
const $buffer = Symbol('buffer');
const $stumbleupon = Symbol('stumbleupon');
const $reddit = Symbol('reddit');
const $addthis = Symbol('addthis');
const $flattr = Symbol('flattr');

class SociareCounter {
  constructor() {
    this[$facebook]   = new Facebook();
    this[$pinterest]  = new Pinterest();
    this[$linkedin]   = new LinkedIn();
    this[$googleplus] = new GooglePlus();
    this[$buffer]     = new Buffer();
    this[$stumbleupon] = new Stumbleupon();
    this[$reddit]      = new Reddit();
    this[$addthis]     = new Addthis();
    this[$flattr]      = new Flattr();
  }

  get facebook()    { return this[$facebook]; }
  get pinterest()   { return this[$pinterest]; }
  get linkedin()    { return this[$linkedin]; }
  get googleplus()  { return this[$googleplus]; }
  get buffer()      { return this[$buffer]; }
  get stumbleupon() { return this[$stumbleupon]; }
  get reddit()      { return this[$reddit]; }
  get addthis()     { return this[$addthis]; }
  get flattr()      { return this[$flattr]; }

  getCounts(url, opts = {}) {
    let networks = opts.networks || ['facebook', 'pinterest', 'linkedin', 'googleplus', 'buffer', 'stumbleupon', 'reddit', 'addthis', 'flattr'];

    if (opts.omitQuery) {
      url = url.split('?')[0];
    }

    return Promise.props(networks.reduce((obj, network) => {
      obj[network] = this[network].getCount(url);
      return obj;
    }, {}));
  }
}

export default new SociareCounter();
