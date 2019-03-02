# vue-l-lazyload

> A lazyload and in-view detection plugin for Vue.js v2.x+.

### Pull requests are welcome :)

![Build Status](https://travis-ci.org/lsycxyj/vue-l-lazyload.svg?branch=master)
[![Coverage](https://img.shields.io/codecov/c/github/lsycxyj/vue-l-lazyload/master.svg)](https://codecov.io/github/lsycxyj/vue-l-lazyload?branch=master)

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
import { VueLLazyload } from 'vue-l-lazyload';
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
import { VueLLazyload } from 'vue-l-lazyload';
Vue.use(VueLLazyload, config);
```
```html
<lazy-ref ref="lazyRef" opts="config">
    <img lazy="{src:xxx.png, ref:'lazyRef'}">
</lazy-ref>
```


## Config

### Notes about Config
Note that **ALL ANCESTORS' CONFIGS WILL BE INHERITED** level by level.
So be careful there may be conflict problems if you use too many ancestors' configs!

### <span id="config">Available Config Table</span>
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
            <td>events</td>
            <td>String or Array&lt;String&gt;</td>
            <td>scroll</td>
            <td>
                Events to be bound with.
            </td>
        </tr>
        <tr>
            <td>preloadRatio</td>
            <td>Number</td>
            <td>1</td>
            <td>
                The "resize" ratio of parent view when it's children views compare with it.
            </td>
        </tr>
        <tr>
            <td>onEnter</td>
            <td>Function</td>
            <td>-</td>
            <td>
                It will be triggered if the element enters the sight. The argument will be a object:
<pre>{
    // The LazyLoader
    $lazy,
}</pre>
            </td>
        </tr>
        <tr>
            <td>onLeave</td>
            <td>Function</td>
            <td>-</td>
            <td>
                It will be triggered if the element leaves the sight. The argument will be a object:
<pre>{
    // The LazyLoader
    $lazy,
}</pre>
            </td>
        </tr>
        <tr>
            <td>throttleMethod</td>
            <td>String</td>
            <td>debounce</td>
            <td>
                Throttling method. Available values: "debounce", "throttle"
            </td>
        </tr>
        <tr>
            <td>throttleTime</td>
            <td>Integer</td>
            <td>250</td>
            <td>
                Throttling time in ms.
            </td>
        </tr>
        <tr>
            <td>regGlobal</td>
            <td>Boolean</td>
            <td>true</td>
            <td>
                Whether to register the directive "lazy" and components "lazy-ref" globally or not.<br>
                Only available for global config.
            </td>
        </tr>
    </tobdy>
</table>    

[1]: All options will inherit its ancestors' options. <br>

## LazyLoader

$lazy is Instance of LazyLoader, available for LazyRef and InViewComp.

### Methods
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
            <td>Manually check and load itself and its children loaders which haven't loaded.</td>
        </tr>
    </tbody>
</table>

## Directives
### Lazy(v-lazy)
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
                If the value is an Object, it has the same spec as <a href="#config">config</a> with extra config.
                If the value is a String, it will be used as `src` of config
            </td>
        </tr>
    </tbody>
</table>

#### Extra config for the Value of Lazy
<table>
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
                The name of parent view (lazy-ref component or window).<br>
                If it's not specified, it will be the window.<br>
                By now, it only supports one level of LazyRef parent.
            </td>
        </tr>
        <tr>
            <td>src<sup>[2]</sup></td>
            <td>String</td>
            <td>-</td>
            <td>
                The resource url going to be loaded. <br>
                Only available for Lazy.
            </td>
        </tr>
        <tr>
            <td>filters</td>
            <td>Array&lt;Function&gt;</td>
            <td>-</td>
            <td>
                Filter the src you one by one before the element requests it. <br>
                Each filter is a function and should return the filtered url. The signiture of it should be like this: 
<pre>
function: String (
    // Last filtered result. It will be the original src if it's the first filter.
    lastResult,
    // Other infomation
    info: {
        // The element to which the loader attaches
        el,
    },
) {}
</pre>
            </td>
        </tr>
        <tr>
            <td>retry</td>
            <td>Integer or Function</td>
            <td>0</td>
            <td>
                If it's a number, it will be the retry amount, 0 for no retry, -1 for infinite retry. <br>
                If it's a function, it will be used to control the flow of retry. <br>
                It will pass a object parameter which has following properties:
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>el</td>
                            <td>HtmlElement</td>
                            <td>The element which the loader is bound to.</td>
                        </tr>
                        <tr>
                            <td>src</td>
                            <td>String</td>
                            <td>The last src which is loaded.</td>
                        </tr>
                        <tr>
                            <td>oSrc</td>
                            <td>String</td>
                            <td>The original src you want to load.</td>
                        </tr>
                        <tr>
                            <td>times</td>
                            <td>Integer</td>
                            <td>N-th times retry. Begins from 0.</td>
                        </tr>
                        <tr>
                            <td>next</td>
                            <td>Function</td>
                            <td>
                                Call this function and pass an parameter object to it to control the retry. <br>
                                If you want to retry with the new url, you should pass it as `src` property. <br>
                                If you want to stop the retry, you should pass `true` as `failed` property. <br>
                            </td>
                        </tr>
                        <tr>
                            <td>applyFilters</td>
                            <td>Function</td>
                            <td>
                                A shortcut function to apply all filters you passed as the option. Put the url into it and you will get the filtered one.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>classLoading</td>
            <td>String</td>
            <td>
                lazy-loading
            </td>
            <td>
                Class name of loading <br>
                Only available for Lazy.
            </td>
        </tr>
        <tr>
            <td>classLoaded</td>
            <td>String</td>
            <td>
                lazy-loaded
            </td>
            <td>
                Class name of loaded <br>
                Only available for Lazy.
            </td>
        </tr>
        <tr>
            <td>classErr</td>
            <td>String</td>
            <td>
                lazy-err
            </td>
            <td>
                Class name of load error <br>
                Only available for Lazy.
            </td>
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
            <td>once</td>
            <td>Boolean</td>
            <td>true</td>
            <td>
                Remove listener after it has loaded if it is set to true.<br>
            </td>
        </tr>
        <tr>
            <td>mode</td>
            <td>String</td>
            <td>-</td>
            <td>
                The mode the lazyload.<br>
                If it's set to 'bg', the resource will be loaded as a background image. <br>
                By default, it will be set as the "src" attribute of the element. <br>
                Only available for Lazy and LazyRef.
            </td>
        </tr>
        <tr>
            <td>onLoad</td>
            <td>Function</td>
            <td>-</td>
            <td>
                It will be called when the src is loaded successfully (after retry if it did retry).<br>
                It will pass a object parameter which has following properties:
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>el</td>
                            <td>HtmlElement</td>
                            <td>The element which the loader is bound to.</td>
                        </tr>
                        <tr>
                            <td>src</td>
                            <td>String</td>
                            <td>The last src which is loaded.</td>
                        </tr>
                        <tr>
                            <td>oSrc</td>
                            <td>String</td>
                            <td>The original src you want to load.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>onErr</td>
            <td>Function</td>
            <td>-</td>
            <td>
                It will be called when the src fails to load each time. <br>
                It will pass a object parameter which has following properties:
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>el</td>
                            <td>HtmlElement</td>
                            <td>The element which the loader is bound to.</td>
                        </tr>
                        <tr>
                            <td>src</td>
                            <td>String</td>
                            <td>The last src which is loaded.</td>
                        </tr>
                        <tr>
                            <td>oSrc</td>
                            <td>String</td>
                            <td>The original src you want to load.</td>
                        </tr>
                        <tr>
                            <td>isEnd</td>
                            <td>Boolean</td>
                            <td>Optional. It will be true when it's the failure of the last loading (after all retries if it did retry).</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>onReq</td>
            <td>Function</td>
            <td>-</td>
            <td>
                It will be called when the load request begins to be sent each time. <br>
                It will pass a object parameter which has following properties:
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>el</td>
                            <td>HtmlElement</td>
                            <td>The element which the loader is bound to.</td>
                        </tr>
                        <tr>
                            <td>src</td>
                            <td>String</td>
                            <td>The last src which is loaded.</td>
                        </tr>
                        <tr>
                            <td>oSrc</td>
                            <td>String</td>
                            <td>The original src you want to load.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

[1]: All options should not be changed after they have initialized except for [2].<br>
[2]: It will mark the node not loaded and load again when it's in parent view. if `once` is set to `false`.<br>
[3]: All options will inherit its ancestors' options.


## Components
### LazyRef(lazy-ref, Experimental)
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
            <td>See <a href="#config">config</a>. And it can be used a parent option to be inherited.</td>
        </tr>
    </tbody>
</table>

### InViewComp
#### Extra config for `opts` InViewComp
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
            <td>onInView</td>
            <td>Function</td>
            <td>-</td>
            <td>
                It will be called when the element is in the viewport. <br>
                It will pass wa object parameter which has following properties:
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>endCheck</td>
                            <td>Function</td>
                            <td>
                                Call this function to stop checking whether the element is in viewport when you don't need onInView callback's firing anymore.
                                This function will also be called if the stat is set to `COMP_LOADED`. 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

[1]: All options above won't inherit its ancestors' options by now.

### LazyComp
#### Props
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default Value</th>
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
            <td>
                It has the same spec as <a href="#config">config</a> with extra config.
            </td>
        </tr>
        <tr>
            <td>stat</td>
            <td>Integer</td>
            <td>COMP_NOT_LOAD</td>
            <td>
                The status of the component which controls the slot's display. <br>
                Available constants for stat: 
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>COMP_NOT_LOAD</td>
                            <td>The component is not loaded and the initial status of comopnent.</td>
                        </tr>
                        <tr>
                            <td>COMP_LOADING</td>
                            <td>The component is not loading.</td>
                        </tr>
                        <tr>
                            <td>COMP_LOADED</td>
                            <td>The component is not loaded.</td>
                        </tr>
                        <tr>
                            <td>COMP_ERR</td>
                            <td>The component failed to load.</td>
                        </tr>
                    </tbody>
                </table>
                <b>Notes:</b>
                <ol>
                    <li>Please <b>USE THE CONSTANT VARIABLE</b> instead of the actual value!</li>
                    <li>
                        The initial stat MUST be `COMP_NOT_LOAD` and the stat SHOULD NOT be changed 
                        until this component is mounted for LazyLoader's initialization.
                    </li>
                    <li>
                        To ensure you change the status after the initialization, you should change the props "stat" in the "onInView" callback.
                    </li>
                </ol>
            </td>
        </tr>
    </tbody>
</table>

#### Extra config for `opts` LazyComp
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
            <td>classCompLoading</td>
            <td>String</td>
            <td>
                comp-stat-loading
            </td>
            <td>
                Class name of loading <br>
                Only available for LazyComp.
            </td>
        </tr>
        <tr>
            <td>classCompLoaded</td>
            <td>String</td>
            <td>
                comp-stat-loaded
            </td>
            <td>
                Class name of loaded <br>
                Only available for LazyComp.
            </td>
        </tr>
        <tr>
            <td>classCompErr</td>
            <td>String</td>
            <td>
                comp-stat-err
            </td>
            <td>
                Class name of load error <br>
                Only available for LazyComp.
            </td>
        </tr>
        <tr>
            <td>classCompNotLoad</td>
            <td>String</td>
            <td>
                comp-stat-err
            </td>
            <td>
                Class name of load error <br>
                Only available for LazyComp.
            </td>
        </tr>
        <tr>
            <td>onInView</td>
            <td>Function</td>
            <td>-</td>
            <td>
                It will be called when the element is in the viewport. <br>
                It will pass wa object parameter which has following properties:
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>endCheck</td>
                            <td>Function</td>
                            <td>
                                Call this function to stop checking whether the element is in viewport when you don't need onInView callback's firing anymore.
                                This function will also be called if the stat is set to `COMP_LOADED`. 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

[1]: All options above won't inherit its ancestors' options by now.

#### Slots
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>not-load</td>
            <td>It will be shown if the prop `stat` is set to `COMP_NOT_LOAD`.</td>
        </tr>
        <tr>
            <td>loading</td>
            <td>It will be shown if the prop `stat` is set to `COMP_LOADING`.</td>
        </tr>
        <tr>
            <td>err</td>
            <td>It will be shown if the prop `stat` is set to `COMP_ERR`.</td>
        </tr>
        <tr>
            <td>(default)</td>
            <td>It will be shown if the prop `stat` is set to `COMP_LOADED`.</td>
        </tr>
    </tobdy>
</table>


## Well, what's next?
- More abilities
- More test cases
- Performance optimization
