# Froncubator validator
A simple JavaScript library for validating data.
https://github.com/froncubator/validator

## Installation and Usage
Install the library with npm install froncubator-validator

```javascript
const validator = require('froncubator-validator-js');

validator.isInt(123); //=> true
validator.isInt(10.5); //=> false
validator.isInt(undefined); //=> false
validator.isInt(123, 5, 10); //=> false

validator.isString('Froncubator', 0, 100) //=> true
validator.isString('Some String', null, 100) //=> true
validator.isString('Next String', 100) //=> false
validator.isString(undefined) //=> false

validator.isArray([1,2,3]) //=> true
validator.isArray([1,2,3], 1, 3) //=> true
validator.isArray([1,2,3], 5, 10) //=> false
validator.isArray(null) //=> false

validator.isEmail('some@email.com') //=> true
validator.isEmail('x@x.x') //=> true
validator.isEmail('some@email') //=> false
validator.isEmail('@.') //=> false

validator.isExist(false) //=> true
validator.isExist(undefined) //=> false
validator.isExist(null) //=> false
validator.isExist(NaN) //=> false
```

## Validators list
|Validator                                                         |Description                                                                   |
|------------------------------------|------------------------------------------------------------------------------|
|__isEmail__(_value_)                |Check is value is email and return true or false.|
|__isString__(_value_, _min_, _max_) |Check is value is string and return true or false. You can check count of characters in the string with _min_ or _max_. (_min_, _max_) = not required.|
|__isInt__(_value_, _min_, _max_)    |Check is value is integer and return true or false. You can check number with _min_ or _max_. (_min_, _max_) = not required.|
|__isArray__(_value_, _min_, _max_)  |Check is value is array and return true or false. You can check array length with _min_ or _max_. (_min_, _max_) = not required.|
|__isExist__(_value_)                |Check is value exist (undefined, null, NaN).|

___

Froncubator Validator is freely distributable under the terms of the [MIT license](https://github.com/froncubator/validator/blob/master/LICENSE).
