# Froncubator validator
A simple JavaScript library for validating data

## Installation and Usage
Install the library with npm install froncubator-validator

```javascript
let validator = require('froncubator-validator');

validator.isInt(123); //=> true
```

## Validators list
|Validator                           |Description                                                                   |
|------------------------------------|------------------------------------------------------------------------------|
|__isEmail__(_value_)                |Check is value is email and return true or false.|
|__isString__(_value_, _min_, _max_) |Check is value is string and return true or false. You can also check the number of characters in the string with _min_ or _max_ but it is not obligatory.|
|__isBool__(_value_)                 |Check is value is boolean and return true or false.|
|__isInt__(_value_)                  |Check is value is integer and return true or false.|
|__isArray__(_value_)                |Check is value is array and return true or false.|

___

Froncubator validator is freely distributable under the terms of the [MIT license](https://github.com/froncubator/validator/blob/master/LICENSE).