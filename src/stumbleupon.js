'use strict';

import Base from './base';

export default class Stumbleupon extends Base {
	buildUrl (url) {
		let encoded = encodeURIComponent(url);
		return `http://www.stumbleupon.com/services/1.01/badge.getinfo?url=${encoded}`;
	}

	formatData (data) {
		let count = data.result.in_index ? data.result.views : 0;
		return count || 0;
	}
}
