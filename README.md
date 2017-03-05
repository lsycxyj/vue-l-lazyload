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
- Performance boost by event delegation and passive event listener when it's available

## Installation

[![vue-l-lazyload](https://nodei.co/npm/vue-l-lazyload.png)](https://npmjs.org/package/vue-l-lazyload)

`npm install vue-l-lazyload`

## Usage
### A simple way:
```javascript
import { VueLLazyload } from 'v-l-lazyload';
Vue.use(VueLLazyload, {
	events: 'scroll'
});
// The root $lazy "Vue.$lazy" will be available after it's been installed
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
        <tr>
            <td>ref</td>
            <td>String</td>
            <td>`null`</td>
            <td>
                The name of parent view (lazy-ref component or window).
                If it's not specified, it will be the window.
            </td>
        </tr>
        <tr>
            <td>src<sup>[2]</sup></td>
            <td>String</td>
            <td>''</td>
            <td>The resource url going to be loaded.</td>
        </tr>
        <tr>
            <td>events</td>
            <td>String or Array<String></td>
            <td>scroll</td>
            <td>Events to be bound with </td>
        </tr>
        <tr>
            <td>classLoading</td>
            <td>String</td>
            <td>lazy-loading</td>
            <td>Class name of loading</td>
        </tr>
        <tr>
            <td>classLoaded</td>
            <td>String</td>
            <td>lazy-loaded</td>
            <td>Class name of loaded</td>
        </tr>
        <tr>
            <td>classErr</td>
            <td>String</td>
            <td>lazy-err</td>
            <td>Class name of load error</td>
        </tr>
        <tr>
            <td>classTarget</td>
            <td>String</td>
            <td>self</td>
            <td>
                Element (real node) of class name to be changed when the load stat changes. <br>
                If it's set to `parent`, the class name of parent element will be changed. <br>
                By default, the class name of element it self will be changed.
            </td>
        </tr>
        <tr>
            <td>retry</td>
            <td>Integer</td>
            <td>0</td>
            <td>Retry amount, 0 for no retry, -1 for infinite retry.</td>
        </tr>
        <tr>
            <td>once</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Remove listener after it has loaded if it is set to true.</td>
        </tr>
        <tr>
            <td>preloadRatio</td>
            <td>Number</td>
            <td>1</td>
            <td>The "resize" ratio of parent view when it's children views compare with it.</td>
        </tr>
        <tr>
            <td>mode</td>
            <td>String</td>
            <td>-</td>
            <td>
                The mode the lazyload.
                If it's set to 'bg', the resource will be loaded as a background image.
                By default, it will be set as the "src" attribute of the element.
            </td>
        </tr>
    </tobdy>
</table>    
[1]: All options should not be changed after they have initialized except for [2]  
[2]: It will mark the node not loaded and load again when it's in parent view. if `once` is set to `false`.
[3]: All options will inherit its ancestors' options.

## Methods
### $lazy
<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name</th>
            <th>Arguments</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>check</td>
            <td>-</td>
            <td>Manually check and load itself and its children elements which haven't loaded.</td>
        </tr>
    </tbody>
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
        <tr>
            <td>tag</td>
            <td>String</td>
            <td>div</td>
            <td>The tag name of the wrapper component when it renders.</td>
        </tr>
        <tr>
            <td>opts</td>
            <td>Object</td>
            <td>null</td>
            <td>It has the same spec as config</td>
        </tr>
    </tbody>
</table>

## Well, what's next?
- More options for configuration
- Supplements of test cases