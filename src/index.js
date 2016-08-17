var isNullOrUndefined = require("@nathanfaucett/is_null_or_undefined");


var easing = module.exports;


function inQuad(x, t, b, c, d) {
    return c * (t /= d) * t + b;
}

function outQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}

function inOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    } else {
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
}

easing.inQuad = inQuad;
easing.outQuad = outQuad;
easing.inOutQuad = inOutQuad;

function inCubic(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
}

function outCubic(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}

function inOutCubic(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    } else {
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
}

easing.inCubic = inCubic;
easing.outCubic = outCubic;
easing.inOutCubic = inOutCubic;

function inQuart(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
}

function outQuart(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

function inOutQuart(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    } else {
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
}

easing.inQuart = inQuart;
easing.outQuart = outQuart;
easing.inOutQuart = inOutQuart;

function inQuint(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}

function outQuint(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

function inOutQuint(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    } else {
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
}

easing.inQuint = inQuint;
easing.outQuint = outQuint;
easing.inOutQuint = inOutQuint;

function inSine(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}

function outSine(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

function inOutSine(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

easing.inSine = inSine;
easing.outSine = outSine;
easing.inOutSine = inOutSine;

function inExpo(x, t, b, c, d) {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

function outExpo(x, t, b, c, d) {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}

function inOutExpo(x, t, b, c, d) {
    if (t === 0) {
        return b;
    } else if (t === d) {
        return b + c;
    } else if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
}

easing.inExpo = inExpo;
easing.outExpo = outExpo;
easing.inOutExpo = inOutExpo;

function inCircle(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}

function outCircle(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}

function inOutCircle(x, t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
}

easing.inCircle = inCircle;
easing.outCircle = outCircle;
easing.inOutCircle = inOutCircle;

function inElastic(x, t, b, c, d) {
    var s = 1.70158,
        p = 0,
        a = c;

    if (t === 0) {
        return b;
    } else if ((t /= d) === 1) {
        return b + c;
    } else {
        if (!p) {
            p = d * 0.3;
        }

        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
}

function outElastic(x, t, b, c, d) {
    var s = 1.70158,
        p = 0,
        a = c;

    if (t === 0) {
        return b;
    } else if ((t /= d) === 1) {
        return b + c;
    } else {
        if (!p) {
            p = d * 0.3;
        }

        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    }
}

function inOutElastic(x, t, b, c, d) {
    var s = 1.70158,
        p = 0,
        a = c;

    if (t === 0) {
        return b;
    } else if ((t /= d / 2) === 2) {
        return b + c;
    } else {
        if (!p) {
            p = d * (0.3 * 1.5);
        }

        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }

        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
}

easing.inElastic = inElastic;
easing.outElastic = outElastic;
easing.inOutElastic = inOutElastic;

function inBack(x, t, b, c, d, s) {
    if (isNullOrUndefined(s)) {
        s = 1.70158;
    } else {
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
}

function outBack(x, t, b, c, d, s) {
    if (isNullOrUndefined(s)) {
        s = 1.70158;
    } else {
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
}

function inOutBack(x, t, b, c, d, s) {
    if (isNullOrUndefined(s)) {
        s = 1.70158;
    } else if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    } else {
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }
}

easing.inBack = inBack;
easing.outBack = outBack;
easing.inOutBack = inOutBack;

function inBounce(x, t, b, c, d) {
    return c - outBounce(x, d - t, 0, c, d) + b;
}

function outBounce(x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
    } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
    } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    }
}

function inOutBounce(x, t, b, c, d) {
    if (t < d / 2) {
        return inBounce(x, t * 2, 0, c, d) * 0.5 + b;
    } else {
        return outBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
}

easing.inBounce = inBounce;
easing.outBounce = outBounce;
easing.inOutBounce = inOutBounce;
