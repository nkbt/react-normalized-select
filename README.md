# react-normalized-select [![npm](https://img.shields.io/npm/v/react-normalized-select.svg?style=flat-square)](https://www.npmjs.com/package/react-normalized-select)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/react-normalized-select.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/nkbt/react-normalized-select)
[![AppVeyor](https://img.shields.io/appveyor/ci/nkbt/react-normalized-select.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/nkbt/react-normalized-select)
[![Coverage](https://img.shields.io/codecov/c/github/nkbt/react-normalized-select.svg?style=flat-square)](https://codecov.io/github/nkbt/react-normalized-select?branch=master)
[![Dependencies](https://img.shields.io/david/nkbt/react-normalized-select.svg?style=flat-square)](https://david-dm.org/nkbt/react-normalized-select)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/react-normalized-select.svg?style=flat-square)](https://david-dm.org/nkbt/react-normalized-select#info=devDependencies)

Normalized `<select>`, returns array of values in multiple mode

![React Normalized Select](src/example/react-normalized-select.gif)

## Reason

When using common `<select>` element it returns only single value in onChange event. So to get the array of selected values it is necessary to traverse through it's options to find selected ones. This component normalizes behaviour of `<select>` so it returns array of values if `multiple={true}` flag is present.

Component is a pure wrapper, has no extra logic and supposed to be a drop-in replacement for a conventional `<select>`

This normalization is necessary to work in composition with other form elements wrappers without breaking `onChange` API.


## Installation

### NPM

```sh
npm install --save react react-normalized-select
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://npmcdn.com/react-normalized-select/build/react-normalized-select.js
```

or in `bower.json`

```json
{
  "dependencies": {
    "react-normalized-select": "https://npmcdn.com/react-normalized-select/bower.zip"
  }
}
```

then include as
```html
<script src="bower_components/react/react.js"></script>
<script src="bower_components/react-normalized-select/build/react-normalized-select.js"></script>
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://npmcdn.com/react-normalized-select/build/react-normalized-select.js"></script>
(Module exposed as `NormalizedSelect`)
```


## Demo

[http://nkbt.github.io/react-normalized-select](http://nkbt.github.io/react-normalized-select)

## Codepen demo

```js
// TODO
```

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

## Example

```js
import React from 'react';
import Select from 'react-normalized-select';

const App = React.createClass({
  getInitialState() {
    return {
      single: 'apples',
      multi: ['apples']
    };
  },

  renderOptions() {
    return ['apples', 'oranges', 'bananas', 'kiwis']
      .map(option => <option key={option} value={option}>{option}</option>);
  },

  render() {
    return (
      <div>
        <div>
          <h2>Single choice select</h2>
          <p>(drop-in replacement)</p>
          <label>
            <Select
              value={this.state.single}
              onChange={e => this.setState({single: e.target.value})}>
              {this.renderOptions()}
            </Select>
          </label>

          <pre>this.state.single = {JSON.stringify(this.state.single, null, '  ')}</pre>
        </div>

        <div>
          <h2>Multi-choice select</h2>
          <label>
            <Select multiple={true}
              size={5}
              value={this.state.multi}
              onChange={e => this.setState({multi: e.target.value})}>
              {this.renderOptions()}
            </Select>
          </label>

          <pre>this.state.multi = {JSON.stringify(this.state.multi, null, '  ')}</pre>
        </div>
      </div>
    );
  }
});


const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 6` on `OSX` and `Windows`.

To run example covering all `NormalizedSelect` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-normalized-select.git
cd react-normalized-select
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
