# jQuery plugin - C Share buttons

[![npm version](https://badge.fury.io/js/jquery-plugin-c-share.svg)](https://badge.fury.io/js/jquery-plugin-c-share)

A share to community buttons.

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
  showButtons: [
    'fb',
    'gPlus',
    'line'
  ]
});
```

## Options

### description

* Type: `String`
* Default: `''`

Define the share content texts.


### showButtons

* Type: `String`
* Default: `Modal title`

Define the show buttons.


### data

* Type: `String`
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
