'use strict';

import Base from './base';

export default class Reddit extends Base {
	buildUrl (url) {
		let encoded = encodeURIComponent(url);
		return `http://www.reddit.com/api/info.json?&url=${encoded}`;
	}

	formatData (data) {

		let children = data.data.children;

		let count = 0;
		if(children.length > 0) {
			children.forEach(function(child){
				count = count + child.data.score;
			});
		}

		return count || 0;
	}
}
