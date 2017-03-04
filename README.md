# vue-l-lazyload

> A lazyload plugin for Vue.js v2.x+.

### Pull requests are welcome :)

## License
LGPL-V3  
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)

## Features

- No extra dependencies except Vue
- Progressive configuration
- Flexible events to trigger loading
- Lazyload as src attribute and background image are supported
- Performance boost by event delegation and passive event listener if it's available

## Installation

[![vue-l-lazyload](https://nodei.co/npm/vue-l-carousel.png)](https://npmjs.org/package/vue-l-lazyload)

`npm install vue-l-lazyload`

## Usage
### A simple way:
```javascript
import { VueLLazyload } from 'v-l-lazyload';
Vue.use(VueLLazyload, {
	events: 'scroll'
});
```
```html
<img lazy="xxx.png">
```
### A more configurable way:
```javascript
import { VueLLazyload } from 'v-l-lazyload';
Vue.use(VueLLazyload, config);
```
```html
<lazy-ref ref="lazyRef" opts="config">
    <img lazy="{src:xxx.png, ref:'lazyRef'}">
</lazy-ref>
```

## Config
<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name</th>
            <th style="width: 50px;">Type</th>
            <th style="width: 50px;">Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    </tobdy>
</table>    

## Directives
### v-lazy
#### value
<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 50px;">Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>String or Object</td>
            <td>
                If the value is an Object, it has the same spec as config.
                If the value is a String, it will be used as `src` of config
            </td>
        </tr>
    </tbody>
</table>

## Components
### lazy-ref

## Well, what's next?
- More options for configuration
- Supplements of test cases