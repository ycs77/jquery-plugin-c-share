# jQuery plugin - C Share buttons

[![npm version](https://badge.fury.io/js/jquery-plugin-c-share.svg)](https://badge.fury.io/js/jquery-plugin-c-share)

The share to community buttons.

[Vue version](https://github.com/ycs77/vue-c-share)

## Example

https://ycs77.github.io/jquery-plugin-c-share/

## Getting started

Must introduce jQuery 3, Font Awesome 5.

### Installation

```
$ npm install jquery-plugin-c-share
```
or
```
$ yarn add jquery-plugin-c-share
```

In browser:
```html
<link  href="/path/to/fontawesome-5.css" rel="stylesheet"><!-- Font Awesome 5 is required -->

<script src="/path/to/jquery.slim.js"></script><!-- jQuery is required -->
<script src="/path/to/jquery.c-share.js"></script>
```

## Usage

```html
<div id="shareBlock"></div>
```

```js
$('#shareBlock').cShare({
  description: 'jQuery plugin - C Share buttons...',
  showButtons: ['line', 'fb', 'twitter']
});
```

## Options

### description

* Type: `String`
* Default: `''`

Define the share content texts.


### showButtons

* Type: `Array`
* Default: `['line', 'fb', 'twitter']`

Define the show buttons. Can use values: `fb`, `line`, `plurk`, `weibo`, `twitter`, `tumblr`, `email`.


### data

* Type: `Object`
* Default: [Source code](https://github.com/ycs77/jquery-plugin-c-share/blob/master/src/index.js)

Define the share buttons data.


### spacing

* Type: `Number`
* Default: `6`

Define the spacing.


### shareToText

* Type: `String`
* Default: `Share to`

Define the "Share to" text.
