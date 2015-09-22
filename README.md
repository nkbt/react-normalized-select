# react-normalized-select

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/react-normalized-select.svg?style=svg)](https://circleci.com/gh/nkbt/react-normalized-select)
[![Coverage Status](https://coveralls.io/repos/nkbt/react-normalized-select/badge.svg?branch=master)](https://coveralls.io/r/nkbt/react-normalized-select?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-normalized-select.svg)](https://david-dm.org/nkbt/react-normalized-select)
[![devDependency Status](https://david-dm.org/nkbt/react-normalized-select/dev-status.svg)](https://david-dm.org/nkbt/react-normalized-select#info=devDependencies)

Normalized `<select>`, returns array of values in multiple mode

## Reason

When using common `<select>` element it returns only single value in onChange event. So to get the array of selected values it is necessary to traverse through it's options to find selected ones. This component normalizes behaviour of `<select>` so it returns array of values if `multiple={true}` flag is present.

Component is a pure wrapper, has no extra logic and supposed to be a drop-in replacement for a conventional `<select>`

This normalization is necessary to work in composition with other form elements wrappers without breaking `onChange` API.

## Usage

#### 1. Drop-in replacement

All functionality is the same as for `<select>`.

```js
import Select from 'react-normalized-select';

// ...
<Select className="mySelect" onChange={e => console.log(e.target.value)}>
  {['apples', 'oranges', 'bananas'].map(option =>
    <option key={option} value={option}>{option}</option>)}
</Select>
```

Will render conventional `<select>` and by choosing `apples` we will get `apples` in a console

#### 2. Multi-select mode

Will return array of selected values instead of single string value.

```js
import Select from 'react-normalized-select';

// ...
<Select className="mySelect" multiple={true} onChange={e => console.log(e.target.value)}>
  {['apples', 'oranges', 'bananas'].map(option =>
    <option key={option} value={option}>{option}</option>)}
</Select>
```

Will render conventional `<select>` but when we choose apples **and** bananas, we will get `[apples, bananas]` in a console
