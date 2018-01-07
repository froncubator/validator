function isExist(value) {
    if (value == undefined || value == null || value+'' == 'NaN') {
        return false
    } else {
        return true
    }
}

function isEmail(value) {
    if (!isExist(value)) return false

    if (typeof value == 'string' && value.indexOf('@') != -1 && value.indexOf('.') != -1 && value.length >= 5) {
        return true
    } else {
        return false
    }
}

function isStr(value, min, max) {
    if (!isExist(value)) return false

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

function isInt(value, min, max) {
    if (Number.isInteger(value)) {
        if (min != undefined) {
            if (value < min)
                return false
        }

        if (max != undefined) {
            if (value > max) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

function isArr(value, min, max) {
    if (Array.isArray(value)) {
        if (min != undefined) {
            if (value.length < min) {
                return false
            }
        }

        if (max != undefined) {
            if (value.length > max) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

const froncubatorValidator = {
    isExist,
    isEmail,
    isStr,
    isInt,
    isArr
}

exports.default = froncubatorValidator;
module.exports = exports['default'];
