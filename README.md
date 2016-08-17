easing [![Build Status](https://travis-ci.org/nathanfaucett/easing.svg?branch=master)](https://travis-ci.org/nathanfaucett/easing)
=======

easing functions

```javasctipt
var easing = require("@nathanfaucett/easing");

/*
  percentComplete - (0.0 to 1.0).
  elaspedTime - The number of milliseconds the animation has been running
  startValue - the value to start at (or the value when the percent complete is 0%)
  endValue - the value to end at (or the value when the percent complete is 100%)
  totalDuration - The total desired length of the animation in milliseconds
*/
easing.inOutQuad(percentComplete, elaspedTime, startValue, endValue, totalDuration);
```
