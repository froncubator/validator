function isEmail(value) {
    if (typeof value == 'string' && value.indexOf('@') != -1 && value.indexOf('.') != -1 && value.length >= 5) {
        return true
    } else {
        return false
    }
}

function isString(value, min, max) {
    if (typeof value == 'string') {
        if (min != undefined) {
            if (value.trim().length < min)
                return false
        }

        if (max != undefined) {
            if (value.trim().length > max)
                return false
        }
        return true
    } else {
        return false
    }
}

function isBool(value) {
    if (typeof value == 'boolean' || value === 1 || value === 0) {
        return true
    } else {
        return false
    }
}

function isInt(value) {
    if (Number.isInteger(value)) {
        return true;
    } else {
        return false;
    }
}

function isArray(value) {
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}

var froncubatorValidator = {
    isEmail: isEmail,
    isString: isString,
    isBool: isBool,
    isInt: isInt,
    isArray: isArray
}

exports.default = froncubatorValidator;
module.exports = exports['default'];