# Polyfill.io Features Detection in the browser
Feature detection in the browser before loading polyfill using services like polyfill.io

[![npm version](https://badge.fury.io/js/polyfill-io-feature-detection.svg)](https://badge.fury.io/js/polyfill-io-feature-detection)
[![NSP Status](https://nodesecurity.io/orgs/jquinto/projects/97ba8357-aca4-44b2-b17a-62e69e9d0bd2/badge)](https://nodesecurity.io/orgs/jquinto/projects/97ba8357-aca4-44b2-b17a-62e69e9d0bd2)
[![Code Climate](https://codeclimate.com/github/jquintozamora/polyfill-io-feature-detection/badges/gpa.svg)](https://codeclimate.com/github/jquintozamora/polyfill-io-feature-detection)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/jquintozamora/polyfill-io-feature-detection/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](Readme.md#Contributing)

[![NPM](https://nodei.co/npm/polyfill-io-feature-detection.png?downloads=true)](https://nodei.co/npm/polyfill-io-feature-detection/)

## Usage
```js
function App () {
    // your app code here
}

import { polyfillLoader } from 'polyfill-io-feature-detection';
polyfillLoader({
  "features": "Promise",
  "onCompleted": App
});
```


## Want to contribute?
Anyone can help make this project better

## License
(The MIT License)
Copyright (c) 2017 Jose Quinto (https://blog.josequinto.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
