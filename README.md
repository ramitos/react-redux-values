# react-redux-values

[![npm](https://img.shields.io/npm/v/react-redux-values.svg?style=flat-square)](https://www.npmjs.com/package/react-redux-values)
[![License: BSD 3-clause "New" or "Revised" License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg?style=flat-square)](https://opensource.org/licenses/BSD-3-Clause)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

[![David](https://img.shields.io/david/ramitos/react-redux-values.svg?style=flat-square)](https://david-dm.org/ramitos/react-redux-values)
[![David](https://img.shields.io/david/dev/ramitos/react-redux-values.svg?style=flat-square)](https://david-dm.org/ramitos/react-redux-values?type=dev)
[![David](https://img.shields.io/david/peer/ramitos/react-redux-values.svg?style=flat-square)](https://david-dm.org/ramitos/react-redux-values?type=peer)

Get and Set values from a redux store in a declarative way

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [License](#license)

## Install

```
yarn add --dev react-redux-values
```

## Usage

store.js:

```js
import { reducer } from 'react-redux-values';
import { createStore, combineReducers } from 'redux';

export default createStore(
  combineReducers({
    values: reducer
  })
);
```

app.js:

```js
import Value from 'react-redux-values';

export default () => (
  <Value name="hey" initialValue="oh">
    {({ value, onValueChange }) => (
      <p onClick={() => onValueChange('heyoh')}>{value}</p>
    )}
  </Value>
);
```

with-connect.js:

```js
import Value, { set } from 'react-redux-values';
import { connect } from 'react-redux';

const Div = ({ handleClick }) => (
  <Value name="hey" initialValue="oh">
    {({ value }) => <p onClick={handleClick}>{value}</p>}
  </Value>
);

export default connect(null, dispatch => ({
  handleClick: () => dispatch(set({ name: 'hey', value: 'heyoh' }))
}))(Div);
```

## License

BSD-3-Clause
