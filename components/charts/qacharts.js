/*
 * qacharts v1.0
 *
 * Charts for Quick App. 
 * 
 * A component of Apex-UI.
 *
 * Apex-UI 组件库：https://github.com/vivoquickapp/apex-ui
 * 
 * Apex-UI 组件库官方文档：https://vivoquickapp.github.io/apex-ui-docs/
 */

class Event {
  constructor() {
    this.events = {};
  }

  /**
   * 事件监听
   * @param {String} type
   * @param {String} listener
   */
  addEventListener(type, listener = function () {}) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  /**
   * 触发事件
   * @param {String} type
   * @param  {...Any} params
   */
  trigger(type, ...params) {
    if (!!this.events[type]) {
      this.events[type].forEach(listener => {
        try {
          listener.apply(null, params);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }
}

/**
 * 默认参数配置
 */

var Config = {
  animation: true,
  animationDuration: 1000,
  animationTiming: 'easeInOut', // easeIn, easeOut, easeInOut, linear
  backgroundColor: '#ffffff',
  colors: ['#7cb5ec', '#f7a35c', '#434348', '#90ed7d', '#f15c80', '#8085e9'], // wxcharts调色盘
  tooltip: {
    show: false,
    data: [],
    maxTextWidth: 0,
    backgroundColor: '#000000',
    backgroundRadius: 5,
    backgroundOpacity: 0.7,
    padding: 10,
    itemGap: 5,
    iconRadius: 5,
    iconGap: 5,
    textStyle: {
      fontSize: 15,
      color: '#ffffff',
      lineHeight: 15,
    },
    axisPointer: {
      type: 'line', // line shadow
      lineStyle: {
        lineWidth: 1,
        color: '#808080',
        opacity: 1,
      },
      shadowStyle: {
        color: '#969696',
        opacity: 0.3,
      },
      cross: {
        show: true,
        lineWidth: 1,
        lineColor: '#808080',
        lineDash: [5, 10],
        lineOpacity: 1,
        backgroundColor: '#999999',
        backgroundOpacity: 1,
        fontColor: '#ffffff',
        fontPadding: 5,
      },
    },
  },
  label: {
    show: true,
    fontSize: 10,
    color: 'auto',
    margin: 5,
  },
  legend: {
    show: true,
    type: 'default', // default, rect, circle, line
    marginTop: 15,
    itemGap: 15,
    shapeRadius: 7.5,
    shapeWidth: 30,
    shapeHeight: 15,
    textStyle: {
      fontSize: 15,
      color: '#333333',
      padding: 5,
    },
  },
  padding: [20, 20, 20, 20],
  yAxisCategory: {
    show: true,
    type: 'category', // category, value
    boundaryGap: true,
    axisName: {
      show: true,
      text: '轴线名称',
      gap: 10,
      textStyle: {
        color: '#666666',
        fontSize: 15,
        align: 'center',
      },
    },
    axisLabel: {
      show: true,
      gap: 5,
      textStyle: {
        color: '#666666',
        fontSize: 12,
      },
    },
    axisTick: {
      show: true,
      alignWithLabel: false, // alignWithLabel为true时，刻度线与标签对齐
      length: 5,
      lineStyle: {
        lineWidth: 1,
        color: '#666666',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        lineWidth: 1,
        color: '#666666',
      },
    },
    axisSplitLine: {
      show: true,
      alignWithLabel: false, // alignWithLabel为true时，网格线与标签对齐
      lineStyle: {
        lineWidth: 1,
        color: '#dddddd',
      },
    },
  },
  yAxisValue: {
    show: true,
    type: 'value', // category, value
    max: 'auto',
    min: 'auto',
    splitNumber: 4,
    axisName: {
      show: true,
      text: '轴线名称',
      gap: 10,
      textStyle: {
        color: '#666666',
        fontSize: 15,
        align: 'center',
      },
    },
    axisLabel: {
      show: true,
      gap: 5,
      textStyle: {
        color: '#666666',
        fontSize: 12,
      },
    },
    axisTick: {
      show: true,
      length: 5,
      lineStyle: {
        lineWidth: 1,
        color: '#666666',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        lineWidth: 1,
        color: '#666666',
      },
    },
    axisSplitLine: {
      show: true,
      lineStyle: {
        lineWidth: 1,
        color: '#dddddd',
      },
    },
  },
  xAxisCategory: {
    show: true,
    type: 'category', // category, value
    boundaryGap: true, // boundaryGap为true时, 这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
    axisName: {
      show: true,
      text: '轴线名称',
      gap: 10,
      textStyle: {
        color: '#666666',
        fontSize: 15,
      },
    },
    axisLabel: {
      show: true,
      rotate: 0,
      gap: 5,
      textStyle: {
        color: '#666666',
        fontSize: 12,
      },
    },
    axisTick: {
      show: true,
      alignWithLabel: false, // alignWithLabel为true时，刻度线与标签对齐
      length: 5,
      lineStyle: {
        lineWidth: 1,
        color: '#666666',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        lineWidth: 1,
        color: '#666666',
      },
    },
    axisSplitLine: {
      show: true,
      alignWithLabel: false, // alignWithLabel为true时，网格线与标签对齐
      lineStyle: {
        lineWidth: 1,
        color: '#dddddd',
      },
    },
  },
  xAxisValue: {
    show: true,
    type: 'value', // category, value
    max: 'auto',
    min: 'auto',
    splitNumber: 4,
    axisName: {
      show: true,
      text: '轴线名称',
      gap: 10,
      textStyle: {
        color: '#666666',
        fontSize: 15,
        align: 'center',
      },
    },
    axisLabel: {
      show: true,
      rotate: 0,
      gap: 5,
      textStyle: {
        color: '#666666',
        fontSize: 12,
      },
    },
    axisTick: {
      show: true,
      length: 5,
      lineStyle: {
        lineWidth: 1,
        color: '#666666',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        lineWidth: 1,
        color: '#666666',
      },
    },
    axisSplitLine: {
      show: true,
      lineStyle: {
        lineWidth: 1,
        color: '#dddddd',
      },
    },
  },
  radarAxis: {
    shape: 'polygon', // polygon, circle
    center: ['50%', '50%'],
    radius: '80%',
    max: 'auto',
    splitNumber: 4,
    axisName: {
      show: true,
      textStyle: {
        fontSize: 15,
        color: '#666666',
        margin: 10,
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        lineWidth: 1,
        color: '#cccccc',
        opacity: 1,
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        lineWidth: 1,
        color: '#cccccc',
        opacity: 1,
      },
    },
    splitArea: {
      odd: {
        show: true,
        color: '#f5f5f5',
        opacity: 1,
      },
      even: {
        show: true,
        color: '#e6e6e6',
        opacity: 1,
      },
    },
  },
  bar: {
    barMaxWidth: 20,
    barMinWidth: 1,
    barWidth: 'auto',
    barGap: 5,
  },
  line: {
    smooth: false,
    connectNulls: false,
    line: {
      show: true,
      lineWidth: 2,
      color: 'auto',
      opacity: 1,
    },
    symbol: {
      show: true,
      type: 'circle', // circle
      size: 7,
      color: 'auto',
    },
    area: {
      show: false,
      color: 'auto',
      opacity: 0.5,
    },
  },
  pie: {
    center: ['50%', '50%'],
    radius: [0, '80%'],
    roseType: false, // false radius area
    offsetAngle: 0,
    disablePieStroke: true,
    labelLine: {
      lineDotRadius: 3,
      lineWidth: 1,
      length1: 25,
      length2: 15,
    },
    title: {
      show: false,
      text: '主标题',
      textStyle: {
        fontSize: 30,
        color: '#666666',
        lineHeight: 30,
      },
      subtext: '副标题',
      subtextStyle: {
        fontSize: 20,
        color: '#999999',
        lineHeight: 20,
      },
      itemGap: 5,
    },
  },
  radar: {
    line: {
      show: true,
      lineWidth: 1,
      color: 'auto',
      opacity: 1,
    },
    area: {
      show: false,
      color: 'auto',
      opacity: 0.5,
    },
    symbol: {
      show: true,
      type: 'circle', // circle
      size: 7,
      color: 'auto',
    },
  },
  scatter: {
    radius: 10,
    opacity: 1,
    lineWidth: 0,
    strokeColor: 'auto',
  },
  funnel: {
    width: 'auto',
    height: 'auto',
    top: '0%',
    left: '0%',
    right: '0%',
    bottom: '0%',
    max: 100,
    min: 0,
    gap: 5,
    shape: 'funnel', // funnel, pyramid
    sort: 'descending', // descending, ascending
    funnelAlign: 'center', // left, center, right
    label: {
      position: 'inside', // inside, outside
    },
    itemStyle: {
      borderColor: '#ffffff',
      borderWidth: 1,
    },
  },
  candlestick: {
    barMaxWidth: 20,
    barMinWidth: 1,
    barWidth: 'auto',
    itemStyle: {
      color: '#ec0000',
      bordercolor: '#ec0000',
      opacity: 1,
      color0: '#00da3c',
      bordercolor0: '#00da3c',
      opacity0: 1,
      borderWidth: 1,
    },
    highLine: {
      show: false,
      lineStyle: {
        color: '#ec0000',
        lineWidth: 1,
        lineDash: [10, 15],
        opacity: 1,
      },
    },
    lowLine: {
      show: false,
      lineStyle: {
        color: '#ec0000',
        lineWidth: 1,
        lineDash: [10, 15],
        opacity: 1,
      },
    },
    bar: {
      show: false,
      height: 50,
      margin: 15,
      itemStyle: {
        color: 'auto',
        opacity: 1,
      },
      lineStyle: {
        lineWidth: 1,
        lineColor: '#666666',
      },
    },
  },
  heatmap: {
    itemStyle: {
      color: ['#BAE7FF', '#0050B3'],
      useSplit: false,
    },
  },
  treemap: {
    splitLine: {
      show: true,
      lineWidth: 5,
      color: '#ffffff',
    },
  },
  tagCloud: {
    padding: 1,
    timeInterval: 500,
    font: 'serif',
    fontSize: 15,
    rotate: 0,
    spiral: 'archimedean', // archimedean rectangular {function}
  },
};

/**
 * getColor 颜色参数为对象则返回渐变色
 * @param {Object} color
 * @param {Object} context
 * @param {Number} xStart
 * @param {Number} yStart
 * @param {Number} xEnd
 * @param {Number} yEnd
 */
function getColor(color, context, xStart, yStart, xEnd, yEnd) {
  if (isObject(color)) {
    const { linearGradient, colors } = color;
    const [x0, y0, x1, y1] = linearGradient;

    const xSpacing = xEnd - xStart;
    const ySpacing = yEnd - yStart;

    const gradientColor = context.createLinearGradient(xStart + xSpacing * x0, yStart + ySpacing * y0, xStart + xSpacing * x1, yStart + ySpacing * y1);
    colors.forEach(item => {
      const { offset, color } = item;
      gradientColor.addColorStop(offset, color);
    });

    return gradientColor
  }

  return color
}

/**
 * HEX to HSL
 * @param {String} HEX
 * @return {Array} HSL
 */
function HEX2HSL(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16)

  ;(r /= 255), (g /= 255), (b /= 255);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break
      case g:
        h = (b - r) / d + 2;
        break
      case b:
        h = (r - g) / d + 4;
        break
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return [h, s, l]
}

/**
 * HSL to HEX
 * @param {Array} HSL
 * @return {String} HEX
 */
function HSL2HEX(hsl) {
  let [h, s, l] = hsl;
  let r, g, b;

  h /= 360;
  s /= 100;
  l /= 100;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * 转化坐标
 * @param {Object} origin
 * @param {Array} center
 */
function convertCoordinateOrigin(origin, center) {
  let [centerX, centerY] = center;

  return {
    x: centerX + origin.x,
    y: centerY - origin.y,
  }
}

/**
 * 判断是否有冲突
 * @param {Object} souce // 待检查对象
 * @param {Object} target // 比较对象
 * @param {Object} distance // 避免冲突的间隙
 */
function isCollision(souce, target, distance) {
  let isCollision = false;
  if (souce.x > 0 && target.x > 0) {
    isCollision = souce.y + distance > target.y;
  } else if (souce.x < 0 && target.x < 0) {
    isCollision = souce.y - distance < target.y;
  }

  return isCollision
}

/**
 * 检查并避免冲突
 * @param {Object} souce // 待检查对象
 * @param {Object} target // 比较对象
 * @param {Object} distance // 避免冲突的间隙
 */
function avoidCollision(souce, target, distance) {
  if (target) {
    while (isCollision(souce, target, distance)) {
      if (souce.x > 0) {
        souce.y--;
      } else if (souce.x < 0) {
        souce.y++;
      }
    }
  }
  return souce
}

/**
 * 10% => 0.1
 * @param {String} percent
 */
function percentToNum(percent) {
  if (!!percent) {
    percent = String(percent).replace('%', '');
    percent = Number(percent) / 100;
  } else {
    percent = 0;
  }
  return percent
}

/**
 * 判断一个数据是否为对象
 * @param {Any} data
 */
function isObject(data) {
  return Object.prototype.toString.call(data) === '[object Object]'
}

/**
 * 判断一个数据是否为数组
 * @param {Any} data
 */
function isArray(data) {
  return Object.prototype.toString.call(data) === '[object Array]'
}

/**
 * 计算触摸滑动距离
 * @param {*} distance
 * @param {*} chartData
 * @param {*} config
 * @param {*} opts
 */
function calValidDistance(distance, chartData, config, opts) {
  let dataChartAreaWidth = opts.width - config.padding[0] - chartData.axisData.xAxisLabelPoint[0].x;
  let dataChartWidth = chartData.axisData.xEachSpacing * opts.xAxis.data.length;
  let validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth - chartData.axisData.xEachSpacing / 2;
  }
  return validDistance
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lodash_clonedeep = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
});

/**
 * 将来源对象数据补充到目标对象中
 * @param {Object} sources // 来源对象
 * @param {Object} sourcesKey // 来源对象属性
 * @param {Object} target  // 目标对象
 * @param {Object} targetKey  // 目标对象属性
 * @param {Boolean} isCover  // 是否强制来源对象数据覆盖目标对象数据
 */
function replenishData(sources, sourcesKey, target, targetKey, isCover = false) {
  if (!target[targetKey] && target[targetKey] !== 0 && target[targetKey] !== '' && typeof target[targetKey] !== 'boolean') {
    // (目标对象为空时赋值)
    target[targetKey] = lodash_clonedeep(sources[sourcesKey]);
  } else {
    if (isCover) {
      if (isObject(sources[sourcesKey])) {
        Object.keys(sources[sourcesKey]).forEach(_key => {
          replenishData(sources[sourcesKey], _key, target[targetKey], _key, isCover);
        });
      } else if (isArray(sources[sourcesKey])) {
        if (sourcesKey == 'series') {
          sources[sourcesKey].forEach((sourcesItem, sourcesIndex) => {
            Object.keys(sourcesItem).forEach(_key => {
              replenishData(sources[_key][sourcesIndex], _key, target[_key][sourcesIndex], _key, true);
            });
          });
        } else {
          target[targetKey] = [].concat(sources[sourcesKey]);
        }
      } else {
        target[targetKey] = sources[sourcesKey];
      }
    } else {
      // (目标对象不为为空时，若数据为对象时递归)
      if (isObject(target[targetKey]) && isObject(sources[sourcesKey])) {
        Object.keys(sources[sourcesKey]).forEach(_key => {
          replenishData(sources[sourcesKey], _key, target[targetKey], _key, isCover);
        });
      }
    }
  }
}

/**
 * 将opts的数据补充完整
 */
function calOptions() {
  let { config, opts } = this;
  replenishData(config, 'animation', opts, 'animation');
  replenishData(config, 'animationDuration', opts, 'animationDuration');
  replenishData(config, 'animationTiming', opts, 'animationTiming');
  replenishData(config, 'backgroundColor', opts, 'backgroundColor');
  replenishData(config, 'colors', opts, 'colors');
  replenishData(config, 'padding', opts, 'padding');
  replenishData(config, 'legend', opts, 'legend');
  replenishData(config, 'tooltip', opts, 'tooltip');

  opts.series.forEach(seriesItem => {
    switch (seriesItem.type) {
      case 'bar':
      case 'line':
      case 'scatter':
      case 'candlestick':
      case 'k':
      case 'heatmap':
        if (opts.yAxis && opts.yAxis.type == 'category') {
          replenishData(config, 'yAxisCategory', opts, 'yAxis');
        } else {
          replenishData(config, 'yAxisValue', opts, 'yAxis');
        }

        if (opts.xAxis && opts.xAxis.type == 'value') {
          replenishData(config, 'xAxisValue', opts, 'xAxis');
        } else {
          replenishData(config, 'xAxisCategory', opts, 'xAxis');
        }
      case 'radar':
        replenishData(config, 'radarAxis', opts, 'radarAxis');
        break
    }
  });

  calSeries.call(this);

  console.log('complete calOptions', this);
}

/**
 * 将series的数据补充完整
 */
function calSeries() {
  let { config, opts } = this;

  opts.series.forEach((seriesItem, seriesIndex) => {
    replenishData(config, 'label', seriesItem, 'label');
    switch (seriesItem.type) {
      case 'bar':
      case 'line':
      case 'pie':
      case 'radar':
      case 'scatter':
      case 'funnel':
      case 'heatmap':
      case 'treemap':
      case 'tagCloud':
        replenishData(config, seriesItem.type, opts.series, seriesIndex);
        break
      case 'candlestick':
      case 'k':
        replenishData(config, 'candlestick', opts.series, seriesIndex);
        break
    }
  });
}

/**
 * 获取存在xy轴图表的点击位置下标
 * @param {Object} offset
 */
function getAxisChartCurrentIndex(offset) {
  const { x, y } = offset;
  const { opts, chartData } = this;
  const { yAxis, xAxis } = opts;
  const { xStart, xEnd, yStart, yEnd, xAxisLabelPoint, yAxisLabelPoint } = chartData.axisData;
  const isInExactChartArea = x < xEnd && x > xStart && y > yEnd && y < yStart;
  let currentIndex = -1;

  if (isInExactChartArea) {
    // 点击有效范围
    if (xAxis.type == 'category' && yAxis.type == 'value') {
      xAxisLabelPoint.forEach((item, index) => {
        if (x + (Math.abs(opts._scrollDistance_) || 0) > item.x) {
          currentIndex = index;
        }
      });

      if (x < xAxisLabelPoint[0].x) {
        currentIndex = 0;
      }
    } else if (xAxis.type == 'value' && yAxis.type == 'category') {
      yAxisLabelPoint.forEach((item, index) => {
        if (y < item.y) {
          currentIndex = index;
        }
      });

      if (y > yAxisLabelPoint[0].y) {
        currentIndex = 0;
      }
    } else if (xAxis.type == 'value' && yAxis.type == 'value') ;
  }

  console.log('complete getAxisChartCurrentIndex', offset);

  return currentIndex
}

/**
 * 获取饼图的点击位置下标
 * @param {Object} offset
 */
function getPieChartCurrentIndex(offset) {
  const { x, y } = offset;
  const { data, center, radius, offsetAngle } = this.chartData.chartPie;
  const [centerX, centerY] = center;
  const [raidusMin, raidusMax] = radius;
  const length = Math.hypot(Math.abs(x - centerX), Math.abs(y - centerY)); // 点击点距离圆心的长度
  const isInExactChartArea = length >= raidusMin && length <= raidusMax;
  let currentIndex = -1;

  if (isInExactChartArea) {
    // 点击有效范围
    let currentRadian; // 点击点的弧度
    if (Math.atan2(x - centerX, centerY - y) > 0) {
      currentRadian = Math.atan2(x - centerX, centerY - y);
    } else {
      currentRadian = Math.PI + (Math.PI - Math.abs(Math.atan2(x - centerX, centerY - y)));
    }
    if (currentRadian > ((90 + offsetAngle) * Math.PI) / 180) {
      currentRadian -= ((90 + offsetAngle) * Math.PI) / 180;
    } else {
      currentRadian = 2 * Math.PI + (currentRadian - ((90 + offsetAngle) * Math.PI) / 180);
    }

    data.forEach((item, index) => {
      if (currentRadian > item._start_) {
        currentIndex = index;
      }
    });
  }

  console.log('complete getPieChartCurrentIndex');

  return currentIndex
}

/**
 * 获取雷达图的点击位置下标
 * @param {Object} offset
 */
function getRadarChartCurrentIndex(offset) {
  const { x, y } = offset;
  const { chartRadar, radarAxis } = this.chartData;
  const { center, radius } = radarAxis;
  const [centerX, centerY] = center;
  const length = Math.hypot(Math.abs(x - centerX), Math.abs(y - centerY)); // 点击点距离圆心的长度
  const isInExactChartArea = length <= radius;
  let currentIndex = -1;

  if (isInExactChartArea) {
    // 点击有效范围
    let currentRadian; // 点击点的弧度
    if (Math.atan2(x - centerX, centerY - y) > 0) {
      currentRadian = Math.atan2(x - centerX, centerY - y);
    } else {
      currentRadian = Math.PI + (Math.PI - Math.abs(Math.atan2(x - centerX, centerY - y)));
    }

    chartRadar[0].dataPosition.forEach((item, index, arr) => {
      const { spacingRadian, _start_ } = item;
      if (index == 0) {
        if (currentRadian >= 2 * Math.PI - spacingRadian / 2 || currentRadian < _start_ + spacingRadian / 2) {
          currentIndex = 0;
        }
      } else {
        if (currentRadian > _start_ - spacingRadian / 2 && currentRadian <= _start_ + spacingRadian / 2) {
          currentIndex = arr.length - index;
        }
      }
    });
  }

  console.log('complete getRadarChartCurrentIndex');

  return currentIndex
}

/**
 * 计算 tooltip 容器数据
 */
function calTooltipContainerData() {
  const { opts, tooltipData } = this;
  const { width, height, tooltip } = opts;
  const { padding, itemGap, iconRadius, iconGap, textStyle } = tooltip;
  const { offset, data, maxTextWidth, tooltipTitle } = tooltipData;
  const { x: offsetX, y: offsetY } = offset;

  let tooltipWidth = padding * 2 + iconRadius * 2 + iconGap + maxTextWidth;
  let tooltipHeight = padding * 2;
  let tooltipContainerOffset = 10; // 偏移量
  let tooltipX, tooltipY;

  if (tooltipTitle) {
    tooltipHeight += textStyle.lineHeight + itemGap;
  }

  data.forEach((item, index, arr) => {
    if (item.type == 'candlestick' || item.type == 'k') {
      const contentLength = item.volumn ? 6 : 5;
      tooltipHeight += textStyle.lineHeight * contentLength + itemGap * contentLength - 1;
    } else {
      if (index + 1 == arr.length) {
        tooltipHeight += textStyle.lineHeight;
      } else {
        tooltipHeight += textStyle.lineHeight + itemGap;
      }
    }
  });

  if (offsetX + tooltipContainerOffset + tooltipWidth <= width) {
    // 优先显示右边
    tooltipX = offsetX + tooltipContainerOffset;
  } else if (offsetX - tooltipContainerOffset - tooltipWidth >= 0) {
    // 左边
    tooltipX = offsetX - tooltipContainerOffset - tooltipWidth;
  } else {
    // 左右都放不下
    if (offsetX <= width / 2) {
      // 边界靠右边
      tooltipX = width - tooltipWidth;
    } else {
      // 边界靠左边
      tooltipX = 0;
    }
  }

  if (offsetY + tooltipContainerOffset + tooltipHeight <= height) {
    // 优先显示下边
    tooltipY = offsetY + tooltipContainerOffset;
  } else if (offsetY - tooltipContainerOffset - tooltipHeight >= 0) {
    // 上边
    tooltipY = offsetY - tooltipContainerOffset - tooltipHeight;
  } else {
    // 上下都放不下
    if (offsetY <= height / 2) {
      // 边界靠下边
      tooltipY = height - tooltipHeight;
    } else {
      // 边界靠上边
      tooltipY = 0;
    }
  }

  this.tooltipData = {
    ...this.tooltipData,
    tooltipX,
    tooltipY,
    tooltipWidth,
    tooltipHeight,
    tooltipTitle,
  };
  console.log('complete calTooltipContainerData', this.tooltipData);
}

/**
 * 计算轴线指示器数据
 * @param {Number} currentIndex
 * @param {Object} offset
 */

function calAxisPointerData(currentIndex) {
  if (currentIndex == -1) return

  const { context, opts, chartData, tooltipData } = this;
  const { xAxis, yAxis, tooltip } = opts;
  const { x: offsetX, y: offsetY } = tooltipData.offset;
  const { type, cross } = tooltip.axisPointer;
  const { fontPadding: crossFontPadding } = cross;
  const {
    xStart,
    xEnd,
    xEachSpacing,
    xSpacing,
    xDataRange,
    xMinData,
    yStart,
    yEnd,
    yEachSpacing,
    ySpacing,
    yDataRange,
    yMinData,
    xAxisLabelPoint,
    yAxisLabelPoint,
  } = chartData.axisData;
  const isExistCandlestick = tooltipData.data.some(item => item.type == 'candlestick' || item.type == 'k');

  let curerntAxisLabel, currentAxisLabelX, currentAxisLabelY;

  if (xAxis.type == 'category' && yAxis.type == 'value') {
    curerntAxisLabel = xAxisLabelPoint[currentIndex].text;
    currentAxisLabelX = xAxisLabelPoint[currentIndex].x;
    currentAxisLabelY = xAxisLabelPoint[currentIndex].y;
  } else if (xAxis.type == 'value' && yAxis.type == 'category') {
    curerntAxisLabel = yAxisLabelPoint[currentIndex].text;
    currentAxisLabelX = yAxisLabelPoint[currentIndex].x;
    currentAxisLabelY = yAxisLabelPoint[currentIndex].y;
  } else if (xAxis.type == 'value' && yAxis.type == 'value') ;

  let crossPointer, xAxisPointer, yAxisPointer;

  if (xAxis.type == 'category' && yAxis.type == 'value') {
    const yAxisLabel = (yMinData + ((yStart - offsetY) * yDataRange) / ySpacing).toFixed(2);
    const yAxisLabelX = yAxisLabelPoint[0].x;
    const yAxisLabelFontSize = yAxis.axisLabel.textStyle.fontSize;
    const xAxisLabelFontSize = xAxis.axisLabel.textStyle.fontSize;

    context.font = `${yAxisLabelFontSize}px`;
    const yAxisLabelWidth = context.measureText(yAxisLabel).width + 2 * crossFontPadding;
    const yAxisLabelHeight = yAxisLabelFontSize + 2 * crossFontPadding;

    context.font = `${xAxisLabelFontSize}px`;
    const xAxisLabelWidth = context.measureText(curerntAxisLabel).width + 2 * crossFontPadding;
    const xAxisLabelHeight = xAxisLabelFontSize + 2 * crossFontPadding;

    this.tooltipData.offset = { x: currentAxisLabelX, y: offsetY }; // 修改 offset 为 cross 交点位置

    context.font = `${tooltip.textStyle.fontSize}px`;
    this.tooltipData.maxTextWidth = Math.max(this.tooltipData.maxTextWidth, context.measureText(curerntAxisLabel).width);
    this.tooltipData.tooltipTitle = curerntAxisLabel;

    crossPointer = {
      yAxisLabel,
      yAxisLabelWidth,
      yAxisLabelHeight,
      yAxisLabelX,
      yAxisLabelY: offsetY,
      yAxisLineX0: xStart,
      yAxisLineY0: offsetY,
      yAxisLineX1: xEnd,
      yAxisLineY1: offsetY,
      xAxisLabel: curerntAxisLabel,
      xAxisLabelWidth,
      xAxisLabelHeight,
      xAxisLabelX: currentAxisLabelX,
      xAxisLabelY: currentAxisLabelY,
      xAxisLineX0: currentAxisLabelX,
      xAxisLineY0: yStart,
      xAxisLineX1: currentAxisLabelX,
      xAxisLineY1: yEnd,
    };

    if (type == 'line') {
      xAxisPointer = {
        x0: currentAxisLabelX,
        y0: yStart,
        x1: currentAxisLabelX,
        y1: yEnd,
      };
    } else if (type == 'shadow') {
      xAxisPointer = {
        x: xStart + xEachSpacing * currentIndex,
        y: yEnd,
        width: xEachSpacing,
        height: ySpacing,
      };
    }
  } else if (xAxis.type == 'value' && yAxis.type == 'category') {
    const xAxisLabel = (xMinData + ((offsetX - xStart) * xDataRange) / xSpacing).toFixed(2);
    const xAxisLabelY = xAxisLabelPoint[0].y;
    const yAxisLabelFontSize = yAxis.axisLabel.textStyle.fontSize;
    const xAxisLabelFontSize = xAxis.axisLabel.textStyle.fontSize;

    context.font = `${yAxisLabelFontSize}px`;
    const yAxisLabelWidth = context.measureText(curerntAxisLabel).width + 2 * crossFontPadding;
    const yAxisLabelHeight = yAxisLabelFontSize + 2 * crossFontPadding;

    context.font = `${xAxisLabelFontSize}px`;
    const xAxisLabelWidth = context.measureText(xAxisLabel).width + 2 * crossFontPadding;
    const xAxisLabelHeight = xAxisLabelFontSize + 2 * crossFontPadding;

    this.tooltipData.offset = { x: offsetX, y: currentAxisLabelY }; // 修改 offset 为 cross 交点位置

    context.font = `${tooltip.textStyle.fontSize}px`;
    this.tooltipData.maxTextWidth = Math.max(this.tooltipData.maxTextWidth, context.measureText(curerntAxisLabel).width);
    this.tooltipData.tooltipTitle = curerntAxisLabel;

    crossPointer = {
      yAxisLabel: curerntAxisLabel,
      yAxisLabelWidth,
      yAxisLabelHeight,
      yAxisLabelX: currentAxisLabelX,
      yAxisLabelY: currentAxisLabelY,
      yAxisLineX0: xStart,
      yAxisLineY0: currentAxisLabelY,
      yAxisLineX1: xEnd,
      yAxisLineY1: currentAxisLabelY,
      xAxisLabel,
      xAxisLabelWidth,
      xAxisLabelHeight,
      xAxisLabelX: offsetX,
      xAxisLabelY,
      xAxisLineX0: offsetX,
      xAxisLineY0: yStart,
      xAxisLineX1: offsetX,
      xAxisLineY1: yEnd,
    };

    if (type == 'line') {
      yAxisPointer = {
        x0: xStart,
        y0: currentAxisLabelY,
        x1: xEnd,
        y1: currentAxisLabelY,
      };
    } else if (type == 'shadow') {
      yAxisPointer = {
        x: xStart,
        y: yEnd - yEachSpacing * currentIndex,
        width: xSpacing,
        height: yEachSpacing,
      };
    }
  } else if (xAxis.type == 'value' && yAxis.type == 'value') ;

  if (isExistCandlestick) {
    if (chartData.chartCandlestick.bar) {
      crossPointer.xAxisLineY0 = chartData.chartCandlestick.bar.lineStartY;
    }
  }

  tooltipData.axisPointerData = {
    crossPointer,
    xAxisPointer,
    yAxisPointer,
  };

  console.log('complete calAxisPointerData');
}

/**
 * 计算线图 tooltipData
 * @param {Number} currentIndex
 */
function calLineChartTooltipData(currentIndex) {
  if (currentIndex == -1) return

  const { context, opts, chartData, tooltipData } = this;
  let maxTextWidth = tooltipData.maxTextWidth;

  context.font = `${opts.tooltip.textStyle.fontSize}px`;
  chartData.chartLine.forEach(item => {
    const { type, name, data, itemStyle, label, symbol } = item;
    const { type: symbolType, size: symbolSize, color: symbolColor } = symbol;
    const { x, y, data: value } = data[currentIndex];

    if (typeof value !== 'number') return

    const text = `${name}: ${label.format ? label.format(value) : value}`;
    const textWidth = context.measureText(text).width;
    maxTextWidth = Math.max(maxTextWidth, textWidth);

    tooltipData.data.push({
      type,
      name,
      text,
      color: itemStyle.color,
      x,
      y,
      symbolType,
      symbolSize,
      symbolColor,
    });
  });

  this.tooltipData.maxTextWidth = maxTextWidth;

  console.log('complete calLineChartTooltipData');
}

/**
 * 计算柱状图 tooltipData
 * @param {Number} currentIndex
 */
function calBarChartTooltipData(currentIndex) {
  if (currentIndex == -1) return

  const { context, opts, chartData, tooltipData } = this;
  let maxTextWidth = tooltipData.maxTextWidth;

  context.font = `${opts.tooltip.textStyle.fontSize}px`;
  chartData.chartBar[currentIndex].forEach(barItem => {
    barItem.forEach(seriesItem => {
      const { type, name, data, itemStyle, label } = seriesItem;
      const text = `${name}: ${label.format ? label.format(data) : data}`;
      const textWidth = context.measureText(text).width;
      maxTextWidth = Math.max(maxTextWidth, textWidth);

      tooltipData.data.push({
        type,
        name,
        text,
        color: itemStyle.color,
      });
    });
  });

  this.tooltipData.maxTextWidth = maxTextWidth;

  console.log('complete calBarChartTooltipData');
}

/**
 * 计算饼图 tooltipData
 * @param {Number} currentIndex
 */
function calPieChartTooltipData(currentIndex) {
  if (currentIndex == -1) return

  const { context, opts, chartData, tooltipData } = this;
  const { name, type, data, center, radius, label } = chartData.chartPie;
  const { name: itemName, value, itemStyle, _proportion_, _start_, _end_ } = data[currentIndex];
  const text = `${itemName}: ${label.format ? label.format(value) : value}`;

  context.font = `${opts.tooltip.textStyle.fontSize}px`;
  const textWidth = context.measureText(text).width;
  const maxTextWidth = Math.max(tooltipData.maxTextWidth, textWidth);
  this.tooltipData.maxTextWidth = maxTextWidth;
  this.tooltipData.tooltipTitle = name;

  tooltipData.data.push({
    type,
    name: itemName,
    text,
    color: itemStyle.color,
    center,
    radius,
    _proportion_,
    _start_,
    _end_,
  });

  console.log('complete calPieChartTooltipData');
}

/**
 * 计算雷达图 tooltipData
 * @param {Number} currentIndex
 */
function calRadarChartTooltipData(currentIndex) {
  if (currentIndex == -1) return

  const { context, opts, chartData, tooltipData } = this;
  let maxTextWidth = tooltipData.maxTextWidth;

  context.font = `${opts.tooltip.textStyle.fontSize}px`;
  chartData.chartRadar.forEach(item => {
    const { type, name, data, dataPosition, itemStyle, label, symbol } = item;
    const { type: symbolType, size: symbolSize, color: symbolColor } = symbol;
    const value = data[currentIndex];
    const { x, y } = dataPosition[currentIndex].position;

    if (typeof value !== 'number') return

    const text = `${name}: ${label.format ? label.format(value) : value}`;
    const textWidth = context.measureText(text).width;
    maxTextWidth = Math.max(maxTextWidth, textWidth);

    tooltipData.data.push({
      type,
      name,
      text,
      color: itemStyle.color,
      x,
      y,
      symbolType,
      symbolSize,
      symbolColor,
    });
  });

  this.tooltipData.maxTextWidth = maxTextWidth;
  this.tooltipData.tooltipTitle = chartData.radarAxis.namePosition[currentIndex].text;
}

/**
 * 计算蜡烛图 tooltipData
 * @param {Number} currentIndex
 */
function calCandlestickChartTooltipData(currentIndex) {
  if (currentIndex == -1) return

  const { context, opts, chartData, tooltipData } = this;
  const { type, name, rect } = chartData.chartCandlestick;
  const { start, end, low, high, volumn, color } = rect[currentIndex];
  const _start = `开盘价：${start}`,
    _end = `收盘价：${end}`,
    _low = `最低价：${low}`,
    _high = `最高价：${high}`,
    _volumn = `成交量：${volumn}`;
  let textWidth,
    maxTextWidth = tooltipData.maxTextWidth;

  context.font = `${opts.tooltip.textStyle.fontSize}px`;

  textWidth = context.measureText(_start).width;
  maxTextWidth = Math.max(maxTextWidth, textWidth);

  textWidth = context.measureText(_end).width;
  maxTextWidth = Math.max(maxTextWidth, textWidth);

  textWidth = context.measureText(_low).width;
  maxTextWidth = Math.max(maxTextWidth, textWidth);

  textWidth = context.measureText(_high).width;
  maxTextWidth = Math.max(maxTextWidth, textWidth);

  if (volumn) {
    textWidth = context.measureText(_volumn).width;
    maxTextWidth = Math.max(maxTextWidth, textWidth);
  }

  tooltipData.data.push({
    type,
    name,
    start: _start,
    end: _end,
    low: _low,
    high: _high,
    volumn: _volumn,
    color,
  });

  this.tooltipData.maxTextWidth = maxTextWidth;

  console.log('complete calCandlestickChartTooltipData');
}

function calSeriesMap() {
  let seriesMap = {};
  this.opts.series.forEach(seriesItem => {
    if (seriesItem.type == 'candlestick' || seriesItem.type == 'k') {
      if (!seriesMap['candlestick']) {
        seriesMap['candlestick'] = [];
      }
      seriesMap['candlestick'].push(seriesItem);
    } else if (seriesItem.type == 'funnel') {
      if (!seriesMap['funnel']) {
        seriesMap['funnel'] = [];
      }
      seriesItem.data.sort((a, b) => {
        if (seriesItem.sort == 'ascending') {
          return a.value - b.value
        } else {
          return b.value - a.value
        }
      });
      seriesMap['funnel'].push(seriesItem);
    } else {
      if (!seriesMap[seriesItem.type]) {
        seriesMap[seriesItem.type] = [];
      }
      seriesMap[seriesItem.type].push(seriesItem);
    }
  });
  this.seriesMap = seriesMap;

  console.log('complete calSeriesMap', this.seriesMap);
}

function calSeriesColor() {
  let { colors, series } = this.opts;

  series.forEach((seriesItem, seriesIndex) => {
    if (seriesItem.type == 'pie' || seriesItem.type == 'funnel' || seriesItem.type == 'treemap' || seriesItem.type == 'tagCloud') {
      seriesItem.data.forEach((dataItem, dataIndex) => {
        dataItem.itemStyle = dataItem.itemStyle || {};
        if (!dataItem.itemStyle.color) {
          dataItem.itemStyle.color = colors[dataIndex % colors.length];
        }
      });
    } else {
      seriesItem.itemStyle = seriesItem.itemStyle || {};
      if (!seriesItem.itemStyle.color) {
        seriesItem.itemStyle.color = colors[seriesIndex % colors.length];
      }
    }
  });

  console.log('complete calSeriesColor', series);
}

function calLegendData() {
  if (this.opts.legend.show) {
    let { context, opts } = this;
    let { width, padding, legend, series } = opts;
    let { type: legendType, data: legendData, shapeWidth, shapeHeight, shapeRadius, itemGap, marginTop, textStyle } = legend;
    let { fontSize, padding: textPadding } = textStyle;
    let legendWidth = 0;
    let legendWidthNum = 0;
    let legendList = [];
    let currentRow = [];
    let _shapeWidth = shapeWidth;
    let _legendData = [];
    let containerWidth = width - padding[1] - padding[3];

    let dataSeriesItem = [];
    let isDataName = series.some(seriesItem => {
      dataSeriesItem = seriesItem;
      return seriesItem.type == 'pie' || seriesItem.type == 'funnel' || seriesItem.type == 'treemap' || seriesItem.type == 'tagCloud'
    });

    if (!legendData) {
      if (isDataName) {
        _legendData = dataSeriesItem.data.map(dataItem => {
          return dataItem.name
        });
      } else {
        _legendData = series.map(seriesItem => {
          return seriesItem.name
        });
      }
    } else {
      _legendData = legendData;
    }

    context.font = `${fontSize}px`;
    if (isDataName) {
      _legendData.forEach(name => {
        dataSeriesItem.data.forEach(dataItem => {
          if (name == dataItem.name) {
            let _legendType;
            if (legendType == 'default') {
              switch (dataSeriesItem.type) {
                case 'pie':
                  _legendType = 'circle';
                  _shapeWidth = shapeRadius * 2;
                  break
                case 'funnel':
                case 'treemap':
                case 'tagCloud':
                  _legendType = 'rect';
                  break
              }
            }

            let { name, itemStyle } = dataItem;
            let measureText = this.context.measureText(name || '').width;
            let itemWidth = _shapeWidth + textPadding + itemGap + measureText;

            let obj = {
              legendType: _legendType,
              name,
              measureText,
              color: itemStyle.color,
            };

            if (legendWidthNum + itemWidth > containerWidth) {
              legendList.push(currentRow);
              legendWidthNum = itemWidth;
              currentRow = [obj];
            } else {
              legendWidthNum += itemWidth;
              legendWidth = Math.max(legendWidth, legendWidthNum);
              currentRow.push(obj);
            }
          }
        });
      });
    } else {
      _legendData.forEach(name => {
        series.forEach(seriesItem => {
          let _legendType;
          if (legendType == 'default') {
            switch (seriesItem.type) {
              case 'bar':
              case 'radar':
              case 'candlestick':
              case 'k':
              case 'heatmap':
                _legendType = 'rect';
                break
              case 'line':
                _legendType = 'line';
                break
              case 'scatter':
                _legendType = 'circle';
                _shapeWidth = shapeRadius * 2;
                break
            }
          }

          if (name == seriesItem.name) {
            let { name, itemStyle } = seriesItem;
            let measureText = this.context.measureText(name || '').width;
            let itemWidth = _shapeWidth + textPadding + itemGap + measureText;
            let obj = {
              legendType: _legendType,
              name,
              measureText,
              color: itemStyle.color,
            };

            if (legendWidthNum + itemWidth > containerWidth) {
              legendList.push(currentRow);
              legendWidthNum = itemWidth;
              currentRow = [obj];
            } else {
              legendWidthNum += itemWidth;
              legendWidth = Math.max(legendWidth, legendWidthNum);
              currentRow.push(obj);
            }
          }
        });
      });
    }

    if (currentRow.length) {
      legendList.push(currentRow);
    }

    this.legendData = {
      legendList,
      legendWidth: legendWidth - itemGap,
      legendHeight: legendList.length * Math.max(shapeHeight, fontSize) + (legendList.length - 1) * itemGap + marginTop,
    };
  } else {
    this.legendData = {
      legendList: [],
      legendWidth: 0,
      legendHeight: 0,
    };
  }

  console.log('complete calLegendData', this.legendData);
}

function calAxisData() {
  let seriesMap = lodash_clonedeep(this.seriesMap);
  let { context, opts, legendData, chartData } = this;
  let { width, height, padding, xAxis, yAxis } = opts;
  let {
    show: xAxisShow,
    type: xAxisType,
    data: xAxisData,
    boundaryGap: xAxisBoundaryGap,
    max: xAxisMax,
    min: xAxisMin,
    splitNumber: xAxisSplitNumber,
    axisName: xAxisName,
    axisLabel: xAxisLabel,
    axisTick: xAxisTick,
    axisLine: xAxisLine,
    axisSplitLine: xAxisSplitLine,
  } = xAxis;

  let {
    show: yAxisShow,
    type: yAxisType,
    data: yAxisData,
    boundaryGap: yAxisBoundaryGap,
    max: yAxisMax,
    min: yAxisMin,
    splitNumber: yAxisSplitNumber,
    axisName: yAxisName,
    axisLabel: yAxisLabel,
    axisTick: yAxisTick,
    axisLine: yAxisLine,
    axisSplitLine: yAxisSplitLine,
  } = yAxis;

  let { show: xAxisNameShow, textStyle: xAxisNameTextStyle, gap: xAxisNameGap, text: xAxisNameText } = xAxisName;
  let {
    show: xAxisLabelShow,
    textStyle: xAxisLabelTextStyle,
    gap: xAxisLabelGap,
    rotate: xAxisLabelRotate,
    showIndex: xAxisLabelShowIndex,
    format: xAxisLabelFormat,
  } = xAxisLabel;
  let { show: xAxisTickShow, lineStyle: xAxisTickStyle, length: xAxisTickLength, alignWithLabel: xAxisTickAlign, showIndex: xAxisTickShowIndex } = xAxisTick;
  let { show: xAxisLineShow, lineStyle: xAxisLineStyle } = xAxisLine;
  let { show: xAxisSplitLineShow, lineStyle: xAxisSplitLineStyle, alignWithLabel: xAxisSplitLineAlign, showIndex: xAxisSplitLineShowIndex } = xAxisSplitLine;

  let { show: yAxisNameShow, textStyle: yAxisNameTextStyle, gap: yAxisNameGap, text: yAxisNameText } = yAxisName;
  let { show: yAxisLabelShow, textStyle: yAxisLabelTextStyle, gap: yAxisLabelGap, showIndex: yAxisLabelShowIndex, format: yAxisLabelFormat } = yAxisLabel;
  let { show: yAxisTickShow, lineStyle: yAxisTickStyle, length: yAxisTickLength, alignWithLabel: yAxisTickAlign, showIndex: yAxisTickShowIndex } = yAxisTick;
  let { show: yAxisLineShow, lineStyle: yAxisLineStyle } = yAxisLine;
  let { show: yAxisSplitLineShow, lineStyle: yAxisSplitLineStyle, alignWithLabel: yAxisSplitLineAlign, showIndex: yAxisSplitLineShowIndex } = yAxisSplitLine;

  let { fontSize: xAxisNameFontSize } = xAxisNameTextStyle;
  let { fontSize: xAxisLabelFontSize } = xAxisLabelTextStyle;
  let { lineWidth: xAxisTickLineWidth } = xAxisTickStyle;
  let { lineWidth: xAxisLineWidth } = xAxisLineStyle;
  let { lineWidth: xAxisSplitLineWidth } = xAxisSplitLineStyle;

  let { fontSize: yAxisNameFontSize } = yAxisNameTextStyle;
  let { fontSize: yAxisLabelFontSize } = yAxisLabelTextStyle;
  let { lineWidth: yAxisTickLineWidth } = yAxisTickStyle;
  let { lineWidth: yAxisLineWidth } = yAxisLineStyle;
  let { lineWidth: yAxisSplitLineWidth } = yAxisSplitLineStyle;

  // 以x,y轴交叉点为原点
  let xStart = padding[3]; // x方向起点
  let xEnd = width - padding[1]; // x方向终点
  let yStart = height - padding[2] - legendData.legendHeight; // y方向起点
  let yEnd = padding[0]; // y方向终点

  if (seriesMap.candlestick && seriesMap.candlestick.length) {
    let { show, height, margin, lineStyle } = seriesMap['candlestick'][0].bar;
    let { lineWidth } = lineStyle;

    if (show) {
      yStart -= height + margin + lineWidth; // 蜡烛图存在成交量柱状图配置则修正yStart
    }
  }

  let xStartInit = xStart;
  let yStartInit = yStart;

  let yIsSamePart = true, // y轴是否同时为正数或负数，为false时同时存在正负数
    xIsSamePart = true, // x轴是否同时为正数或负数，为false时同时存在正负数
    yZero, // y轴零线的y坐标
    yPlusSpacing,
    yMinusSpacing,
    ySpacing,
    yEachSpacing,
    xZero, // x轴零线的x坐标
    xPlusSpacing,
    xMinusSpacing,
    xSpacing,
    xEachSpacing,
    yMaxData,
    yMinData,
    yDataRange,
    xMaxData,
    xMinData,
    xDataRange;

  chartData.axisData = {
    xStart: null,
    xEnd: null,
    yStart: null,
    yEnd: null,

    yIsSamePart: null,
    xIsSamePart: null,

    yZero: null,
    yPlusSpacing: null,
    yMinusSpacing: null,
    ySpacing: null,
    yEachSpacing: null,
    xZero: null,
    xPlusSpacing: null,
    xMinusSpacing: null,
    xSpacing: null,
    xEachSpacing: null,

    yMaxData: null,
    yMinData: null,
    yDataRange: null,
    xMaxData: null,
    xMinData: null,
    xDataRange: null,

    xAxisLabelPoint: [],
    xAxisTickPoint: [],
    xAxisLinePoint: {},
    xAxisSplitLinePoint: [],
    xAxisNamePoint: {},

    yAxisLabelPoint: [],
    yAxisTickPoint: [],
    yAxisLinePoint: {},
    yAxisSplitLinePoint: [],
    yAxisNamePoint: {},
  };

  function calAxisValue(axis = 'x') {
    let barDataObject = {}; // 因为层叠柱状图，柱状图数据单独计算
    let allDataObject = {};
    let allDataArr = [];

    Object.keys(seriesMap).forEach(type => {
      if (type == 'bar') {
        seriesMap['bar'].forEach(seriesItem => {
          if (seriesItem.stack) {
            if (!barDataObject[seriesItem.stack]) {
              barDataObject[seriesItem.stack] = [];
            }

            barDataObject[seriesItem.stack].push(seriesItem.data);
          } else {
            if (!barDataObject[seriesItem.name]) {
              barDataObject[seriesItem.name] = [];
            }

            barDataObject[seriesItem.name].push(seriesItem.data);
          }
        });

        allDataObject[type] = barDataObject;
      }

      if (type == 'line' || type == 'scatter' || type == 'candlestick') {
        seriesMap[type].forEach(seriesItem => {
          if (!allDataObject[type]) {
            allDataObject[type] = [];
          }

          allDataObject[type].push(seriesItem.data);
        });
      }
    });

    Object.keys(allDataObject).forEach(type => {
      if (type == 'bar') {
        Object.keys(allDataObject[type]).forEach(key => {
          if (barDataObject[key].length > 1) {
            let stackDataArr = barDataObject[key].reduce((stackDataArr, dataArr) => {
              if (stackDataArr.length == 0) {
                stackDataArr = dataArr;
              } else {
                dataArr.forEach((dataItem, dataIndex) => {
                  stackDataArr[dataIndex] += dataItem;
                });
              }
              return stackDataArr
            }, []);
            allDataArr = allDataArr.concat(stackDataArr);
          } else {
            let dataArr = barDataObject[key][0];
            allDataArr = allDataArr.concat(dataArr);
          }
        });
      }

      if (type == 'line') {
        allDataObject[type].forEach(dataArr => {
          let filterData = dataArr.reduce((data, dataItem) => {
            dataItem = Number(dataItem);
            if (!isNaN(dataItem) && typeof dataItem == 'number') {
              data.push(dataItem);
            }
            return data
          }, []);

          allDataArr = allDataArr.concat(filterData);
        });
      }

      if (type == 'scatter') {
        allDataObject[type].forEach(dataArr => {
          let filterData = dataArr.reduce((data, dataItem) => {
            dataItem = Number(dataItem[axis]);
            if (!isNaN(dataItem) && typeof dataItem == 'number') {
              data.push(dataItem);
            }
            return data
          }, []);

          allDataArr = allDataArr.concat(filterData);
        });
      }

      if (type == 'candlestick') {
        allDataObject[type].forEach(dataArr => {
          let filterData = dataArr.reduce((data, dataItem) => {
            dataItem = Number(dataItem[2]);
            if (!isNaN(dataItem) && typeof dataItem == 'number') {
              data.push(dataItem);
            }
            return data
          }, []);

          allDataArr = allDataArr.concat(filterData);
        });
      }
    });

    let axisLabelDataArr = [];
    let splitNumber = axis == 'x' ? xAxisSplitNumber : yAxisSplitNumber;
    let max = axis == 'x' ? xAxisMax : yAxisMax;
    let min = axis == 'x' ? xAxisMin : yAxisMin;
    let maxData = Math.max(...allDataArr);
    let minData = Math.min(...allDataArr);
    let dataRange = 0;
    let dataEachRange = 0;
    let limit = 1;
    let multiple = 1;
    console.log(`首次获取${axis}轴数据, maxData: ${maxData}, minData: ${minData}`, allDataArr);

    max = max == 'auto' ? max : Number(max);
    min = min == 'auto' ? min : Number(min);

    // 判断是否传入max,min
    if (max == 'auto' || min == 'auto') {
      if (max == 'auto') {
        maxData = maxData <= 0 && minData <= 0 ? 0 : maxData;
      } else {
        maxData = max;
      }
      if (min == 'auto') {
        minData = maxData >= 0 && minData >= 0 ? 0 : minData;
      } else {
        minData = min;
      }
      dataRange = maxData - minData;
      console.log(`修正数据, max: ${max}, min: ${min}, maxData = ${maxData}, minData = ${minData}`);
      console.log(`修正数据范围, dataRange = ${dataRange}`);
    } else {
      maxData = max;
      minData = min;
      dataRange = maxData - minData;
      console.log(`修正数据, max: ${max}, min: ${min}, maxData: ${maxData}, minData: ${minData}`);
      console.log(`固定数据范围, dataRange = ${dataRange}`);
    }

    // 是否同时为正数或负数，为false时同时存在正负数
    let isSamePart = maxData > 0 && minData < 0 ? false : true;

    if (dataRange >= 10000) {
      limit = 1000;
      console.log(`dataRange>=10000`);
    } else if (dataRange >= 1000) {
      limit = 100;
      console.log(`dataRange>=1000`);
    } else if (dataRange >= 100) {
      limit = 10;
      console.log(`dataRange>=100`);
    } else if (dataRange >= 10) {
      limit = 5;
      console.log(`dataRange>=10`);
    } else if (dataRange >= 1) {
      limit = 0.1;
      console.log(`dataRange>=1`);
    } else if (dataRange >= 0.1) {
      limit = 0.01;
      console.log(`dataRange>=0.1`);
    } else if (dataRange >= 0.01) {
      limit = 0.001;
      console.log(`dataRange>=0.01`);
    } else if (dataRange >= 0.001) {
      limit = 0.0001;
      console.log(`dataRange>=0.001`);
    } else {
      limit = 0.00001;
      console.log(`dataRange<0.0001`);
    }

    while (limit < 1) {
      limit *= 10;
      multiple *= 10;
      console.log(`limit<1, limit: ${limit}, multiple: ${multiple}`);
    }
    console.log(`limit = ${limit}, multiple = ${multiple}`);

    if (max == 'auto' && min == 'auto') {
      if (maxData >= 0 && minData >= 0) {
        dataRange = dataRange * multiple;
        dataEachRange = Math.ceil(dataRange / splitNumber);
        while (dataEachRange % limit !== 0) {
          dataEachRange += 1;
        }
        dataEachRange = dataEachRange / multiple;
        dataRange = dataEachRange * splitNumber;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        maxData = minData + dataRange;
        console.log(`同为正数且 max: auto, min: auto, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      } else if (maxData <= 0 && minData <= 0) {
        dataRange = dataRange * multiple;
        dataEachRange = Math.floor(dataRange / splitNumber);
        while (dataEachRange % limit !== 0) {
          dataEachRange += 1;
        }
        dataEachRange = dataEachRange / multiple;
        dataRange = dataEachRange * splitNumber;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        minData = maxData - dataRange;
        console.log(`同为负数且 max: auto, min: auto, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      } else {
        dataRange = dataRange * multiple;
        dataEachRange = Math.ceil(dataRange / splitNumber);
        while (dataEachRange % limit !== 0) {
          dataEachRange += 1;
        }
        dataEachRange = dataEachRange / multiple;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);

        axisLabelDataArr.push(0);

        let data = 0;
        while (data < maxData) {
          data += dataEachRange;
          axisLabelDataArr.push(data);
        }
        maxData = data;

        data = 0;
        while (data > minData) {
          data -= dataEachRange;
          axisLabelDataArr.unshift(data);
        }
        minData = data;
        dataRange = maxData - minData;
        console.log(`修正数据, maxData = ${maxData}, minData = ${minData}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        console.log(`正负数且 max: auto, min: auto, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      }
    }

    if (max == 'auto' && typeof min == 'number') {
      if (maxData >= 0 && minData >= 0) {
        dataRange = dataRange * multiple;
        dataEachRange = Math.ceil(dataRange / splitNumber);
        while (dataEachRange % limit !== 0) {
          dataEachRange += 1;
        }
        dataEachRange = dataEachRange / multiple;
        dataRange = dataEachRange * splitNumber;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        maxData = minData + dataRange;
        console.log(`同为正数且 max: auto, min: ${min}, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      } else if (maxData <= 0 && minData <= 0) {
        dataRange = dataRange * multiple;
        dataEachRange = Number((dataRange / splitNumber).toFixed(2));
        dataEachRange = dataEachRange / multiple;
        dataRange = dataEachRange * splitNumber;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        console.log(`同为负数且 max: auto, min: ${min}, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      } else {
        dataRange = dataRange * multiple;
        dataEachRange = Math.ceil(dataRange / splitNumber);
        while (dataEachRange % limit !== 0) {
          dataEachRange += 1;
        }
        dataEachRange = dataEachRange / multiple;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);

        axisLabelDataArr.push(0);

        let data = 0;
        while (data < maxData) {
          data += dataEachRange;
          axisLabelDataArr.push(data);
        }
        maxData = data;

        data = 0;
        while (data - dataEachRange > minData) {
          data -= dataEachRange;
          axisLabelDataArr.unshift(data);
        }
        axisLabelDataArr.unshift(minData);

        dataRange = maxData - minData;
        console.log(`修正数据, maxData = ${maxData}, minData = ${minData}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        console.log(`正负数且 max: auto, min: ${min}, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      }
    }

    if (typeof max == 'number' && min == 'auto') {
      console.log(`max: ${max}, min: auto`);

      if (maxData >= 0 && minData >= 0) {
        dataRange = dataRange * multiple;
        dataEachRange = Number((dataRange / splitNumber).toFixed(2));
        dataEachRange = dataEachRange / multiple;
        dataRange = dataEachRange * splitNumber;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        console.log(`同为正数且 max: ${max}, min: auto, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      } else if (maxData <= 0 && minData <= 0) {
        dataRange = dataRange * multiple;
        dataEachRange = Math.floor(dataRange / splitNumber);
        while (dataEachRange % limit !== 0) {
          dataEachRange += 1;
        }
        dataEachRange = dataEachRange / multiple;
        dataRange = dataEachRange * splitNumber;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        minData = maxData - dataRange;
        console.log(`同为负数且 max: ${max}, min: auto, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      } else {
        dataRange = dataRange * multiple;
        dataEachRange = Math.ceil(dataRange / splitNumber);
        while (dataEachRange % limit !== 0) {
          dataEachRange += 1;
        }
        dataEachRange = dataEachRange / multiple;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);

        axisLabelDataArr.push(0);

        let data = 0;
        while (data + dataEachRange < maxData) {
          data += dataEachRange;
          axisLabelDataArr.push(data);
        }
        axisLabelDataArr.push(maxData);

        data = 0;
        while (data > minData) {
          data -= dataEachRange;
          axisLabelDataArr.unshift(data);
        }
        minData = data;

        dataRange = maxData - minData;
        console.log(`修正数据, maxData = ${maxData}, minData = ${minData}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        console.log(`正负数且 max: ${max}, min: auto, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      }
    }

    if (typeof max == 'number' && typeof min == 'number') {
      console.log(`max: ${max}, min: ${min}`);

      if (maxData >= 0 && minData >= 0) {
        dataEachRange = Number((dataRange / splitNumber).toFixed(2));
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);
        console.log(`同为正数且 max: ${max}, min: ${min}, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      } else if (maxData <= 0 && minData <= 0) {
        dataEachRange = Number((dataRange / splitNumber).toFixed(2));
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);
        console.log(`同为负数且 max: ${max}, min: ${min}, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      } else {
        dataRange = dataRange * multiple;
        dataEachRange = Math.ceil(dataRange / splitNumber);

        while (dataEachRange % limit !== 0) {
          dataEachRange += 1;
        }
        dataEachRange = dataEachRange / multiple;
        console.log(`修正数据间隔, dataEachRange = ${dataEachRange}, splitNumber = ${splitNumber}`);

        axisLabelDataArr.push(0);

        let data = 0;
        while (data + dataEachRange < maxData) {
          data += dataEachRange;
          axisLabelDataArr.push(data);
        }
        axisLabelDataArr.push(maxData);

        data = 0;
        while (data - dataEachRange > minData) {
          data -= dataEachRange;
          axisLabelDataArr.unshift(data);
        }
        axisLabelDataArr.unshift(minData);

        dataRange = maxData - minData;
        console.log(`修正数据, maxData = ${maxData}, minData = ${minData}`);
        console.log(`修正数据范围, dataRange = ${dataRange}`);
        console.log(`正负数且 max: ${max}, min: ${min}, dataRange = ${dataRange}, dataEachRange = ${dataEachRange}, maxData: ${maxData}, minData: ${minData}`);
      }
    }

    if (isSamePart) {
      for (let i = 0; i <= splitNumber; i++) {
        let data = minData + dataEachRange * i;
        data = data.toFixed(multiple.toString().length - 1);
        axisLabelDataArr.push(Number(data));
      }
    }

    if (axis == 'x') {
      xDataRange = dataRange;
      xMaxData = maxData;
      xMinData = minData;
      xIsSamePart = isSamePart;
    } else {
      yDataRange = dataRange;
      yMaxData = maxData;
      yMinData = minData;
      yIsSamePart = isSamePart;
    }

    console.log(`complete calAxisValue ${axis}`, axisLabelDataArr);

    return axisLabelDataArr
  }

  // 计算xAxisLabelDataArr, yAxisLabelDataArr
  let xAxisLabelDataArr = xAxisType == 'category' ? xAxisData : calAxisValue('x');
  let yAxisLabelDataArr = yAxisType == 'category' ? yAxisData : calAxisValue('y');

  // 计算 xAxisLabelTextArr, xAxisLabelMaxHeight
  context.font = `${xAxisLabelFontSize}px`;
  let xAxisLabelMaxWidth = 0;
  let xAxisLabelMaxHeight = 0;
  let xAxisLabelTextArr = xAxisLabelDataArr.reduce((xAxisLabelTextArr, dataItem, dataIndex) => {
    let text = xAxisLabelFormat ? xAxisLabelFormat(dataItem) : dataItem;
    xAxisLabelMaxWidth = Math.max(context.measureText(text).width, xAxisLabelMaxWidth);
    xAxisLabelTextArr.push(text);
    return xAxisLabelTextArr
  }, []);

  xAxisLabelRotate = Number(xAxisLabelRotate);

  if (xAxisLabelRotate == 0) {
    xAxisLabelMaxHeight = xAxisLabelFontSize;
  } else {
    xAxisLabelMaxHeight =
      Math.abs(xAxisLabelMaxWidth * Math.sin((xAxisLabelRotate * Math.PI) / 180)) + Math.abs(xAxisLabelFontSize * Math.cos((xAxisLabelRotate * Math.PI) / 180));
  }

  // 计算yAxisLabelTextArr, yAxisLabelMaxWidth
  context.font = `${yAxisLabelFontSize}px`;
  let yAxisLabelMaxWidth = 0;
  let yAxisLabelTextArr = yAxisLabelDataArr.reduce((yAxisLabelTextArr, dataItem, dataIndex) => {
    let text = yAxisLabelFormat ? yAxisLabelFormat(dataItem) : dataItem;
    yAxisLabelMaxWidth = Math.max(context.measureText(text).width, yAxisLabelMaxWidth);
    yAxisLabelTextArr.push(text);
    return yAxisLabelTextArr
  }, []);

  let xSpacingNumber = 0;
  if (xAxisType == 'category') {
    xSpacingNumber = xAxisBoundaryGap ? xAxisLabelDataArr.length : xAxisLabelDataArr.length - 1;
  } else {
    xSpacingNumber = xAxisLabelDataArr.length - 1;
  }
  xSpacingNumber = opts.enableScroll ? Math.min(5, xSpacingNumber) : xSpacingNumber;

  let ySpacingNumber = 0;
  if (yAxisType == 'category') {
    ySpacingNumber = yAxisBoundaryGap ? yAxisLabelDataArr.length : yAxisLabelDataArr.length - 1;
  } else {
    ySpacingNumber = yAxisLabelDataArr.length - 1;
  }

  // 修正yStart
  if (xAxisShow && xAxisLabelShow) {
    yStart -= xAxisLabelMaxHeight + xAxisLabelGap;
  }
  if (xAxisShow && xAxisTickShow) {
    if ((yAxisType == 'value' && yIsSamePart) || yAxisType == 'category') {
      yStart -= xAxisTickLength;
    }
  }
  if (yIsSamePart) {
    if (xAxisShow && xAxisLineShow) {
      yStart -= xAxisLineWidth / 2;
    }
  } else {
    if (xAxisShow && xAxisSplitLineShow) {
      yStart -= xAxisSplitLineWidth / 2;
    }
  }

  // 修正yEnd
  if (yAxisShow && yAxisNameShow) {
    yEnd += yAxisNameFontSize + yAxisNameGap;
  }
  ySpacing = yStart - yEnd;
  console.log(`初始ySpacing数据, yStart = ${yStart}, yEnd = ${yEnd}, ySpacing = ${ySpacing}`);
  yEachSpacing = Math.floor(ySpacing / ySpacingNumber);
  yEnd = yStart - yEachSpacing * ySpacingNumber;
  ySpacing = yStart - yEnd;
  console.log(`修正ySpacing数据, yStart = ${yStart}, yEnd = ${yEnd}, ySpacing = ${ySpacing}`);

  // 修正xStart
  if (yAxisLabelShow) {
    xStart += yAxisLabelMaxWidth + yAxisLabelGap;
  }
  if (yAxisShow && yAxisTickShow) {
    if ((xAxisType == 'value' && xIsSamePart) || xAxisType == 'category') {
      xStart += yAxisTickLength;
    }
  }
  if (xIsSamePart) {
    if (yAxisShow && yAxisLineShow) {
      xStart += yAxisLineWidth / 2;
    }
  } else {
    if (yAxisShow && yAxisSplitLineShow) {
      xStart += yAxisSplitLineWidth / 2;
    }
  }

  // 修正xEnd
  if (xAxisShow && xAxisNameShow) {
    context.font = `${xAxisNameFontSize}px`;
    let xAxisNameTextWidth = context.measureText(xAxisNameText).width;
    xEnd -= xAxisNameTextWidth + xAxisNameGap;
  }
  xSpacing = xEnd - xStart;
  console.log(`初始xSpacing数据, xStart = ${xStart}, xEnd = ${xEnd}, xSpacing = ${xSpacing}`);
  xEachSpacing = Math.floor(xSpacing / xSpacingNumber);
  xEnd = xStart + xEachSpacing * xSpacingNumber;
  xSpacing = xEnd - xStart;
  console.log(`修正xSpacing数据, xStart = ${xStart}, xEnd = ${xEnd}, xSpacing = ${xSpacing}`);

  // 计算yZero
  if (yAxisType == 'value' && !yIsSamePart) {
    yAxisLabelDataArr.reduce((arr, item, index) => {
      if (index == 0) {
        arr.push({
          y: yStart,
        });
      } else {
        let spacing = (Math.abs(yAxisLabelDataArr[index - 1] - yAxisLabelDataArr[index]) * ySpacing) / yDataRange;

        arr.push({
          y: arr[index - 1].y - spacing,
        });
      }

      if (item == 0) {
        yZero = arr[index].y; // 存在正负值时计算0线的y坐标
        console.log(`yZero = ${yZero}`);
      }

      if (index + 1 == yAxisLabelDataArr.length) {
        yEnd = arr[index].y;
        ySpacing = yStart - yEnd;
        console.log(`修正yEnd, yEnd = ${yEnd}`);
        console.log(`修正ySpacing, ySpacing = ${ySpacing}`);
        yPlusSpacing = yZero - yEnd;
        yMinusSpacing = yStart - yZero;
      }

      return arr
    }, []);
  }

  // 计算xZero
  if (xAxisType == 'value' && !xIsSamePart) {
    xAxisLabelDataArr.reduce((arr, item, index) => {
      if (index == 0) {
        arr.push({
          x: xStart,
        });
      } else {
        let spacing = (Math.abs(xAxisLabelDataArr[index] - xAxisLabelDataArr[index - 1]) * xSpacing) / xDataRange;
        arr.push({
          x: arr[index - 1].x + spacing,
        });
      }

      if (item == 0) {
        xZero = arr[index].x; // 存在正负值时计算0线的x坐标
        console.log(`xZero = ${xZero}`);
      }

      if (index + 1 == xAxisLabelDataArr.length) {
        xEnd = arr[index].x;
        xSpacing = xEnd - xStart;
        console.log(`修正xEnd, xEnd = ${xEnd}`);
        console.log(`修正xSpacing, xSpacing = ${xSpacing}`);
        xPlusSpacing = xEnd - xZero;
        xMinusSpacing = xZero - xStart;
      }

      return arr
    }, []);
  }

  // 计算 yAxis 各项数据
  if (yAxisType == 'value') {
    let _xStart = xStartInit;
    if (yAxisShow && yAxisLabelShow) {
      _xStart += yAxisLabelMaxWidth; // 更新_xStart数据
    }

    // 计算 yAxisLabelPoint
    chartData.axisData.yAxisLabelPoint = yAxisLabelTextArr.reduce((yAxisLabelPoint, item, index) => {
      if (index == 0) {
        yAxisLabelPoint.push({
          text: item,
          x: _xStart,
          y: yStart,
        });
      } else {
        let spacing = (Math.abs(yAxisLabelDataArr[index - 1] - yAxisLabelDataArr[index]) * ySpacing) / yDataRange;

        yAxisLabelPoint.push({
          text: item,
          x: _xStart,
          y: yAxisLabelPoint[index - 1].y - spacing,
        });
      }

      return yAxisLabelPoint
    }, []);

    // 计算 yAxisSplitLinePoint
    if (yAxisShow && yAxisSplitLineShow) {
      let _xStart = xStartInit;
      if (yAxisShow && yAxisLabelShow) {
        _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
      }
      if (yAxisShow && yAxisTickShow) {
        if (xIsSamePart) {
          _xStart += yAxisTickLength; // 更新_xStart数据
        }
      }

      chartData.axisData.yAxisSplitLinePoint = chartData.axisData.yAxisLabelPoint.reduce((yAxisSplitLinePoint, item, index) => {
        yAxisSplitLinePoint.push({
          startX: _xStart, // 起点x坐标
          startY: item.y, // 起点y坐标
          endX: xEnd, // 终点x坐标
          endY: item.y, // 终点y坐标
        });
        return yAxisSplitLinePoint
      }, []);
    }

    // 计算 yAxisTickPoint
    if (yAxisShow && yAxisTickShow) {
      let _xStart = xStartInit;

      if (xIsSamePart) {
        if (yAxisShow && yAxisLabelShow) {
          _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
        }
      } else {
        _xStart = xZero - xAxisLineWidth / 2 - yAxisTickLength;
      }

      chartData.axisData.yAxisTickPoint = chartData.axisData.yAxisLabelPoint.reduce((yAxisTickPoint, item, index) => {
        yAxisTickPoint.push({
          startX: _xStart, // 起点x坐标
          startY: item.y, // 起点y坐标
          endX: _xStart + yAxisTickLength, // 终点x坐标
          endY: item.y, // 终点y坐标
        });
        return yAxisTickPoint
      }, []);
    }

    // 计算 yAxisLinePoint
    if (yAxisShow && yAxisLineShow) {
      let _xStart = xStartInit;
      if (xIsSamePart) {
        if (yAxisShow && yAxisLabelShow) {
          _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
        }
        if (yAxisShow && yAxisTickShow) {
          _xStart += yAxisTickLength; // 更新_xStart数据
        }
        _xStart += yAxisLineWidth / 2;
      } else {
        _xStart = xZero;
      }

      chartData.axisData.yAxisLinePoint = {
        startX: _xStart, // 起点x坐标
        startY: yStart, // 起点y坐标
        endX: _xStart, // 终点x坐标
        endY: yEnd - yAxisTickLineWidth / 2, // 终点y坐标
      };
    }

    // 计算 yAxisNamePoint
    if (yAxisShow && yAxisNameShow) {
      let _xStart = xStartInit;
      if (xIsSamePart) {
        if (yAxisShow && yAxisLabelShow) {
          _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
        }
        if (yAxisShow && yAxisTickShow) {
          _xStart += yAxisTickLength; // 更新_xStart数据
        }
        if (yAxisShow && yAxisLineShow) {
          _xStart += yAxisLineWidth / 2; // 更新_xStart数据
        }
      } else {
        _xStart = xZero;
      }

      chartData.axisData.yAxisNamePoint = {
        text: yAxisNameText,
        x: _xStart,
        y: yEnd - yAxisNameGap,
      };
    }
  }

  // 计算 xAxis 各项数据
  if (xAxisType == 'value') {
    let _yStart = yStartInit;
    if (xAxisShow && xAxisLabelShow) {
      _yStart -= xAxisLabelMaxHeight; // 更新_yStart数据
    }

    // 计算 xAxisLabelPoint
    chartData.axisData.xAxisLabelPoint = xAxisLabelTextArr.reduce((xAxisLabelPoint, item, index) => {
      if (index == 0) {
        xAxisLabelPoint.push({
          text: item,
          x: xStart,
          y: _yStart,
        });
      } else {
        let spacing = (Math.abs(xAxisLabelDataArr[index] - xAxisLabelDataArr[index - 1]) * xSpacing) / xDataRange;

        xAxisLabelPoint.push({
          text: item,
          x: xAxisLabelPoint[index - 1].x + spacing,
          y: _yStart,
        });
      }

      return xAxisLabelPoint
    }, []);

    // 计算 xAxisSplitLinePoint
    if (xAxisShow && xAxisSplitLineShow) {
      let _yStart = yStartInit;
      if (xAxisShow && xAxisLabelShow) {
        _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新_yStart数据
      }
      if (xAxisShow && xAxisTickShow) {
        if (yIsSamePart) {
          _yStart -= xAxisTickLength; // 更新_yStart数据
        }
      }

      chartData.axisData.xAxisSplitLinePoint = chartData.axisData.xAxisLabelPoint.reduce((xAxisSplitLinePoint, item, index) => {
        xAxisSplitLinePoint.push({
          startX: item.x, // 起点x坐标
          startY: _yStart, // 起点y坐标
          endX: item.x, // 终点x坐标
          endY: yEnd, // 终点y坐标
        });
        return xAxisSplitLinePoint
      }, []);
    }

    // 计算 xAxisTickPoint
    if (xAxisShow && xAxisTickShow) {
      let _yStart = yStartInit;
      if (yIsSamePart) {
        if (yAxisShow && yAxisLabelShow) {
          _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新_yStart数据
        }
      } else {
        _yStart = yZero + xAxisLineWidth / 2 + yAxisTickLength;
      }

      chartData.axisData.xAxisTickPoint = chartData.axisData.xAxisLabelPoint.reduce((xAxisTickPoint, item, index) => {
        xAxisTickPoint.push({
          startX: item.x, // 起点x坐标
          startY: _yStart, // 起点y坐标
          endX: item.x, // 终点x坐标
          endY: _yStart - xAxisTickLength, // 终点y坐标
        });
        return xAxisTickPoint
      }, []);
    }

    // 计算 xAxisLinePoint
    if (xAxisShow && xAxisLineShow) {
      let _yStart = yStartInit;
      if (yIsSamePart) {
        if (xAxisShow && xAxisLabelShow) {
          _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新_yStart数据
        }
        if (xAxisShow && xAxisTickShow) {
          _yStart -= xAxisTickLength; // 更新_yStart数据
        }
        _yStart -= xAxisLineWidth / 2;
      } else {
        _yStart = yZero;
      }

      chartData.axisData.xAxisLinePoint = {
        startX: xStart, // 起点x坐标
        startY: _yStart, // 起点y坐标
        endX: xEnd + xAxisTickLineWidth / 2, // 终点x坐标
        endY: _yStart, // 终点y坐标
      };
    }

    // 计算 xAxisNamePoint
    if (xAxisShow && xAxisNameShow) {
      let _yStart = yStartInit;
      if (xIsSamePart) {
        if (xAxisShow && xAxisLabelShow) {
          _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新_yStart数据
        }
        if (xAxisShow && xAxisTickShow) {
          _yStart -= xAxisTickLength; // 更新_yStart数据
        }
        if (xAxisShow && xAxisLineShow) {
          _yStart -= xAxisLineWidth / 2; // 更新_yStart数据
        }
      } else {
        _yStart = yZero;
      }

      chartData.axisData.xAxisNamePoint = {
        text: xAxisNameText,
        x: xEnd + xAxisNameGap,
        y: _yStart,
      };
    }
  }

  // 计算 yAxis 各项数据
  if (yAxisType == 'category') {
    // 计算 yAxisLabelPoint
    chartData.axisData.yAxisLabelPoint = yAxisLabelTextArr.reduce((yAxisLabelPoint, item, index) => {
      let _xStart = xStartInit;
      if (yAxisShow && yAxisLabelShow) {
        _xStart += yAxisLabelMaxWidth; // 更新_xStart数据
      }

      if (yAxisBoundaryGap) {
        yAxisLabelPoint.push({
          show: true,
          text: item,
          x: _xStart,
          y: yStart - yEachSpacing * (index + 1) + yEachSpacing / 2,
        });
      } else {
        yAxisLabelPoint.push({
          show: true,
          text: item,
          x: _xStart,
          y: yStart - yEachSpacing * index,
        });
      }

      return yAxisLabelPoint
    }, []);

    if (yAxisLabelShowIndex && yAxisLabelShowIndex.length) {
      chartData.axisData.yAxisLabelPoint = chartData.axisData.yAxisLabelPoint.map((item, index) => {
        let isShow = yAxisLabelShowIndex.some(showIndex => {
          return showIndex === index
        });

        if (isShow) {
          item.show = true;
        } else {
          item.show = false;
        }

        return item
      });
    }

    // 计算 yAxisSplitLinePoint
    if (yAxisShow && yAxisSplitLineShow) {
      let _xStart = xStartInit;
      if (yAxisShow && yAxisLabelShow) {
        _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
      }
      if (yAxisShow && yAxisTickShow) {
        if (xIsSamePart) {
          _xStart += yAxisTickLength; // 更新_xStart数据
        }
      }

      // yAxisSplitLineAlign为true时，刻度线与标签对齐
      let yAxisSplitLineNumber = 0;
      if (yAxisBoundaryGap) {
        yAxisSplitLineNumber = yAxisSplitLineAlign ? yAxisLabelDataArr.length : yAxisLabelDataArr.length + 1;
      } else {
        yAxisSplitLineNumber = yAxisLabelDataArr.length;
      }

      for (let index = 0; index < yAxisSplitLineNumber; index++) {
        if (yAxisBoundaryGap && yAxisSplitLineAlign) {
          chartData.axisData.yAxisSplitLinePoint.push({
            show: true,
            startX: _xStart,
            startY: yStart - yEachSpacing * index - yEachSpacing / 2,
            endX: xEnd,
            endY: yStart - yEachSpacing * index - yEachSpacing / 2,
          });
        } else {
          chartData.axisData.yAxisSplitLinePoint.push({
            show: true,
            startX: _xStart,
            startY: yStart - yEachSpacing * index,
            endX: xEnd,
            endY: yStart - yEachSpacing * index,
          });
        }
      }
    }

    if (yAxisSplitLineShowIndex && yAxisSplitLineShowIndex.length) {
      chartData.axisData.yAxisSplitLinePoint = chartData.axisData.yAxisSplitLinePoint.map((item, index) => {
        let isShow = yAxisSplitLineShowIndex.some(showIndex => {
          return showIndex === index
        });

        if (isShow) {
          item.show = true;
        } else {
          item.show = false;
        }

        return item
      });
    }

    // 计算 yAxisTickPoint
    if (yAxisShow && yAxisTickShow) {
      let _xStart = xStartInit;

      if (xIsSamePart) {
        if (yAxisShow && yAxisLabelShow) {
          _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
        }
      } else {
        _xStart = xZero - yAxisLineWidth / 2 - yAxisTickLength;
      }

      // yAxisTickAlign为true时，刻度线与标签对齐
      let yAxisTickNumber = 0;
      if (yAxisBoundaryGap) {
        yAxisTickNumber = yAxisTickAlign ? yAxisLabelDataArr.length : yAxisLabelDataArr.length + 1;
      } else {
        yAxisTickNumber = yAxisLabelDataArr.length;
      }

      for (let index = 0; index < yAxisTickNumber; index++) {
        if (yAxisBoundaryGap && yAxisTickAlign) {
          chartData.axisData.yAxisTickPoint.push({
            show: true,
            startX: _xStart,
            startY: yStart - yEachSpacing * index - yEachSpacing / 2,
            endX: _xStart + yAxisTickLength,
            endY: yStart - yEachSpacing * index - yEachSpacing / 2,
          });
        } else {
          chartData.axisData.yAxisTickPoint.push({
            show: true,
            startX: _xStart,
            startY: yStart - yEachSpacing * index,
            endX: _xStart + yAxisTickLength,
            endY: yStart - yEachSpacing * index,
          });
        }
      }
    }

    if (yAxisTickShowIndex && yAxisTickShowIndex.length) {
      chartData.axisData.yAxisTickPoint = chartData.axisData.yAxisTickPoint.map((item, index) => {
        let isShow = yAxisTickShowIndex.some(showIndex => {
          return showIndex === index
        });

        if (isShow) {
          item.show = true;
        } else {
          item.show = false;
        }

        return item
      });
    }

    // 计算 yAxisLinePoint
    if (yAxisShow && yAxisLineShow) {
      let _xStart = xStartInit;
      if (xIsSamePart) {
        if (yAxisShow && yAxisLabelShow) {
          _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
        }
        if (yAxisShow && yAxisTickShow) {
          _xStart += yAxisTickLength; // 更新_xStart数据
        }
        _xStart += yAxisLineWidth / 2;
      } else {
        _xStart = xZero;
      }

      chartData.axisData.yAxisLinePoint = {
        startX: _xStart,
        startY: yStart,
        endX: _xStart,
        endY: yEnd - yAxisTickLineWidth / 2,
      };
    }

    // 计算 yAxisNamePoint
    if (yAxisShow && yAxisNameShow) {
      let _xStart = xStartInit;
      if (xIsSamePart) {
        if (yAxisShow && yAxisLabelShow) {
          _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
        }
        if (yAxisShow && yAxisTickShow) {
          _xStart += yAxisTickLength; // 更新_xStart数据
        }
        if (yAxisShow && yAxisLineShow) {
          _xStart += yAxisLineWidth / 2; // 更新_xStart数据
        }
      } else {
        _xStart = xZero;
      }

      chartData.axisData.yAxisNamePoint = {
        text: yAxisNameText,
        x: _xStart,
        y: yEnd - yAxisNameGap,
      };
    }
  }

  // 计算 xAxis 各项数据
  if (xAxisType == 'category') {
    // 计算 xAxisLabelPoint
    chartData.axisData.xAxisLabelPoint = xAxisLabelTextArr.reduce((xAxisLabelPoint, item, index) => {
      let _yStart = yStartInit;
      if (xAxisShow && xAxisLabelShow) {
        _yStart -= xAxisLabelMaxHeight; // 更新_yStart数据
      }

      if (xAxisBoundaryGap) {
        xAxisLabelPoint.push({
          show: true,
          text: item,
          x: xStart + xEachSpacing * (index + 1) - xEachSpacing / 2,
          y: _yStart,
        });
      } else {
        xAxisLabelPoint.push({
          show: true,
          text: item,
          x: xStart + xEachSpacing * index,
          y: _yStart,
        });
      }
      return xAxisLabelPoint
    }, []);

    if (xAxisLabelShowIndex && xAxisLabelShowIndex.length) {
      chartData.axisData.xAxisLabelPoint = chartData.axisData.xAxisLabelPoint.map((item, index) => {
        let isShow = xAxisLabelShowIndex.some(showIndex => {
          return showIndex === index
        });

        if (isShow) {
          item.show = true;
        } else {
          item.show = false;
        }

        return item
      });
    }

    // 计算 xAxisSplitLinePoint
    if (xAxisShow && xAxisSplitLineShow) {
      let _yStart = yStartInit;
      if (xAxisShow && xAxisLabelShow) {
        _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新_yStart数据
      }
      if (xAxisShow && xAxisTickShow) {
        if (yIsSamePart) {
          _yStart -= xAxisTickLength; // 更新_yStart数据
        }
      }

      // xAxisSplitLineAlign为true时，网格线与标签对齐
      let xAxisSplitLineNumber = 0;
      if (xAxisBoundaryGap) {
        xAxisSplitLineNumber = xAxisSplitLineAlign ? xAxisLabelDataArr.length : xAxisLabelDataArr.length + 1;
      } else {
        xAxisSplitLineNumber = xAxisLabelDataArr.length;
      }

      for (let index = 0; index < xAxisSplitLineNumber; index++) {
        if (xAxisBoundaryGap && xAxisSplitLineAlign) {
          chartData.axisData.xAxisSplitLinePoint.push({
            show: true,
            startX: xStart + xEachSpacing * index + xEachSpacing / 2,
            startY: _yStart,
            endX: xStart + xEachSpacing * index + xEachSpacing / 2,
            endY: yEnd,
          });
        } else {
          chartData.axisData.xAxisSplitLinePoint.push({
            show: true,
            startX: xStart + xEachSpacing * index,
            startY: _yStart,
            endX: xStart + xEachSpacing * index,
            endY: yEnd,
          });
        }
      }
    }

    if (xAxisSplitLineShowIndex && xAxisSplitLineShowIndex.length) {
      chartData.axisData.xAxisSplitLinePoint = chartData.axisData.xAxisSplitLinePoint.map((item, index) => {
        let isShow = xAxisSplitLineShowIndex.some(showIndex => {
          return showIndex === index
        });

        if (isShow) {
          item.show = true;
        } else {
          item.show = false;
        }

        return item
      });
    }

    // 计算 xAxisTickPoint
    if (xAxisShow && xAxisTickShow) {
      let _yStart = yStartInit;

      if (yIsSamePart) {
        if (xAxisShow && xAxisLabelShow) {
          _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新_yStart数据
        }
        if (xAxisShow && xAxisTickShow) {
          _yStart -= xAxisTickLength; // 更新_yStart数据
        }
      } else {
        _yStart = yZero - xAxisLineWidth / 2;
      }

      // xAxisTickAlign为true时，刻度线与标签对齐
      let xAxisTickNumber = 0;
      if (xAxisBoundaryGap) {
        xAxisTickNumber = xAxisTickAlign ? xAxisLabelDataArr.length : xAxisLabelDataArr.length + 1;
      } else {
        xAxisTickNumber = xAxisLabelDataArr.length;
      }

      for (let index = 0; index < xAxisTickNumber; index++) {
        if (xAxisBoundaryGap && xAxisTickAlign) {
          chartData.axisData.xAxisTickPoint.push({
            show: true,
            startX: xStart + xEachSpacing * index + xEachSpacing / 2,
            startY: _yStart,
            endX: xStart + xEachSpacing * index + xEachSpacing / 2,
            endY: _yStart + xAxisTickLength,
          });
        } else {
          chartData.axisData.xAxisTickPoint.push({
            show: true,
            startX: xStart + xEachSpacing * index,
            startY: _yStart,
            endX: xStart + xEachSpacing * index,
            endY: _yStart + xAxisTickLength,
          });
        }
      }
    }

    if (xAxisTickShowIndex && xAxisTickShowIndex.length) {
      chartData.axisData.xAxisTickPoint = chartData.axisData.xAxisTickPoint.map((item, index) => {
        let isShow = xAxisTickShowIndex.some(showIndex => {
          return showIndex === index
        });

        if (isShow) {
          item.show = true;
        } else {
          item.show = false;
        }

        return item
      });
    }

    // 计算 xAxisLinePoint
    if (xAxisShow && xAxisLineShow) {
      let _yStart = yStartInit;
      if (yIsSamePart) {
        if (xAxisShow && xAxisLabelShow) {
          _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新_yStart数据
        }
        if (xAxisShow && xAxisTickShow) {
          _yStart -= xAxisTickLength; // 更新_yStart数据
        }
        _yStart -= xAxisLineWidth / 2;
      } else {
        _yStart = yZero;
      }

      chartData.axisData.xAxisLinePoint = {
        startX: xStart,
        startY: _yStart,
        endX: xEnd + xAxisTickLineWidth / 2,
        endY: _yStart,
      };
    }

    // 计算 xAxisNamePoint
    if (xAxisShow && xAxisNameShow) {
      let _yStart = yStartInit;
      if (yIsSamePart) {
        if (xAxisShow && xAxisLabelShow) {
          _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新_yStart数据
        }
        if (xAxisShow && xAxisTickShow) {
          _yStart -= xAxisTickLength; // 更新_yStart数据
        }
        if (xAxisShow && xAxisLineShow) {
          _yStart -= xAxisLineWidth / 2; // 更新_yStart数据
        }
      } else {
        _yStart = yZero;
      }

      chartData.axisData.xAxisNamePoint = {
        text: xAxisNameText,
        x: xEnd + xAxisNameGap,
        y: _yStart,
      };
    }
  }

  chartData.axisData.xStart = xStart;
  chartData.axisData.xEnd = xEnd;
  chartData.axisData.yStart = yStart;
  chartData.axisData.yEnd = yEnd;

  chartData.axisData.yIsSamePart = yIsSamePart;
  chartData.axisData.xIsSamePart = xIsSamePart;

  chartData.axisData.yZero = yZero;
  chartData.axisData.yPlusSpacing = yPlusSpacing;
  chartData.axisData.yMinusSpacing = yMinusSpacing;
  chartData.axisData.ySpacing = ySpacing;
  chartData.axisData.yEachSpacing = yEachSpacing;
  chartData.axisData.xZero = xZero;
  chartData.axisData.xPlusSpacing = xPlusSpacing;
  chartData.axisData.xMinusSpacing = xMinusSpacing;
  chartData.axisData.xSpacing = xSpacing;
  chartData.axisData.xEachSpacing = xEachSpacing;

  chartData.axisData.yMaxData = yMaxData;
  chartData.axisData.yMinData = yMinData;
  chartData.axisData.yDataRange = yDataRange;
  chartData.axisData.xMaxData = xMaxData;
  chartData.axisData.xMinData = xMinData;
  chartData.axisData.xDataRange = xDataRange;

  console.log('complete calAxisData', this.chartData.axisData);
}

function calAxisRadarData() {
  let { context, opts, legendData, chartData } = this;
  let { width, height, padding, radarAxis, categories } = opts;
  let { center, radius, splitNumber, axisName: radarAxisName } = radarAxis;
  let { show: radarAxisNameShow, textStyle: radarAxisNameTextStyle } = radarAxisName;
  let { fontSize: radarAxisNameFontSize, margin: radarAxisNameMargin } = radarAxisNameTextStyle;
  let [centerX, centerY] = center;

  chartData.radarAxis = {
    center: [],
    radius: 0,
    lineEndPosition: [],
    namePosition: [],
    axisNameStyle: radarAxisNameTextStyle,
  };

  if (typeof centerX == 'string') {
    centerX = width * percentToNum(centerX);
  }
  if (typeof centerY == 'string') {
    centerY = (height - legendData.legendHeight - padding[2]) * percentToNum(centerY);
  }
  if (typeof radius == 'string') {
    radius = ((height - legendData.legendHeight - padding[2]) * percentToNum(radius)) / 2;
  }

  chartData.radarAxis.center = [centerX, centerY];
  chartData.radarAxis.radius = radius;

  let spacingAangle = (2 * Math.PI) / categories.length;
  let start = Math.PI / 2; // 以90度为起点, 逆时针累加

  let arr = [];
  for (let i = 0; i < splitNumber; i++) {
    let scale = (splitNumber - i) / splitNumber;
    arr[i] = categories.reduce((arr, item, index) => {
      let endPoint = {
        x: radius * Math.cos(start + spacingAangle * index) * scale,
        y: radius * Math.sin(start + spacingAangle * index) * scale,
      };
      arr.push(convertCoordinateOrigin(endPoint, chartData.radarAxis.center));
      return arr
    }, []);
  }
  chartData.radarAxis.lineEndPosition = arr;

  chartData.radarAxis.namePosition = categories.reduce((arr, item, index) => {
    let point = {
      x: (radius + radarAxisNameFontSize / 2 + radarAxisNameMargin) * Math.cos(start + spacingAangle * index),
      y: (radius + radarAxisNameFontSize / 2 + radarAxisNameMargin) * Math.sin(start + spacingAangle * index),
    };
    let position = convertCoordinateOrigin(point, chartData.radarAxis.center);

    context.font = `${radarAxisNameFontSize}px`;

    arr.push({
      text: item,
      point,
      position,
    });
    return arr
  }, []);

  console.log('complete calAxisRadarData', this.chartData.radarAxis);
}

function calChartBarData() {
  let { opts, chartData, seriesMap } = this;
  let { xAxis, yAxis } = opts;
  let seriesBar = seriesMap['bar'];

  let {
    xStart,
    xEnd,
    yStart,
    yEnd,
    yZero,
    yPlusSpacing,
    yMinusSpacing,
    ySpacing,
    yEachSpacing,
    xZero,
    xPlusSpacing,
    xMinusSpacing,
    xSpacing,
    xEachSpacing,
    yMaxData,
    yMinData,
    yDataRange,
    xMaxData,
    xMinData,
    xDataRange,
    xAxisLabelPoint,
    yAxisLabelPoint,
  } = chartData.axisData;

  let autoWidth = 0;
  let autoWidthNumber = 0;
  let sumWidth = 0;

  let maxData = xAxis.type == 'value' ? xMaxData : yMaxData;
  let minData = xAxis.type == 'value' ? xMinData : yMinData;
  let dataRange = xAxis.type == 'value' ? xDataRange : yDataRange;
  let valueAxisPlusSpacing = xAxis.type == 'value' ? xPlusSpacing : yPlusSpacing;
  let valueAxisMinusSpacing = xAxis.type == 'value' ? xMinusSpacing : yMinusSpacing;
  let valueAxisSpacing = xAxis.type == 'value' ? xSpacing : ySpacing;
  let categoryAxisEachSpacing = xAxis.type == 'category' ? xEachSpacing : yEachSpacing;
  let categoryAxisData = xAxis.type == 'category' ? xAxis.data : yAxis.data;

  let allDataObject = {};
  seriesBar.forEach(seriesItem => {
    if (seriesItem.stack) {
      if (!allDataObject[seriesItem.stack]) {
        allDataObject[seriesItem.stack] = [];
      }

      allDataObject[seriesItem.stack].push(seriesItem);
    } else {
      if (!allDataObject[seriesItem.name]) {
        allDataObject[seriesItem.name] = [];
      }

      allDataObject[seriesItem.name].push(seriesItem);
    }
  });

  let chartBar = [];

  for (let i = 0, len = categoryAxisData.length; i < len; i++) {
    let chartBarArrItem = [];

    Object.keys(allDataObject).forEach(key => {
      chartBarArrItem.push(lodash_clonedeep(allDataObject[key]));
    });
    chartBar.push(chartBarArrItem);
  }

  chartBar.forEach((barItemArr, barItemArrIndex) => {
    barItemArr.forEach((barItem, barIndex) => {
      barItem.forEach((seriesItem, seriesIndex) => {
        let isShow = true;
        if (seriesItem.showIndex && seriesItem.showIndex.length) {
          isShow = seriesItem.showIndex.some(showIndex => {
            return showIndex == chartBarArrIndex
          });
        }
        seriesItem.show = isShow;
        seriesItem.data = seriesItem.data[barItemArrIndex];

        if (seriesIndex == 0) {
          let { barMaxWidth, barMinWidth, barWidth, barGap } = seriesItem;
          if (typeof barWidth == 'number') {
            if (barWidth > barMaxWidth) {
              seriesItem.barWidth = barMaxWidth;
            }
            if (barWidth < barMinWidth) {
              seriesItem.barWidth = barMinWidth;
            }

            if (barItemArrIndex == 0) {
              sumWidth += seriesItem.barWidth;
            }
          } else {
            if (barItemArrIndex == 0) {
              autoWidthNumber++;
            }
          }
        } else {
          seriesItem.barWidth = barItem[0].barWidth;
        }
      });

      if (barItemArrIndex == 0) {
        if (barIndex == 0) {
          sumWidth += 2 * barItem[0].barGap;
        } else {
          sumWidth += barItem[0].barGap;
        }
      }
    });
  });

  // 计算autoWidth
  if (sumWidth + autoWidthNumber < categoryAxisEachSpacing) {
    autoWidth = (categoryAxisEachSpacing - sumWidth) / autoWidthNumber;
  } else {
    autoWidth = 1;
  }

  // 修正barWidth, 计算sumWidth
  chartBar.forEach((barItemArr, barItemArrIndex) => {
    barItemArr.forEach((barItem, barIndex) => {
      barItem.forEach((seriesItem, seriesIndex) => {
        let { barMaxWidth, barWidth } = seriesItem;
        if (seriesIndex == 0 && barWidth == 'auto') {
          seriesItem.barWidth = autoWidth > barMaxWidth ? barMaxWidth : autoWidth;
        } else {
          seriesItem.barWidth = barItem[0].barWidth;
          seriesItem.barGap = barItem[0].barGap;
        }

        if (barItemArrIndex == 0 && seriesIndex == 0 && barWidth == 'auto') {
          sumWidth += seriesItem.barWidth;
        }
      });
    });
  });

  if (xAxis.type == 'category') {
    chartBar.forEach((barItemArr, barItemArrIndex) => {
      let x = xAxisLabelPoint[barItemArrIndex].x - sumWidth / 2;

      barItemArr.forEach((barItem, barIndex) => {
        x += barItem[0].barGap + barItem[0].barWidth / 2;

        let yPositive = 0;
        let yNagative = 0;

        if (maxData >= 0 && minData >= 0) {
          yPositive = yStart;
        } else if (maxData <= 0 && minData <= 0) {
          yNagative = yEnd;
        } else {
          yPositive = yZero;
          yNagative = yZero;
        }

        barItem.forEach((seriesItem, seriesIndex) => {
          seriesItem.x = x;

          // 记录y坐标点和柱体高度
          let barHeight = 0;

          if (maxData >= 0 && minData >= 0) {
            if (seriesItem.data == 0) {
              seriesItem.y = yStart;
              barHeight = 0;
            } else {
              seriesItem.y = yPositive;
              barHeight = (valueAxisSpacing * (seriesItem.data - minData)) / dataRange;
              yPositive -= barHeight;
            }
          } else if (maxData <= 0 && minData <= 0) {
            if (seriesItem.data == 0) {
              seriesItem.y = yEnd;
              barHeight = 0;
            } else {
              seriesItem.y = yNagative;
              barHeight = (valueAxisSpacing * (Math.abs(seriesItem.data) - Math.abs(maxData))) / dataRange;
              yNagative += barHeight;
            }
          } else {
            if (seriesItem.data > 0) {
              seriesItem.y = yPositive;
              barHeight = (valueAxisPlusSpacing * seriesItem.data) / maxData;
              yPositive -= barHeight;
            } else if (seriesItem.data < 0) {
              seriesItem.y = yNagative;
              barHeight = (valueAxisMinusSpacing * Math.abs(seriesItem.data)) / Math.abs(minData);
              yNagative += barHeight;
            } else {
              seriesItem.y = yZero;
              barHeight = 0;
            }
          }

          seriesItem.barHeight = barHeight;
        });

        x += barItem[0].barWidth / 2;
      });
    });
  } else {
    chartBar.forEach((barItemArr, barItemArrIndex) => {
      let y = yAxisLabelPoint[barItemArrIndex].y + sumWidth / 2;

      barItemArr.forEach((barItem, barIndex) => {
        y -= barItem[0].barGap + barItem[0].barWidth / 2;

        let xPositive = 0;
        let xNagative = 0;

        if (maxData >= 0 && minData >= 0) {
          xPositive = xStart;
        } else if (maxData <= 0 && minData <= 0) {
          xNagative = xEnd;
        } else {
          xPositive = xZero;
          xNagative = xZero;
        }

        barItem.forEach((seriesItem, seriesIndex) => {
          seriesItem.y = y;

          // 记录y坐标点和柱体高度
          let barHeight = 0;

          if (maxData >= 0 && minData >= 0) {
            seriesItem.x = xPositive;
            barHeight = (valueAxisSpacing * (seriesItem.data - minData)) / dataRange;
            xPositive += barHeight;
          } else if (maxData <= 0 && minData <= 0) {
            seriesItem.x = xNagative;
            barHeight = (valueAxisSpacing * (Math.abs(seriesItem.data) - Math.abs(maxData))) / dataRange;
            xNagative -= barHeight;
          } else {
            if (seriesItem.data > 0) {
              seriesItem.x = xPositive;
              barHeight = (valueAxisPlusSpacing * seriesItem.data) / maxData;
              xPositive += barHeight;
            } else {
              seriesItem.x = xNagative;
              barHeight = (valueAxisMinusSpacing * Math.abs(seriesItem.data)) / Math.abs(minData);
              xNagative -= barHeight;
            }
          }

          seriesItem.barHeight = barHeight;
        });

        y -= barItem[0].barWidth / 2;
      });
    });
  }

  chartData.chartBar = chartBar;

  console.log('complete calChartBarData', chartData.chartBar);
}

function calChartLineData() {
  let { opts, chartData, seriesMap } = this;
  let { xAxis } = opts;
  let seriesLine = lodash_clonedeep(seriesMap['line']);

  let {
    xStart,
    xEnd,
    yStart,
    yEnd,
    yZero,
    yPlusSpacing,
    yMinusSpacing,
    ySpacing,
    xZero,
    xPlusSpacing,
    xMinusSpacing,
    xSpacing,
    yMaxData,
    yMinData,
    yDataRange,
    xMaxData,
    xMinData,
    xDataRange,
    xAxisLabelPoint,
    yAxisLabelPoint,
  } = chartData.axisData;

  let maxData = xAxis.type == 'value' ? xMaxData : yMaxData;
  let minData = xAxis.type == 'value' ? xMinData : yMinData;
  let dataRange = xAxis.type == 'value' ? xDataRange : yDataRange;
  let valueAxisPlusSpacing = xAxis.type == 'value' ? xPlusSpacing : yPlusSpacing;
  let valueAxisMinusSpacing = xAxis.type == 'value' ? xMinusSpacing : yMinusSpacing;
  let valueAxisSpacing = xAxis.type == 'value' ? xSpacing : ySpacing;

  let chartLine = [];

  if (xAxis.type == 'category') {
    chartLine = seriesLine.reduce((chartLineArr, seriesItem) => {
      seriesItem.data = seriesItem.data.reduce((dataArr, dataItem, dataIndex) => {
        let x, y, height;
        if (typeof dataItem == 'number') {
          x = xAxisLabelPoint[dataIndex].x;

          dataItem = dataItem > maxData ? maxData : dataItem;
          dataItem = dataItem < minData ? minData : dataItem;

          if (maxData >= 0 && minData >= 0) {
            height = (valueAxisSpacing * (dataItem - minData)) / dataRange;
            y = yStart - height;
          } else if (maxData <= 0 && minData <= 0) {
            height = (valueAxisSpacing * (Math.abs(dataItem) - Math.abs(maxData))) / dataRange;
            y = yEnd + height;
          } else {
            if (dataItem > 0) {
              height = (valueAxisPlusSpacing * dataItem) / maxData;
              y = yZero - height;
            } else {
              height = (valueAxisMinusSpacing * Math.abs(dataItem)) / Math.abs(minData);
              y = yZero + height;
            }
          }
        }

        dataArr.push({
          x,
          y,
          data: dataItem,
          height,
        });
        return dataArr
      }, []);

      chartLineArr.push(seriesItem);

      return chartLineArr
    }, []);
  } else {
    chartLine = seriesLine.reduce((chartLineArr, seriesItem) => {
      seriesItem.data = seriesItem.data.reduce((dataArr, dataItem, dataIndex) => {
        let x, y, height;

        if (typeof dataItem == 'number') {
          y = yAxisLabelPoint[dataIndex].y;

          dataItem = dataItem > maxData ? maxData : dataItem;
          dataItem = dataItem < minData ? minData : dataItem;

          if (maxData >= 0 && minData >= 0) {
            height = (valueAxisSpacing * (dataItem - minData)) / dataRange;
            x = xStart + height;
          } else if (maxData <= 0 && minData <= 0) {
            height = (valueAxisSpacing * (Math.abs(dataItem) - Math.abs(maxData))) / dataRange;
            x = xEnd - height;
          } else {
            if (dataItem > 0) {
              height = (valueAxisPlusSpacing * dataItem) / maxData;
              x = xZero + height;
            } else {
              height = (valueAxisMinusSpacing * Math.abs(dataItem)) / Math.abs(minData);
              x = xZero - height;
            }
          }
        }

        dataArr.push({
          x,
          y,
          data: dataItem,
          height,
        });
        return dataArr
      }, []);

      chartLineArr.push(seriesItem);

      return chartLineArr
    }, []);
  }

  chartData.chartLine = chartLine;

  console.log('complete calChartLineData', chartData.chartLine);
}

function calChartPieData() {
  let { opts, legendData, seriesMap } = this;
  let { width, height, padding } = opts;
  let chartPie = lodash_clonedeep(seriesMap['pie'][0]);
  let { data, center, radius } = chartPie;
  let [centerX, centerY] = center;
  let [radius1, radius2] = radius;

  let valueSum = data.reduce((sum, dataItem) => {
    sum += dataItem.value === null ? 0 : dataItem.value;
    return sum
  }, 0);

  if (typeof centerX == 'string') {
    centerX = width * percentToNum(centerX);
  }
  if (typeof centerY == 'string') {
    centerY = (height - legendData.legendHeight - padding[2]) * percentToNum(centerY);
  }
  if (typeof radius1 == 'string') {
    radius1 = ((height - legendData.legendHeight - padding[2]) * percentToNum(radius1)) / 2;
  }
  if (typeof radius2 == 'string') {
    radius2 = ((height - legendData.legendHeight - padding[2]) * percentToNum(radius2)) / 2;
  }

  let sortData = data.concat([]).sort((a, b) => {
    return b.value - a.value
  });

  chartPie.valueSum = valueSum;
  chartPie.center = [centerX, centerY];
  chartPie.radius = [radius1, radius2];
  chartPie.maxData = sortData[0].value;
  chartPie.minData = sortData[sortData.length - 1].value;

  this.chartData.chartPie = chartPie;

  console.log('complete calChartPieData', this.chartData.chartPie);
}

function calChartRadarData() {
  let { opts, chartData, seriesMap } = this;
  let { radarAxis, categories, series } = opts;
  let seriesRadar = lodash_clonedeep(seriesMap['radar']);

  let { max } = radarAxis;
  let { radius } = chartData.radarAxis;

  let maxData = 0;
  series.forEach(seriesItem => {
    maxData = Math.max(maxData, ...seriesItem.data);
  });
  maxData = max == 'auto' ? maxData : max;

  let spacingRadian = (2 * Math.PI) / categories.length;
  let start = Math.PI / 2; // 以90度为起点, 逆时针累加

  seriesRadar.forEach(radarItem => {
    radarItem.dataPosition = radarItem.data.reduce((arr, dataItem, dataIndex) => {
      let scale = dataItem / maxData;
      let point = {
        x: radius * Math.cos(start + spacingRadian * dataIndex) * scale,
        y: radius * Math.sin(start + spacingRadian * dataIndex) * scale,
      };
      arr.push({
        data: dataItem,
        point,
        spacingRadian,
        _start_: spacingRadian * dataIndex,
      });

      return arr
    }, []);
  });

  chartData.chartRadar = seriesRadar;

  console.log('complete calChartRadarData', this.chartData.chartRadar);
}

function calChartScatterData() {
  let { opts, chartData, seriesMap } = this;
  let {
    xStart,
    xEnd,
    yStart,
    yEnd,
    yZero,
    yPlusSpacing,
    yMinusSpacing,
    ySpacing,
    xZero,
    xPlusSpacing,
    xMinusSpacing,
    xSpacing,
    yMaxData,
    yMinData,
    yDataRange,
    xMaxData,
    xMinData,
    xDataRange,
  } = chartData.axisData;

  let seriesScatter = lodash_clonedeep(seriesMap['scatter']);

  chartData.chartScatter = seriesScatter.map(seriesItem => {
    let { data, radius, itemStyle } = seriesItem;
    let { color: scatterItemColor } = itemStyle;
    let radiusMax, radiusMin, radiusRange;
    let zMax, zMin, zRange;
    let HSLColorMax, HSLColorMin, HSLColorRange;

    if (typeof radius !== 'number') {
      radiusMax = radius[1];
      radiusMin = radius[0];
      radiusRange = radiusMax - radiusMin;

      let sortData = data.concat([]).sort((a, b) => {
        return a.z - b.z
      });
      zMax = sortData[sortData.length - 1].z;
      zMin = sortData[0].z ? sortData[0].z : 0;
      zRange = zMax - zMin;
    }

    if (typeof scatterItemColor !== 'string') {
      let [HEXColorMin, HEXColorMax] = scatterItemColor;
      HSLColorMax = HEX2HSL(HEXColorMax);
      HSLColorMin = HEX2HSL(HEXColorMin);
      HSLColorRange = [HSLColorMax[0] - HSLColorMin[0], HSLColorMax[1] - HSLColorMin[1], HSLColorMax[2] - HSLColorMin[2]];

      seriesItem.label.color = '#000000';
    }

    seriesItem.data = data.concat([]).map(dataItem => {
      let { x, y, z } = dataItem;
      let positionX, positionY;

      if (yMaxData >= 0 && yMaxData >= 0) {
        positionY = yStart - (ySpacing * (y - yMinData)) / yDataRange;
      } else if (yMinData <= 0 && yMinData <= 0) {
        positionY = yEnd + (ySpacing * (Math.abs(y) - Math.abs(yMaxData))) / yDataRange;
      } else {
        if (y > 0) {
          positionY = yZero - (yPlusSpacing * y) / yMaxData;
        } else {
          positionY = yZero + (yMinusSpacing * Math.abs(y)) / Math.abs(yMinData);
        }
      }

      if (xMaxData >= 0 && xMaxData >= 0) {
        positionX = xStart + (xSpacing * (x - xMinData)) / xDataRange;
      } else if (xMinData <= 0 && xMinData <= 0) {
        positionX = xEnd - (xSpacing * (Math.abs(x) - Math.abs(xMaxData))) / xDataRange;
      } else {
        if (x > 0) {
          positionX = xZero + (xPlusSpacing * x) / xMaxData;
        } else {
          positionX = xZero - (xMinusSpacing * Math.abs(x)) / Math.abs(xMinData);
        }
      }
      dataItem.positionX = positionX;
      dataItem.positionY = positionY;

      if (typeof radius !== 'number') {
        dataItem.z = z ? z : 0;
        let scale = (z - zMin) / zRange;
        dataItem.radius = radiusMin + radiusRange * scale;
      } else {
        dataItem.radius = radius;
      }

      if (typeof scatterItemColor !== 'string') {
        dataItem.z = z ? z : 0;
        let scale = (z - zMin) / zRange;
        let HSLColor = [HSLColorMin[0] + HSLColorRange[0] * scale, HSLColorMin[1] + HSLColorRange[1] * scale, HSLColorMin[2] + HSLColorRange[2] * scale];

        dataItem.color = HSL2HEX(HSLColor);
      } else {
        dataItem.color = scatterItemColor;
      }

      return dataItem
    });

    return seriesItem
  });

  console.log('complete calChartScatterData', this.chartData.chartScatter);
}

function calChartPieData$1() {
  let { opts, legendData, chartData, seriesMap } = this;
  let { width, height, series, padding } = opts;

  let chartFunnel = seriesMap['funnel'][0];
  let { data, width: funnelWidth, height: funnelHeight, top, left, right, bottom, max, min, gap, sort, shape, funnelAlign, label, itemStyle } = chartFunnel;
  let xStart = padding[3];
  let xEnd = width - padding[1];
  let yStart = padding[0];
  let yEnd = height - padding[2] - legendData.legendHeight;
  let containerWidth = xEnd - xStart;
  let containerHeight = yEnd - yStart;

  max = max > 100 ? 100 : max;
  min = min < 0 ? 0 : min;

  xStart = left == 'auto' ? xStart : xStart + containerWidth * percentToNum(left);
  xEnd = right == 'auto' ? xEnd : xEnd - containerWidth * percentToNum(right);
  yStart = top == 'auto' ? yStart : yStart + containerHeight * percentToNum(top);
  yEnd = bottom == 'auto' ? yEnd : yEnd - containerHeight * percentToNum(bottom);
  containerWidth = funnelWidth == 'auto' ? xEnd - xStart : containerWidth * percentToNum(funnelWidth);
  containerHeight = funnelHeight == 'auto' ? yEnd - yStart : containerHeight * percentToNum(funnelHeight);

  let funnelItemHeight = (containerHeight - (data.length - 1) * gap) / data.length;

  data.forEach(dataItem => {
    dataItem.value = dataItem.value > max ? max : dataItem.value;
    dataItem.value = dataItem.value < min ? min : dataItem.value;

    dataItem.width = containerWidth * (dataItem.value / max);
    dataItem.height = funnelItemHeight;
  });

  let pointX, pointY;
  if (funnelAlign == 'left') {
    pointX = xStart;
    pointY = yStart;
  } else if (funnelAlign == 'right') {
    pointX = xEnd;
    pointY = yStart;
  } else {
    if (sort == 'ascending') {
      pointX = xStart + data[data.length - 1].width / 2 - data[0].width / 2;
    } else {
      pointX = xStart;
    }
    pointY = yStart;
  }

  data.forEach((dataItem, dataIndex) => {
    let point = [];

    if (funnelAlign == 'left') {
      if (sort == 'descending') {
        if (dataIndex + 1 == data.length) {
          if (shape == 'funnel') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          } else if (shape == 'pyramid') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY });
            point.push({ x: pointX, y: pointY + dataItem.height });
          }
        } else {
          point.push({ x: pointX, y: pointY });
          point.push({ x: pointX + dataItem.width, y: pointY });
          point.push({ x: pointX + data[dataIndex + 1].width, y: pointY + dataItem.height });
          point.push({ x: pointX, y: pointY + dataItem.height });
        }
      } else if (sort == 'ascending') {
        if (dataIndex == 0) {
          if (shape == 'funnel') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          } else if (shape == 'pyramid') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          }
        } else {
          point.push({ x: pointX, y: pointY });
          point.push({ x: pointX + data[dataIndex - 1].width, y: pointY });
          point.push({ x: pointX + dataItem.width, y: pointY + dataItem.height });
          point.push({ x: pointX, y: pointY + dataItem.height });
        }
      }
    } else if (funnelAlign == 'right') {
      if (sort == 'descending') {
        if (dataIndex + 1 == data.length) {
          if (shape == 'funnel') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX - dataItem.width, y: pointY });
            point.push({ x: pointX - dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          } else if (shape == 'pyramid') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX - dataItem.width, y: pointY });
            point.push({ x: pointX, y: pointY + dataItem.height });
          }
        } else {
          point.push({ x: pointX, y: pointY });
          point.push({ x: pointX - dataItem.width, y: pointY });
          point.push({ x: pointX - data[dataIndex + 1].width, y: pointY + dataItem.height });
          point.push({ x: pointX, y: pointY + dataItem.height });
        }
      } else if (sort == 'ascending') {
        if (dataIndex == 0) {
          if (shape == 'funnel') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX - dataItem.width, y: pointY });
            point.push({ x: pointX - dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          } else if (shape == 'pyramid') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX - dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          }
        } else {
          point.push({ x: pointX, y: pointY });
          point.push({ x: pointX - data[dataIndex - 1].width, y: pointY });
          point.push({ x: pointX - dataItem.width, y: pointY + dataItem.height });
          point.push({ x: pointX, y: pointY + dataItem.height });
        }
      }
    } else {
      if (sort == 'descending') {
        if (dataIndex + 1 == data.length) {
          if (shape == 'funnel') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          } else if (shape == 'pyramid') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY });
            point.push({ x: pointX + dataItem.width / 2, y: pointY + dataItem.height });
          }
        } else {
          point.push({ x: pointX, y: pointY });
          point.push({ x: pointX + dataItem.width, y: pointY });
          point.push({ x: pointX + dataItem.width / 2 + data[dataIndex + 1].width / 2, y: pointY + dataItem.height });
          point.push({ x: pointX + dataItem.width / 2 - data[dataIndex + 1].width / 2, y: pointY + dataItem.height });
        }
      } else if (sort == 'ascending') {
        if (dataIndex == 0) {
          if (shape == 'funnel') {
            point.push({ x: pointX, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          } else if (shape == 'pyramid') {
            point.push({ x: pointX + dataItem.width / 2, y: pointY });
            point.push({ x: pointX + dataItem.width, y: pointY + dataItem.height });
            point.push({ x: pointX, y: pointY + dataItem.height });
          }
        } else {
          point.push({ x: pointX + dataItem.width / 2 - data[dataIndex - 1].width / 2, y: pointY });
          point.push({ x: pointX + dataItem.width / 2 + data[dataIndex - 1].width / 2, y: pointY });
          point.push({ x: pointX + dataItem.width, y: pointY + dataItem.height });
          point.push({ x: pointX, y: pointY + dataItem.height });
        }
      }
    }

    dataItem.point = point;

    let medianWidth;
    if (sort == 'descending') {
      if (dataIndex + 1 == data.length) {
        medianWidth = shape == 'funnel' ? dataItem.width : dataItem.width / 2;
      } else {
        medianWidth = (dataItem.width + data[dataIndex + 1].width) / 2;
      }
    } else {
      if (dataIndex == 0) {
        medianWidth = shape == 'funnel' ? dataItem.width : dataItem.width / 2;
      } else {
        medianWidth = (dataItem.width + data[dataIndex - 1].width) / 2;
      }
    }

    if (label.position == 'inside') {
      if (funnelAlign == 'left') {
        dataItem.textPoint = { x: pointX + medianWidth / 2, y: pointY + dataItem.height / 2 };
      } else if (funnelAlign == 'right') {
        dataItem.textPoint = { x: pointX - medianWidth / 2, y: pointY + dataItem.height / 2 };
      } else {
        dataItem.textPoint = { x: pointX + dataItem.width / 2, y: pointY + dataItem.height / 2 };
      }
    } else {
      if (funnelAlign == 'left') {
        dataItem.textPoint = { x: pointX + medianWidth + label.margin, y: pointY + dataItem.height / 2 };
      } else if (funnelAlign == 'right') {
        dataItem.textPoint = { x: pointX - medianWidth - label.margin, y: pointY + dataItem.height / 2 };
      } else {
        dataItem.textPoint = { x: pointX + dataItem.width / 2 + medianWidth / 2 + label.margin, y: pointY + dataItem.height / 2 };
      }
    }

    if (dataIndex + 1 !== data.length) {
      if (funnelAlign == 'center') {
        pointX = pointX + dataItem.width / 2 - data[dataIndex + 1].width / 2;
        pointY = pointY + dataItem.height + gap;
      } else {
        pointY = pointY + dataItem.height + gap;
      }
    }
  });

  chartData.chartFunnel = chartFunnel;

  console.log('complete calChartFunnelData', this.chartData.chartFunnel);
}

function calChartCandlestick() {
  let { opts, chartData, legendData } = this;
  let { height: chartHeight, padding, series } = opts;
  let candlestickSeries = series.filter(seriesItem => {
    return seriesItem.type == 'candlestick' || seriesItem.type == 'k'
  });

  if (candlestickSeries.length == 0) return

  let {
    name,
    type,
    data,
    barMaxWidth,
    barMinWidth,
    barWidth,
    itemStyle,
    highLine: seriesHighLine,
    lowLine: seriesLowLine,
    bar: seriesBar,
  } = candlestickSeries[0];
  let { color, bordercolor, opacity, color0, bordercolor0, opacity0, borderWidth } = itemStyle;
  let { show: highLineShow, lineStyle: highLineStyle } = seriesHighLine;
  let { show: lowLineShow, lineStyle: lowLineStyle } = seriesLowLine;
  let { show: barShow, height: barHeight, margin: barMargin, data: barData, lineStyle: barLineStyle } = seriesBar;
  let {
    xStart,
    xEnd,
    yStart,
    yEnd,
    yZero,
    yPlusSpacing,
    yMinusSpacing,
    ySpacing,
    xZero,
    xPlusSpacing,
    xMinusSpacing,
    xEachSpacing,
    xSpacing,
    yMaxData,
    yMinData,
    yDataRange,
    xMaxData,
    xMinData,
    xDataRange,
    xAxisLabelPoint,
    yAxisLabelPoint,
  } = chartData.axisData;

  let candlestickRect, candlestickHighLine, candlestickLowLine, candlestickBar;
  let highData = 0;
  let lowData = Infinity;

  if (barWidth == 'auto') {
    barWidth = xEachSpacing > barMaxWidth ? barMaxWidth : xEachSpacing;
    barWidth = barWidth > 3 ? barWidth - 2 : barWidth;
  }

  candlestickRect = data.reduce((chartCandlestick, dataItem, dataIndex) => {
    const [
      start, // 开盘价
      end, // 收盘价
      low, // 最低价
      high, // 最高价
      volumn, // 交易量
    ] = dataItem;
    highData = Math.max(end, highData);
    lowData = Math.min(end, lowData);

    let candlestickItem = {};

    candlestickItem.start = start;
    candlestickItem.end = end;
    candlestickItem.low = low;
    candlestickItem.high = high;
    candlestickItem.volumn = volumn;
    candlestickItem.color = start > end ? color0 : color;
    candlestickItem.bordercolor = start > end ? bordercolor0 : bordercolor;
    candlestickItem.opacity = start > end ? opacity : opacity0;
    candlestickItem.borderWidth = borderWidth;

    candlestickItem.upLinePoint = {
      startX: xAxisLabelPoint[dataIndex].x,
      startY: yStart - (ySpacing * (low - yMinData)) / yDataRange,
      endX: xAxisLabelPoint[dataIndex].x,
      endY: yStart - (ySpacing * (Math.max(start, end) - yMinData)) / yDataRange,
    };
    candlestickItem.downLinePoint = {
      startX: xAxisLabelPoint[dataIndex].x,
      startY: yStart - (ySpacing * (high - yMinData)) / yDataRange,
      endX: xAxisLabelPoint[dataIndex].x,
      endY: yStart - (ySpacing * (Math.min(start, end) - yMinData)) / yDataRange,
    };
    candlestickItem.rectPoint = {
      x: Math.floor(xAxisLabelPoint[dataIndex].x - barWidth / 2),
      y: yStart - (ySpacing * (Math.max(start, end) - yMinData)) / yDataRange,
      width: barWidth,
      height: (ySpacing * Math.abs(start - end)) / yDataRange,
    };
    chartCandlestick.push(candlestickItem);
    return chartCandlestick
  }, []);

  if (highLineShow) {
    candlestickHighLine = {
      data: highData,
      startX: xStart,
      startY: yStart - (ySpacing * (highData - yMinData)) / yDataRange,
      endX: xEnd,
      endY: yStart - (ySpacing * (highData - yMinData)) / yDataRange,
    };
  }

  if (lowLineShow) {
    candlestickLowLine = {
      data: lowData,
      startX: xStart,
      startY: yStart - (ySpacing * (lowData - yMinData)) / yDataRange,
      endX: xEnd,
      endY: yStart - (ySpacing * (lowData - yMinData)) / yDataRange,
    };
  }

  if (barShow) {
    let maxData = Math.max(...barData);
    let minData = Math.min(...barData);
    let range = maxData - minData;

    candlestickBar = {
      data: [],
      lineStartX: xStart,
      lineStartY: null,
      lineEndX: xEnd,
      lineEndY: null,
    };
    candlestickBar.data = candlestickRect.reduce((arr, item, index) => {
      let { color, rectPoint } = item;
      let { x, width } = rectPoint;
      let y = chartHeight - padding[2] - legendData.legendHeight - barLineStyle.lineWidth / 2;
      let height = barHeight * 0.2 + (barHeight * 0.8 * (barData[index] - minData)) / range;

      arr.push({
        color,
        x,
        y,
        width,
        height,
      });

      candlestickBar.lineStartY = y;
      candlestickBar.lineEndY = y;

      return arr
    }, []);
  }

  this.chartData.chartCandlestick = {
    type,
    name,
    rect: candlestickRect,
    highLine: candlestickHighLine,
    lowhLine: candlestickLowLine,
    bar: candlestickBar,
  };

  console.log('complete calChartCandlestick', this.chartData.chartCandlestick);
}

function calChartHeatmapData() {
  let { chartData, seriesMap } = this;
  let { xStart, yStart, xEachSpacing, yEachSpacing } = chartData.axisData;

  let seriesHeatmap = lodash_clonedeep(seriesMap['heatmap']);

  chartData.chartHeatmap = seriesHeatmap.map(seriesItem => {
    let { data, itemStyle } = seriesItem;
    let { color, useSplit } = itemStyle;
    let zMax, zMin, zRange;
    let HSLColorMax, HSLColorMin, HSLColorRange;

    let sortData = data.concat([]).sort((a, b) => {
      return a[2] - b[2]
    });
    zMax = sortData[sortData.length - 1][2];
    zMin = sortData[0][2];
    zRange = zMax - zMin;

    let [HEXColorMin, HEXColorMax] = color;
    HSLColorMax = HEX2HSL(HEXColorMax);
    HSLColorMin = HEX2HSL(HEXColorMin);
    HSLColorRange = [HSLColorMax[0] - HSLColorMin[0], HSLColorMax[1] - HSLColorMin[1], HSLColorMax[2] - HSLColorMin[2]];

    seriesItem.data = data.map(dataItem => {
      let [x, y, z] = dataItem;
      let positionX, positionY;

      positionX = xStart + x * xEachSpacing;
      positionY = yStart - (y + 1) * yEachSpacing;
      dataItem.positionX = positionX;
      dataItem.positionY = positionY;

      z = z ? z : 0;
      let scale = (z - zMin) / zRange;
      let HSLColor = [HSLColorMin[0] + HSLColorRange[0] * scale, HSLColorMin[1] + HSLColorRange[1] * scale, HSLColorMin[2] + HSLColorRange[2] * scale];
      dataItem.color = HSL2HEX(HSLColor);
      dataItem.useSplit = useSplit;
      return dataItem
    });

    return seriesItem
  });
  console.log('complete calChartHeatmapData', this.chartData.chartHeatmap);
}

function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

function cluster() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
}

function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

function node_count() {
  return this.eachAfter(count);
}

function node_each(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
}

function node_eachBefore(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
}

function node_eachAfter(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
}

function node_sum(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
}

function node_sort(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

function node_path(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

function node_ancestors() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

function node_descendants() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
}

function node_leaves() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

function node_links() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
}

function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: node_count,
  each: node_each,
  eachAfter: node_eachAfter,
  eachBefore: node_eachBefore,
  sum: node_sum,
  sort: node_sort,
  path: node_path,
  ancestors: node_ancestors,
  descendants: node_descendants,
  leaves: node_leaves,
  links: node_links,
  copy: node_copy
};

var slice = Array.prototype.slice;

function shuffle(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function enclose(circles) {
  var i = 0, n = (circles = shuffle(slice.call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
}

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}

function place(b, a, c) {
  var dx = b.x - a.x, x, a2,
      dy = b.y - a.y, y, b2,
      d2 = dx * dx + dy * dy;
  if (d2) {
    a2 = a.r + c.r, a2 *= a2;
    b2 = b.r + c.r, b2 *= b2;
    if (a2 > b2) {
      x = (d2 + b2 - a2) / (2 * d2);
      y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
      c.x = b.x - x * dx - y * dy;
      c.y = b.y - x * dy + y * dx;
    } else {
      x = (d2 + a2 - b2) / (2 * d2);
      y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
      c.x = a.x + x * dx - y * dy;
      c.y = a.y + x * dy + y * dx;
    }
  } else {
    c.x = a.x + c.r;
    c.y = a.y;
  }
}

function intersects(a, b) {
  var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node$1(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node$1(a), b = new Node$1(b), c = new Node$1(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node$1(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = enclose(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

function siblings(circles) {
  packEnclose(circles);
  return circles;
}

function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}

function constantZero() {
  return 0;
}

function constant(x) {
  return function() {
    return x;
  };
}

function defaultRadius(d) {
  return Math.sqrt(d.value);
}

function index() {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = constantZero;

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius))
          .eachAfter(packChildren(padding, 0.5))
          .eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius))
          .eachAfter(packChildren(constantZero, 1))
          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function(x) {
    return arguments.length ? (radius = optional(x), pack) : radius;
  };

  pack.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function(x) {
    return arguments.length ? (padding = typeof x === "function" ? x : constant(+x), pack) : padding;
  };

  return pack;
}

function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function(node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = packEnclose(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}

function roundNode(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

function treemapDice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
}

function partition() {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 =
    root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(roundNode);
    return root;
  }

  function positionNode(dy, n) {
    return function(node) {
      if (node.children) {
        treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function(x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
}

var keyPrefix = "$", // Protect against keys like “__proto__”.
    preroot = {depth: -1},
    ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

function stratify() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new Node(d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(computeHeight);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = required(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = required(x), stratify) : parentId;
  };

  return stratify;
}

function defaultSeparation$1(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(Node.prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
function tree() {
  var separation = defaultSeparation$1,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
}

function treemapSlice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
}

var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

var squarify = (function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi);

function index$1() {
  var tile = squarify,
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = constantZero,
      paddingTop = constantZero,
      paddingRight = constantZero,
      paddingBottom = constantZero,
      paddingLeft = constantZero;

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(roundNode);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = required(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : constant(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : constant(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : constant(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant(+x), treemap) : paddingLeft;
  };

  return treemap;
}

function binary(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i, n = nodes.length,
      sum, sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = (value / 2) + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if ((x1 - x0) > (y1 - y0)) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
}

function sliceDice(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
}

var resquarify = (function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) treemapDice(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else treemapSlice(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(phi);



var d3Hierarchy = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cluster: cluster,
  hierarchy: hierarchy,
  pack: index,
  packSiblings: siblings,
  packEnclose: enclose,
  partition: partition,
  stratify: stratify,
  tree: tree,
  treemap: index$1,
  treemapBinary: binary,
  treemapDice: treemapDice,
  treemapSlice: treemapSlice,
  treemapSliceDice: sliceDice,
  treemapSquarify: squarify,
  treemapResquarify: resquarify
});

function calChartTreemapData() {
  let { opts, legendData, chartData, seriesMap } = this;
  let { width, height, padding } = opts;
  let chartTreemap = seriesMap['treemap'][0];

  chartTreemap.tile =
    chartTreemap.tile == 'treemapBinary' || 'treemapDice' || 'treemapResquarify' || 'treemapSlice' || 'treemapSliceDice' || 'treemapSquarify'
      ? chartTreemap.tile
      : 'treemapSquarify';

  let hierarchydata = hierarchy(chartTreemap, function (d) {
      return d.data
    })
    .sum(function (d) {
      return d.value
    });
  let treemapGen = index$1()
    .tile(d3Hierarchy[chartTreemap.tile])
    .size([width, height])
    .paddingTop(padding[0])
    .paddingRight(padding[1])
    .paddingBottom(padding[2] + legendData.legendHeight)
    .paddingLeft(padding[3]);
  let treemapData = treemapGen(hierarchydata);

  chartData.chartTreemap = treemapData;

  console.log('complete calChartTreemapData', chartData.chartTreemap);
}

// Word cloud layout by Jason Davies, https://www.jasondavies.com/wordcloud/
// Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf

const cloudRadians = Math.PI / 180;
// cw = (1 << 11) >> 5, // wt
// ch = 1 << 11; // wt
let cw, ch;

function cloudText(d) {
  return d.text
}

function cloudFont() {
  return 'Serif'
}

function cloudFontNormal() {
  return 'normal'
}

function cloudFontSize(d) {
  return d.value
}

function cloudRotate() {
  return ~~(Math.random() * 2) * 90
}

function cloudPadding() {
  return 1
}

// Fetches a monochrome sprite bitmap for the specified text.
// Load in batches for speed.
function cloudSprite(contextAndRatio, d, data, di) {
  if (d.sprite) return
  const c = contextAndRatio.context,
    ratio = contextAndRatio.ratio;
  c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
  let x = 0,
    y = 0,
    maxh = 0;
  const n = data.length;
  --di;
  while (++di < n) {
    d = data[di];
    c.save();
    c.fillStyle = c.strokeStyle = '#ff0000';
    c.textAlign = 'center';
    c.font = `${d.style} ${d.weight} ${~~((d.size + 1) / ratio)}px ${d.font}`;
    let w = c.measureText(d.text + 'm').width * ratio,
      h = d.size << 1;
    if (d.rotate) {
      const sr = Math.sin(d.rotate * cloudRadians),
        cr = Math.cos(d.rotate * cloudRadians),
        wcr = w * cr,
        wsr = w * sr,
        hcr = h * cr,
        hsr = h * sr;
      w = ((Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 0x1f) >> 5) << 5;
      h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr));
    } else {
      w = ((w + 0x1f) >> 5) << 5;
    }
    if (h > maxh) maxh = h;
    if (x + w >= cw << 5) {
      x = 0;
      y += maxh;
      maxh = 0;
    }
    if (y + h >= ch) break
    c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
    if (d.rotate) c.rotate(d.rotate * cloudRadians);
    c.fillText(d.text, 0, 0);
    if (d.padding) {
      c.lineWidth = 2 * d.padding;
      c.strokeText(d.text, 0, 0);
    }

    c.restore();
    d.width = w;
    d.height = h;
    d.xoff = x;
    d.yoff = y;
    d.x1 = w >> 1;
    d.y1 = h >> 1;
    d.x0 = -d.x1;
    d.y0 = -d.y1;
    d.hasText = true;
    x += w;
  }
  const pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data,
    sprite = [];
  while (--di >= 0) {
    d = data[di];
    if (!d.hasText) continue
    const w = d.width,
      w32 = w >> 5;
    let h = d.y1 - d.y0;
    // Zero the buffer
    for (let i = 0; i < h * w32; i++) sprite[i] = 0;
    x = d.xoff;
    if (x == null) return
    y = d.yoff;
    let seen = 0,
      seenRow = -1;
    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        let k = w32 * j + (i >> 5),
          m = pixels[((y + j) * (cw << 5) + (x + i)) << 2] ? 1 << (31 - (i % 32)) : 0;
        sprite[k] |= m;
        seen |= m;
      }
      if (seen) seenRow = j;
      else {
        d.y0++;
        h--;
        j--;
        y++;
      }
    }
    d.y1 = d.y0 + seenRow;
    d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);
  }
}

// Use mask-based collision detection.
function cloudCollide(tag, board, sw) {
  sw >>= 5;
  const sprite = tag.sprite,
    w = tag.width >> 5,
    lx = tag.x - (w << 4),
    sx = lx & 0x7f,
    msx = 32 - sx,
    h = tag.y1 - tag.y0;
  let x = (tag.y + tag.y0) * sw + (lx >> 5),
    last;
  for (let j = 0; j < h; j++) {
    last = 0;
    for (let i = 0; i <= w; i++) {
      if (((last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0)) & board[x + i]) return true
    }
    x += sw;
  }
  return false
}

function cloudBounds(bounds, d) {
  const b0 = bounds[0],
    b1 = bounds[1];
  if (d.x + d.x0 < b0.x) b0.x = d.x + d.x0;
  if (d.y + d.y0 < b0.y) b0.y = d.y + d.y0;
  if (d.x + d.x1 > b1.x) b1.x = d.x + d.x1;
  if (d.y + d.y1 > b1.y) b1.y = d.y + d.y1;
}

function collideRects(a, b) {
  return a.x + a.x1 > b[0].x && a.x + a.x0 < b[1].x && a.y + a.y1 > b[0].y && a.y + a.y0 < b[1].y
}

function archimedeanSpiral(size) {
  let e = size[0] / size[1];
  return function (t) {
    return [e * (t *= 0.1) * Math.cos(t), t * Math.sin(t)]
  }
}

function rectangularSpiral(size) {
  const dy = 4,
    dx = (dy * size[0]) / size[1];
  let x = 0,
    y = 0;
  return function (t) {
    const sign = t < 0 ? -1 : 1;
    // See triangular numbers: T_n = n * (n + 1) / 2.
    switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
      case 0:
        x += dx;
        break
      case 1:
        y += dy;
        break
      case 2:
        x -= dx;
        break
      default:
        y -= dy;
        break
    }
    return [x, y]
  }
}

// TODO reuse arrays?
function zeroArray(n) {
  const a = [];
  let i = -1;
  while (++i < n) a[i] = 0;
  return a
}

function functor(d) {
  return typeof d === 'function'
    ? d
    : function () {
        return d
      }
}

const spirals = {
  archimedean: archimedeanSpiral,
  rectangular: rectangularSpiral,
};

function tagCloud () {
  let size = [256, 256],
    text = cloudText,
    font = cloudFont,
    fontSize = cloudFontSize,
    fontStyle = cloudFontNormal,
    fontWeight = cloudFontNormal,
    rotate = cloudRotate,
    padding = cloudPadding,
    spiral = archimedeanSpiral,
    words = [],
    timeInterval = Infinity,
    random = Math.random,
    canvas = null,
    end = function () {};
  const cloud = {};

  cloud.end = function (_) {
    return arguments.length ? ((end = functor(_)), cloud) : end
  };

  cloud.canvas = function (_) {
    return arguments.length ? ((canvas = functor(_)), cloud) : canvas
  };

  cloud.start = function () {
    const minSize = Math.min(...size);
    cw = minSize >> 5;
    ch = minSize;

    const contextAndRatio = getContext(canvas()),
      board = cloud.board ? cloud.board : zeroArray((size[0] >> 5) * size[1]),
      n = words.length,
      tags = [],
      data = words
        .map(function (d, i) {
          d.text = text.call(this, d, i);
          d.font = font.call(this, d, i);
          d.style = fontStyle.call(this, d, i);
          d.weight = fontWeight.call(this, d, i);
          d.rotate = rotate.call(this, d, i);
          d.size = ~~fontSize.call(this, d, i);
          d.padding = padding.call(this, d, i);
          return d
        })
        .sort(function (a, b) {
          return b.size - a.size
        });
    let i = -1,
      bounds = !cloud.board
        ? null
        : [
            {
              x: 0,
              y: 0,
            },
            {
              x: size[0],
              y: size[1],
            },
          ];

    step();

    function step() {
      const start = Date.now();
      while (Date.now() - start < timeInterval && ++i < n) {
        const d = data[i];
        d.x = (size[0] * (random() + 0.5)) >> 1;
        d.y = (size[1] * (random() + 0.5)) >> 1;
        cloudSprite(contextAndRatio, d, data, i);
        if (d.hasText && place(board, d, bounds)) {
          tags.push(d);
          if (bounds) {
            if (!cloud.hasImage) {
              // update bounds if image mask not set
              cloudBounds(bounds, d);
            }
          } else {
            bounds = [
              { x: d.x + d.x0, y: d.y + d.y0 },
              { x: d.x + d.x1, y: d.y + d.y1 },
            ];
          }
          // Temporary hack
          d.x -= size[0] >> 1;
          d.y -= size[1] >> 1;
        }
      }

      if (i >= n) {
        console.log('END', tags);
        end(tags);
      }

      cloud._tags = tags;
      cloud._bounds = bounds;
    }

    return cloud
  };

  function getContext(canvas) {
    canvas.width = canvas.height = 1;
    const ratio = Math.sqrt(canvas.getContext('2d').getImageData(0, 0, 1, 1).data.length >> 2);
    canvas.width = (cw << 5) / ratio;
    canvas.height = ch / ratio;
    const context = canvas.getContext('2d');
    context.fillStyle = context.strokeStyle = '#ff0000';
    context.textAlign = 'center';
    return { context, ratio }
  }

  function place(board, tag, bounds) {
    // const perimeter = [{ x: 0, y: 0 }, { x: size[0], y: size[1] }],
    const startX = tag.x,
      startY = tag.y,
      maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]),
      s = spiral(size),
      dt = random() < 0.5 ? 1 : -1;
    let dxdy,
      t = -dt,
      dx,
      dy;

    while ((dxdy = s((t += dt)))) {
      dx = ~~dxdy[0];
      dy = ~~dxdy[1];

      if (Math.min(Math.abs(dx), Math.abs(dy)) >= maxDelta) break

      tag.x = startX + dx;
      tag.y = startY + dy;

      if (tag.x + tag.x0 < 0 || tag.y + tag.y0 < 0 || tag.x + tag.x1 > size[0] || tag.y + tag.y1 > size[1]) continue
      // TODO only check for collisions within current bounds.
      if (!bounds || !cloudCollide(tag, board, size[0])) {
        if (!bounds || collideRects(tag, bounds)) {
          const sprite = tag.sprite,
            w = tag.width >> 5,
            sw = size[0] >> 5,
            lx = tag.x - (w << 4),
            sx = lx & 0x7f,
            msx = 32 - sx,
            h = tag.y1 - tag.y0;
          let last,
            x = (tag.y + tag.y0) * sw + (lx >> 5);
          for (let j = 0; j < h; j++) {
            last = 0;
            for (let i = 0; i <= w; i++) {
              board[x + i] |= (last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
            }
            x += sw;
          }
          delete tag.sprite;
          return true
        }
      }
    }
    return false
  }

  cloud.createMask = img => {
    const can = canvas();
    const [width, height] = size;
    const w32 = width >> 5;
    const board = zeroArray((width >> 5) * height);
    can.width = width;
    can.height = height;
    const cxt = can.getContext('2d');
    cxt.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
    const imageData = cxt.getImageData(0, 0, width, height).data;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const k = w32 * j + (i >> 5);
        const tmp = (j * width + i) << 2;
        const flag = imageData[tmp] >= 250 && imageData[tmp + 1] >= 250 && imageData[tmp + 2] >= 250;
        const m = flag ? 1 << (31 - (i % 32)) : 0;
        board[k] |= m;
      }
    }
    cloud.board = board;
    cloud.hasImage = true;

    return cloud
  };

  cloud.timeInterval = function (_) {
    return arguments.length ? ((timeInterval = _ == null ? Infinity : _), cloud) : timeInterval
  };

  cloud.words = function (_) {
    return arguments.length ? ((words = _), cloud) : words
  };

  cloud.size = function (_) {
    return arguments.length ? ((size = [+_[0], +_[1]]), cloud) : size
  };

  cloud.font = function (_) {
    return arguments.length ? ((font = functor(_)), cloud) : font
  };

  cloud.fontStyle = function (_) {
    return arguments.length ? ((fontStyle = functor(_)), cloud) : fontStyle
  };

  cloud.fontWeight = function (_) {
    return arguments.length ? ((fontWeight = functor(_)), cloud) : fontWeight
  };

  cloud.rotate = function (_) {
    return arguments.length ? ((rotate = functor(_)), cloud) : rotate
  };

  cloud.text = function (_) {
    return arguments.length ? ((text = functor(_)), cloud) : text
  };

  cloud.spiral = function (_) {
    return arguments.length ? ((spiral = spirals[_] || _), cloud) : spiral
  };

  cloud.fontSize = function (_) {
    return arguments.length ? ((fontSize = functor(_)), cloud) : fontSize
  };

  cloud.padding = function (_) {
    return arguments.length ? ((padding = functor(_)), cloud) : padding
  };

  cloud.random = function (_) {
    return arguments.length ? ((random = _), cloud) : random
  };

  return cloud
}

function calChartTagCloudData() {
  let { opts, chartData, seriesMap } = this;
  let { element, width, height } = opts;
  let chartTagCloud = lodash_clonedeep(seriesMap['tagCloud'][0]);

  const layout = tagCloud();
  layout.canvas(chartTagCloud.canvas || element);
  layout.size(chartTagCloud.size || [width, height]);
  layout.words(chartTagCloud.data);
  layout.end(end);
  if (chartTagCloud.font) layout.font(chartTagCloud.font);
  if (chartTagCloud.fontSize) layout.fontSize(chartTagCloud.fontSize);
  if (chartTagCloud.padding) layout.padding(chartTagCloud.padding);
  if (chartTagCloud.rotate) layout.rotate(chartTagCloud.rotate);
  if (chartTagCloud.spiral) layout.spiral(chartTagCloud.spiral);
  if (chartTagCloud.timeInterval) layout.timeInterval(chartTagCloud.timeInterval);
  if (chartTagCloud.imageMask) layout.createMask(chartTagCloud.imageMask);

  layout.start();

  function end(data) {
    chartTagCloud.data = data;
    chartData.chartTagCloud = chartTagCloud;
  }

  console.log('complete calChartTagCloudData', chartData.chartTagCloud);
}

function calChartsData() {
  // 将opts的数据补充完整
  calOptions.call(this);

  // 计算数据
  calSeriesMap.call(this);
  calSeriesColor.call(this);
  calLegendData.call(this);

  // 有相同xy轴的图表，只计算一次
  if (this.seriesMap.line || this.seriesMap.bar || this.seriesMap.scatter || this.seriesMap.candlestick || this.seriesMap.heatmap) {
    calAxisData.call(this);
  }
  Object.keys(this.seriesMap).forEach(type => {
    if (this.seriesMap[type]) {
      switch (type) {
        case 'bar':
          calChartBarData.call(this);
          break
        case 'line':
          calChartLineData.call(this);
          break
        case 'pie':
          calChartPieData.call(this);
          break
        case 'radar':
          calAxisRadarData.call(this);
          calChartRadarData.call(this);
          break
        case 'scatter':
          calChartScatterData.call(this);
          break
        case 'funnel':
          calChartPieData$1.call(this);
          break
        case 'candlestick':
          calChartCandlestick.call(this);
          break
        case 'heatmap':
          calChartHeatmapData.call(this);
          break
        case 'treemap':
          calChartTreemapData.call(this);
          break
        case 'tagCloud':
          calChartTagCloudData.call(this);
          break
      }
    }
  });

  console.log('complete calChartsData');
}

var Timing = {
  easeIn: function (pos) {
    return Math.pow(pos, 3)
  },
  easeOut: function (pos) {
    return Math.pow(pos - 1, 3) + 1
  },
  easeInOut: function (pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3)
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2)
    }
  },
  linear: function (pos) {
    return pos
  },
};

class Animation {
  constructor(opts) {
    this.isStop = false;

    let { animation, animationDuration, animationTiming, onProcess, onAnimationFinish } = opts;

    let createAnimationFrame = function () {
      if (typeof requestAnimationFrame !== 'undefined') {
        return requestAnimationFrame
      } else if (typeof setTimeout !== 'undefined') {
        return function (step) {
          setTimeout(function () {
            let timeStamp = +new Date();
            step(timeStamp);
          }, 17);
        }
      }
    };
    let animationFrame = createAnimationFrame();

    if (animation) {
      let timingFunction = Timing[animationTiming];
      let startTimeStamp = null;

      let step = function () {
        if (this.isStop === true) {
          onProcess(1);
          onAnimationFinish();
          return
        }

        let timeStamp = +new Date();
        if (!startTimeStamp) startTimeStamp = timeStamp;

        if (timeStamp - startTimeStamp < animationDuration) {
          let process = (timeStamp - startTimeStamp) / animationDuration;
          process = timingFunction(process);
          opts.onProcess(process);
          animationFrame(step);
        } else {
          onProcess(1);
          onAnimationFinish();
        }
      };
      step = step.bind(this);

      animationFrame(step);
    } else {
      onProcess(1);
      onAnimationFinish();
    }
  }

  /**
   * 停止动画
   */
  stop() {
    this.isStop = true;
  }
}

function drawTooltip() {
  const { context, opts, tooltipData } = this;
  const { yAxis, xAxis, tooltip } = opts;
  const { data, axisPointerData, tooltipX, tooltipY, tooltipWidth, tooltipHeight } = tooltipData;
  const { show, axisPointer, backgroundColor, backgroundRadius, backgroundOpacity, padding, itemGap, iconRadius, iconGap, textStyle } = tooltip;
  const { fontSize: textFontSize, color: textColor, lineHeight: textLineHeight } = textStyle;
  const { type: axisPointerType, lineStyle: axisPointerLineStyle, shadowStyle: axisPointerShadowStyle, cross: axisPointerCross } = axisPointer;
  const { lineWdith: axisPointerLineWidth, lineDash: axisPointerLineDash, color: axisPointerLineColor, opacity: axisPointerLineOpacity } = axisPointerLineStyle;
  const { color: axisPointerShadowColor, opacity: axisPointerShadowOpacity } = axisPointerShadowStyle;
  const {
    show: crossShow,
    lineWidth: crossLineWidth,
    lineDash: crossLineDash,
    lineColor: crossLineColor,
    lineOpacity: crossLineOpacity,
    backgroundColor: crossBackgroundColor,
    backgroundOpacity: crossBackgroundOpacity,
    fontColor: crossFontColor,
    fontPadding: crossFontPadding,
  } = axisPointerCross;

  if (!show || data.length == 0) return
  // draw axisPointer
  if (axisPointerData) {
    const { crossPointer } = axisPointerData;
    const { yAxisLabel, yAxisLabelWidth, yAxisLabelHeight, yAxisLabelX, yAxisLabelY, yAxisLineX0, yAxisLineY0, yAxisLineX1, yAxisLineY1 } = crossPointer;

    if (crossShow) {
      const yAxisLabelFontSize = yAxis.axisLabel.textStyle.fontSize;

      // draw cross lineY
      context.save();
      context.lineWidth = crossLineWidth;
      context.setLineDash(crossLineDash);
      context.strokeStyle = crossLineColor;
      context.globalAlpha = crossLineOpacity;
      context.beginPath();
      context.moveTo(yAxisLineX0, yAxisLineY0);
      context.lineTo(yAxisLineX1, yAxisLineY1);
      context.stroke();
      context.restore();

      // draw cross backgroundY
      context.save();
      context.fillStyle = crossBackgroundColor;
      context.globalAlpha = crossBackgroundOpacity;
      context.fillRect(yAxisLabelX + crossFontPadding, yAxisLabelY - yAxisLabelFontSize / 2 - crossFontPadding, -yAxisLabelWidth, yAxisLabelHeight);
      context.restore();

      // draw cross labelY
      context.save();
      context.fillStyle = crossFontColor;
      context.font = `${yAxisLabelFontSize}px`;
      context.textBaseline = 'middle';
      context.textAlign = 'right';
      context.fillText(yAxisLabel, yAxisLabelX, yAxisLabelY);
      context.restore();
    }
  }
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  // draw axisPointer
  if (axisPointerData) {
    const { xAxisPointer, yAxisPointer, crossPointer } = axisPointerData;
    const {
      yAxisLineX0,
      yAxisLineY0,
      yAxisLineX1,
      yAxisLineY1,
      xAxisLabel,
      xAxisLabelWidth,
      xAxisLabelHeight,
      xAxisLabelX,
      xAxisLabelY,
      xAxisLineX0,
      xAxisLineY0,
      xAxisLineX1,
      xAxisLineY1,
    } = crossPointer;

    if (crossShow) {
      const xAxisLabelFontSize = xAxis.axisLabel.textStyle.fontSize;

      // draw cross lineY
      context.save();
      context.lineWidth = crossLineWidth;
      context.setLineDash(crossLineDash);
      context.strokeStyle = crossLineColor;
      context.globalAlpha = crossLineOpacity;
      context.beginPath();
      context.moveTo(yAxisLineX0, yAxisLineY0);
      context.lineTo(yAxisLineX1, yAxisLineY1);
      context.stroke();
      context.restore();

      // draw cross lineX
      context.save();
      context.lineWidth = crossLineWidth;
      context.setLineDash(crossLineDash);
      context.strokeStyle = crossLineColor;
      context.globalAlpha = crossLineOpacity;
      context.beginPath();
      context.moveTo(xAxisLineX0, xAxisLineY0);
      context.lineTo(xAxisLineX1, xAxisLineY1);
      context.stroke();
      context.restore();

      // draw cross backgroundX
      context.save();
      context.fillStyle = crossBackgroundColor;
      context.globalAlpha = crossBackgroundOpacity;
      context.fillRect(xAxisLabelX - xAxisLabelWidth / 2, xAxisLabelY - crossFontPadding, xAxisLabelWidth, xAxisLabelHeight);
      context.restore();

      // draw cross labelX
      context.save();
      context.fillStyle = crossFontColor;
      context.font = `${xAxisLabelFontSize}px`;
      context.textBaseline = 'top';
      context.textAlign = 'center';
      context.fillText(xAxisLabel, xAxisLabelX, xAxisLabelY);
      context.restore();
    }
    if (axisPointerType == 'line') {
      if (xAxisPointer) {
        const { x0, y0, x1, y1 } = xAxisPointer;

        context.save();
        context.globalAlpha = axisPointerLineOpacity;
        if (axisPointerLineDash) {
          context.setLineDash(axisPointerLineDash);
        }
        context.lineWidth = axisPointerLineWidth;
        context.strokeStyle = axisPointerLineColor;
        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.stroke();
        context.restore();
      }
    } else if (axisPointerType == 'shadow') {
      if (xAxisPointer) {
        const { x, y, width, height } = xAxisPointer;

        context.save();
        context.globalAlpha = axisPointerShadowOpacity;
        context.fillStyle = axisPointerShadowColor;
        context.fillRect(x, y, width, height);
        context.restore();
      }
    }
  }

  data.forEach(item => {
    if (item.type == 'line' || item.type == 'radar') {
      // 放大 symbol
      const { x, y, color, symbolType, symbolSize, symbolColor } = item;

      switch (symbolType) {
        case 'circle':
          context.beginPath();
          context.fillStyle = symbolColor == 'auto' ? color : symbolColor;
          context.arc(x, y, (symbolSize + 5) / 2, 0, 2 * Math.PI);
          context.fill();
          context.beginPath();
          context.fillStyle = '#ffffff';
          context.arc(x, y, (symbolSize + 6) / 4, 0, 2 * Math.PI);
          context.fill();
          context.restore();
          break
      }
    }

    if (item.type == 'pie') {
      // 放大 itemArea
      const { color, center, radius, _start_, _end_ } = item;
      const [centerX, centerY] = center;
      const [radiusMin, radiusMax] = radius;

      context.save();
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.fillStyle = color;
      context.arc(centerX, centerY, radiusMax + 8, _start_, _end_);
      context.fill();
      if (radiusMin > 0) {
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.fillStyle = this.opts.backgroundColor;
        context.arc(centerX, centerY, radiusMin, _start_, _end_);
        context.fill();
      }
      context.restore();
    }
  });

  // draw tooltip container
  drawRadiusRect(context, tooltipX, tooltipY, tooltipWidth, tooltipHeight, backgroundRadius, backgroundColor, backgroundOpacity);

  // draw tooltip content
  let _contentX = tooltipX + padding + iconRadius;
  let _contentY = tooltipY + padding + textLineHeight / 2;

  if (tooltipData.tooltipTitle) {
    // 存在标题
    context.save();
    context.fillStyle = textColor;
    context.font = `${textFontSize}px`;
    context.textBaseline = 'middle';
    context.textAlign = 'left';
    context.fillText(tooltipData.tooltipTitle, _contentX - iconRadius, _contentY);
    context.save();

    _contentY += textLineHeight + itemGap;
  }

  data.forEach(item => {
    if (item.type == 'candlestick' || item.type == 'k') {
      const { name, start, end, high, low, volumn, color } = item;

      context.save();
      context.beginPath();
      context.fillStyle = color;
      context.arc(_contentX, _contentY, iconRadius, 0, 2 * Math.PI);
      context.fill();
      _contentX += iconRadius + iconGap;

      context.beginPath();
      context.fillStyle = textColor;
      context.font = `${textFontSize}px`;
      context.textBaseline = 'middle';
      context.textAlign = 'left';
      context.fillText(name, _contentX, _contentY);
      _contentY += textLineHeight + itemGap;
      context.fillText(start, _contentX, _contentY);
      _contentY += textLineHeight + itemGap;
      context.fillText(end, _contentX, _contentY);
      _contentY += textLineHeight + itemGap;
      context.fillText(low, _contentX, _contentY);
      _contentY += textLineHeight + itemGap;
      context.fillText(high, _contentX, _contentY);
      _contentY += textLineHeight + itemGap;
      if (volumn) {
        context.fillText(volumn, _contentX, _contentY);
        _contentY += textLineHeight + itemGap;
      }
      context.restore();
      _contentX = tooltipX + padding + iconRadius;
    } else {
      const { text, color } = item;

      context.save();
      context.beginPath();
      context.fillStyle = color;
      context.arc(_contentX, _contentY, iconRadius, 0, 2 * Math.PI);
      context.fill();
      _contentX += iconRadius + iconGap;
      context.beginPath();
      context.fillStyle = textColor;
      context.font = `${textFontSize}px`;
      context.textBaseline = 'middle';
      context.textAlign = 'left';
      context.fillText(text, _contentX, _contentY);
      context.restore();

      _contentX = tooltipX + padding + iconRadius;
      _contentY += textLineHeight + itemGap;
    }
  });

  console.log('complete drawTooltip');
}

function drawRadiusRect(context, x, y, width, height, radius, backgroundColor = '#000000', opacity = 0.7) {
  // context.save()
  // context.fillStyle = backgroundColor
  // context.globalAlpha = opacity
  // context.beginPath()
  // context.moveTo(x + radius, y)
  // context.arcTo(x + width, y, x + width, y + height, radius)
  // context.lineTo(x + width, y + height - radius)
  // context.arcTo(x + width, y + height, x, y + height, radius)
  // context.lineTo(x + radius, y + height)
  // context.arcTo(x, y + height, x, y, radius)
  // context.lineTo(x, y + radius)
  // context.arcTo(x, y, x + radius, y, radius)
  // context.fill()
  // context.restore()

  // 兼容华为引擎
  context.save();
  context.fillStyle = backgroundColor;
  context.globalAlpha = opacity;
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.arc(x + width - radius - 0.5, y + radius + 0.5, radius, -Math.PI / 2, 0);
  context.lineTo(x + width, y + height - radius);
  context.arc(x + width - radius - 0.5, y + height - radius - 0.5, radius, 0, Math.PI / 2);
  context.lineTo(x + radius, y + height);
  context.arc(x + radius + 0.5, y + height - radius - 0.5, radius, Math.PI / 2, Math.PI);
  context.lineTo(x, y + radius);
  context.arc(x + radius + 0.5, y + radius + 0.5, radius, Math.PI, (Math.PI * 3) / 2);
  context.fill();
  context.restore();
}

/**
 * 绘制背景图
 */

function drawBackground(startX = 0, startY = 0, endX = this.opts.width, endY = this.opts.height) {
  this.context.clearRect(startX, startY, endX, endY);
  this.context.fillStyle = this.opts.backgroundColor;
  this.context.fillRect(startX, startY, endX, endY);

  console.log('complete drawBackground');
}

/**
 * 绘制图例组件
 */

function drawLegend() {
  let { context, opts, legendData } = this;
  let { width, height, legend, padding } = opts;
  if (!legend.show) return

  let { shapeWidth, shapeHeight, shapeRadius, itemGap, marginTop, textStyle } = legend;
  let { fontSize, color, padding: textPadding } = textStyle;
  let { legendList, legendWidth, legendHeight } = legendData;
  let startY = height - padding[2] - legendHeight + marginTop;
  let startX = padding[3] + (width - padding[1] - padding[3] - legendWidth) / 2;
  let legendHeightMax;

  legendList.forEach((listItem, listIndex) => {
    startX = padding[3] + (width - padding[1] - padding[3] - legendWidth) / 2;

    listItem.forEach(legendItem => {
      let { legendType, color, name, measureText } = legendItem;
      switch (legendType) {
        case 'circle':
          legendHeightMax = Math.max(shapeRadius * 2, fontSize);
          context.beginPath();
          context.moveTo(startX + shapeRadius, startY + legendHeightMax / 2);
          context.arc(startX + shapeRadius, startY + legendHeightMax / 2, shapeRadius, 0, 2 * Math.PI);
          context.closePath();

          context.fillStyle = color;
          context.fill();

          startX += shapeRadius * 2 + textPadding;
          break
        case 'line':
          legendHeightMax = Math.max(shapeHeight, fontSize);
          let lineLength = (shapeWidth - shapeHeight) / 2;

          context.beginPath();
          context.moveTo(startX, startY + legendHeightMax / 2);
          context.lineTo(startX + lineLength - 2, startY + legendHeightMax / 2);
          context.closePath();
          context.lineWidth = 2;
          context.strokeStyle = color;
          context.stroke();

          context.beginPath();
          context.moveTo(startX + shapeWidth / 2, startY + legendHeightMax / 2);
          context.arc(startX + shapeWidth / 2, startY + legendHeightMax / 2, shapeHeight / 2, 0, 2 * Math.PI);
          context.closePath();
          context.fillStyle = color;
          context.fill();

          context.beginPath();
          context.moveTo(startX + lineLength + shapeHeight + 2, startY + legendHeightMax / 2);
          context.lineTo(startX + shapeWidth, startY + legendHeightMax / 2);
          context.closePath();
          context.lineWidth = 2;
          context.strokeStyle = color;
          context.stroke();

          startX += shapeWidth + textPadding;
          break
        case 'rect':
          legendHeightMax = Math.max(shapeHeight, fontSize);
          context.fillStyle = getColor(
            color,
            context,
            startX,
            startY + legendHeightMax / 2 - shapeHeight / 2,
            startX + shapeWidth,
            startY + legendHeightMax / 2 + shapeHeight / 2
          );
          context.fillRect(startX, startY + legendHeightMax / 2 - shapeHeight / 2, shapeWidth, shapeHeight);

          startX += shapeWidth + textPadding;
          break
      }

      context.save();
      context.textAlign = 'left';
      context.textBaseline = 'middle';
      context.font = `${fontSize}px`;
      context.fillStyle = color;
      context.fillText(name, startX, startY + legendHeightMax / 2);
      context.restore();

      startX += measureText + itemGap;
    });

    startY += legendHeightMax + itemGap;
  });

  console.log('complete drawLegend');
}

/**
 * 绘制X轴, 包括 axisName(名称), axisLabel(标签), axisTick(刻度线), axisLine(轴线)
 */
function drawXAxis() {
  let { context, opts, chartData } = this;
  let { xAxis } = opts;

  let { show: xAxisShow, type: xAxisType, axisName: xAxisName, axisLabel: xAxisLabel, axisTick: xAxisTick, axisLine: xAxisLine } = xAxis;

  let { show: xAxisNameShow, textStyle: xAxisNameTextStyle } = xAxisName;
  let { show: xAxisLabelShow, textStyle: xAxisLabelTextStyle, rotate: xAxisLabelRotate } = xAxisLabel;
  let { show: xAxisTickShow, lineStyle: xAxisTickStyle } = xAxisTick;
  let { show: xAxisLineShow, lineStyle: xAxisLineStyle } = xAxisLine;

  let { color: xAxisNameColor, fontSize: xAxisNameFontSize } = xAxisNameTextStyle;
  let { color: xAxisLabelColor, fontSize: xAxisLabelFontSize } = xAxisLabelTextStyle;
  let { color: xAxisTickLineColor, lineWidth: xAxisTickLineWidth } = xAxisTickStyle;
  let { color: xAxisLineColor, lineWidth: xAxisLineWidth } = xAxisLineStyle;

  let { xAxisLabelPoint, xAxisTickPoint, xAxisLinePoint, xAxisNamePoint } = chartData.axisData;

  if (xAxisShow) {
    if (xAxisLabelShow) {
      context.save();
      if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
        context.translate(opts._scrollDistance_, 0);
      }
      context.font = `${xAxisLabelFontSize}px`;
      context.fillStyle = xAxisLabelColor;
      context.textBaseline = 'top';

      if (xAxisLabelRotate == 0) {
        context.textAlign = 'center';
      } else if (xAxisLabelRotate > 0) {
        context.textAlign = 'right';
      } else if (xAxisLabelRotate < 0) {
        context.textAlign = 'left';
      }

      xAxisLabelPoint.forEach(item => {
        if (xAxisType == 'value' || item.show) {
          if (xAxisLabelRotate == 0) {
            context.fillText(item.text, item.x, item.y);
          } else {
            context.save();
            context.translate(item.x, item.y);
            context.rotate((-xAxisLabelRotate * Math.PI) / 180);
            context.fillText(item.text, 0, 0);
            context.restore();
          }
        }
      });

      context.restore();
    }

    if (xAxisTickShow) {
      context.save();
      if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
        context.translate(opts._scrollDistance_, 0);
      }
      context.lineWidth = xAxisTickLineWidth;
      context.strokeStyle = xAxisTickLineColor;

      xAxisTickPoint.forEach(item => {
        if (xAxisType == 'value' || item.show) {
          context.beginPath();
          context.moveTo(item.startX, item.startY);
          context.lineTo(item.endX, item.endY);
          context.closePath();
          context.stroke();
        }
      });
      context.restore();
    }

    if (xAxisLineShow) {
      context.beginPath();
      context.moveTo(xAxisLinePoint.startX, xAxisLinePoint.startY);
      context.lineTo(xAxisLinePoint.endX, xAxisLinePoint.endY);
      context.closePath();

      context.lineWidth = xAxisLineWidth;
      context.strokeStyle = xAxisLineColor;
      context.stroke();
    }

    if (opts.enableScroll) {
      // 遮盖滑出去的图
      context.save();
      context.fillStyle = opts.backgroundColor || '#ffffff';
      if (opts._scrollDistance_ < 0) {
        context.fillRect(0, 0, Math.ceil(chartData.axisData.xStart), opts.height);
      }
      context.fillRect(Math.ceil(chartData.axisData.xEnd), 0, opts.width - Math.ceil(chartData.axisData.xEnd), opts.height);
      context.restore();
    }

    if (xAxisNameShow) {
      context.save();
      context.font = `${xAxisNameFontSize}px`;
      context.fillStyle = xAxisNameColor;
      context.textAlign = 'left';
      context.textBaseline = 'middle';
      context.fillText(xAxisNamePoint.text, xAxisNamePoint.x, xAxisNamePoint.y);
      context.restore();
    }
  }

  console.log('complete drawXAxis');
}

function drawXAxisGrid() {
  let { context, opts, chartData } = this;
  let { xAxis } = opts;

  let { show: xAxisShow, type: xAxisType, axisSplitLine: xAxisSplitLine } = xAxis;

  let { show: xAxisSplitLineShow, lineStyle: xAxisSplitLineStyle } = xAxisSplitLine;

  let { color: xAxisSplitLineColor, lineWidth: xAxisSplitLineWidth } = xAxisSplitLineStyle;

  let { xAxisSplitLinePoint } = chartData.axisData;

  if (xAxisShow) {
    if (xAxisSplitLineShow) {
      context.save();
      if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
        context.translate(opts._scrollDistance_, 0);
      }
      context.lineWidth = xAxisSplitLineWidth;
      context.strokeStyle = xAxisSplitLineColor;

      xAxisSplitLinePoint.forEach((item, index) => {
        if (xAxisType == 'value' || item.show) {
          context.beginPath();
          context.moveTo(item.startX, item.startY);
          context.lineTo(item.endX, item.endY);
          context.closePath();
          context.stroke();
        }
      });
      context.restore();
    }
    console.log('complete drawXAxisGrid');
  }
}

/**
 * 绘制Y轴, 包括 axisName(名称), axisLabel(标签), axisTick(刻度线), axisLine(轴线)
 */
function drawYAxis() {
  let { context, opts, chartData } = this;
  let { yAxis } = opts;

  let { show: yAxisShow, type: yAxisType, axisName: yAxisName, axisLabel: yAxisLabel, axisTick: yAxisTick, axisLine: yAxisLine } = yAxis;

  let { show: yAxisNameShow, textStyle: yAxisNameTextStyle } = yAxisName;
  let { show: yAxisLabelShow, textStyle: yAxisLabelTextStyle } = yAxisLabel;
  let { show: yAxisTickShow, lineStyle: yAxisTickStyle } = yAxisTick;
  let { show: yAxisLineShow, lineStyle: yAxisLineStyle } = yAxisLine;

  let { color: yAxisNameColor, fontSize: yAxisNameFontSize } = yAxisNameTextStyle;
  let { color: yAxisLabelColor, fontSize: yAxisLabelFontSize } = yAxisLabelTextStyle;
  let { color: yAxisTickLineColor, lineWidth: yAxisTickLineWidth } = yAxisTickStyle;
  let { color: yAxisLineColor, lineWidth: yAxisLineWidth } = yAxisLineStyle;

  let { yAxisLabelPoint, yAxisTickPoint, yAxisLinePoint, yAxisNamePoint } = chartData.axisData;

  // 防止轴线被网格线覆盖, 最后绘制
  if (yAxisShow) {
    if (yAxisLabelShow) {
      context.save();
      context.font = `${yAxisLabelFontSize}px`;
      context.fillStyle = yAxisLabelColor;
      context.textAlign = 'right';
      context.textBaseline = 'middle';
      yAxisLabelPoint.forEach(item => {
        if (yAxisType == 'value' || item.show) {
          context.fillText(item.text, item.x, item.y);
        }
      });
      context.restore();
    }

    if (yAxisNameShow) {
      context.save();
      context.font = `${yAxisNameFontSize}px`;
      context.fillStyle = yAxisNameColor;
      context.textAlign = 'center';
      context.textBaseline = 'bottom';
      context.fillText(yAxisNamePoint.text, yAxisNamePoint.x, yAxisNamePoint.y);
      context.restore();
    }

    if (yAxisTickShow) {
      context.lineWidth = yAxisTickLineWidth;
      context.strokeStyle = yAxisTickLineColor;

      yAxisTickPoint.forEach(item => {
        if (yAxisType == 'value' || item.show) {
          context.beginPath();
          context.moveTo(item.startX, item.startY);
          context.lineTo(item.endX, item.endY);
          context.closePath();
          context.stroke();
        }
      });
    }

    if (yAxisLineShow) {
      context.beginPath();
      context.moveTo(yAxisLinePoint.startX, yAxisLinePoint.startY);
      context.lineTo(yAxisLinePoint.endX, yAxisLinePoint.endY);
      context.closePath();

      context.lineWidth = yAxisLineWidth;
      context.strokeStyle = yAxisLineColor;
      context.stroke();
    }
  }

  console.log('complete drawYAxis');
}

function drawYAxisGrid() {
  let { context, opts, chartData } = this;
  let { yAxis } = opts;

  let { show: yAxisShow, type: yAxisType, axisSplitLine: yAxisSplitLine } = yAxis;

  let { show: yAxisSplitLineShow, lineStyle: yAxisSplitLineStyle } = yAxisSplitLine;

  let { color: yAxisSplitLineColor, lineWidth: yAxisSplitLineWidth } = yAxisSplitLineStyle;

  let { yAxisSplitLinePoint } = chartData.axisData;

  // 防止轴线被网格线覆盖, 最后绘制
  if (yAxisShow) {
    if (yAxisSplitLineShow) {
      context.lineWidth = yAxisSplitLineWidth;
      context.strokeStyle = yAxisSplitLineColor;

      yAxisSplitLinePoint.forEach((item, index) => {
        if (yAxisType == 'value' || item.show) {
          context.beginPath();
          context.moveTo(item.startX, item.startY);
          context.lineTo(item.endX, item.endY);
          context.closePath();
          context.stroke();
        }
      });
    }
  }

  console.log('complete drawYAxis');
}

function drawAxisRadar() {
  let { context, opts, chartData } = this;
  let { backgroundColor, radarAxis, categories } = opts;
  let {
    shape: radarAxisShape,
    splitNumber,
    axisName: radarAxisName,
    axisLine: radarAxisLine,
    splitLine: radarAxisSplitLine,
    splitArea: radarAxisSplitArea,
  } = radarAxis;
  let { show: radarAxisNameShow, textStyle: radarAxisNameTextStyle } = radarAxisName;
  let { show: radarAxisLineShow, lineStyle: radarAxisLineStyle } = radarAxisLine;
  let { show: radarAxisSplitLineShow, lineStyle: radarAxisSplitLineStyle } = radarAxisSplitLine;

  let { color: radarAxisNameColor, fontSize: radarAxisNameFontSize } = radarAxisNameTextStyle;
  let { color: radarAxisLineColor, lineWidth: radarAxisLineWidth } = radarAxisLineStyle;
  let { color: radarAxisSplitLineColor, lineWidth: radarAxisSplitLineWidth } = radarAxisSplitLineStyle;

  let { odd, even } = radarAxisSplitArea;
  let { show: oddSplitAreaShow, color: oddSplitAreaColor, opacity: oddSplitAreaOpacity } = odd;
  let { show: evenSplitAreaShow, color: evenSplitAreaColor, opacity: evenSplitAreaOpacity } = even;

  let { center, radius, lineEndPosition, namePosition } = chartData.radarAxis;
  let [centerX, centerY] = center;

  if (radarAxisShape == 'polygon') {
    lineEndPosition.forEach((splitPositionArr, splitIndex) => {
      let oddOrEven = (splitNumber - splitIndex) % 2; // 0为偶数，1为奇数

      context.beginPath();
      splitPositionArr.forEach((splitPositionItem, splitPositionIndex) => {
        if (splitPositionIndex == 0) {
          context.moveTo(splitPositionItem.x, splitPositionItem.y);
        } else {
          context.lineTo(splitPositionItem.x, splitPositionItem.y);
        }
      });
      context.closePath();

      // draw evenSplitArea
      if (oddOrEven === 0 && oddSplitAreaShow) {
        context.fillStyle = backgroundColor;
        context.fill(); // 避免存在透明度时，上一次绘制颜色的影响
        context.save();
        context.globalAlpha = evenSplitAreaOpacity;
        context.fillStyle = evenSplitAreaColor;
        context.fill();
        context.restore();
      }

      // draw oddSplitArea
      if (oddOrEven === 1 && evenSplitAreaShow) {
        context.fillStyle = backgroundColor;
        context.fill(); // 避免存在透明度时，上一次绘制颜色的影响
        context.save();
        context.globalAlpha = oddSplitAreaOpacity;
        context.fillStyle = oddSplitAreaColor == 'auto' ? backgroundColor : oddSplitAreaColor;
        context.fill();
        context.restore();
      }

      // draw radarAxisSplitLine
      if (radarAxisSplitLineShow) {
        context.lineWidth = radarAxisSplitLineWidth;
        context.strokeStyle = radarAxisSplitLineColor;
        context.stroke();
      }
    });
  } else {
    for (let index = 0; index < splitNumber; index++) {
      let scale = (splitNumber - index) / splitNumber;
      let oddOrEven = (splitNumber - index) % 2; // 0为偶数，1为奇数

      context.beginPath();
      context.arc(centerX, centerY, radius * scale, 0, Math.PI * 2);

      // draw evenSplitArea
      if (oddOrEven === 0 && oddSplitAreaShow) {
        context.fillStyle = backgroundColor;
        context.fill(); // 避免存在透明度时，上一次绘制颜色的影响
        context.save();
        context.globalAlpha = evenSplitAreaOpacity;
        context.fillStyle = evenSplitAreaColor;
        context.fill();
        context.restore();
      }

      // draw oddSplitArea
      if (oddOrEven === 1 && evenSplitAreaShow) {
        context.fillStyle = backgroundColor;
        context.fill(); // 避免存在透明度时，上一次绘制颜色的影响
        context.save();
        context.globalAlpha = oddSplitAreaOpacity;
        context.fillStyle = oddSplitAreaColor == 'auto' ? backgroundColor : oddSplitAreaColor;
        context.fill();
        context.restore();
      }

      // draw radarAxisSplitLine
      if (radarAxisSplitLineShow) {
        context.lineWidth = radarAxisSplitLineWidth;
        context.strokeStyle = radarAxisSplitLineColor;
        context.stroke();
      }
    }
  }

  // draw radarAxisLine
  if (radarAxisLineShow) {
    lineEndPosition[0].forEach(lineEndPositionItem => {
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(lineEndPositionItem.x, lineEndPositionItem.y);
      context.lineWidth = radarAxisLineWidth;
      context.strokeStyle = radarAxisLineColor;
      context.stroke();
    });
  }

  // draw radarAxisName
  if (radarAxisNameShow) {
    namePosition.forEach(namePositionItem => {
      let { text, point, position } = namePositionItem;
      let { x: pointX } = point;
      let { x: positionX, y: positionY } = position;

      context.save();
      if (positionX == centerX) {
        context.textAlign = 'center';
      } else if (pointX > 0) {
        context.textAlign = 'left';
      } else if (pointX < 0) {
        context.textAlign = 'right';
      }

      context.textBaseline = 'middle';

      context.font = `${radarAxisNameFontSize}px`;
      context.fillStyle = radarAxisNameColor;
      context.fillText(text, positionX, positionY);
      context.restore();
    });
  }

  console.log('complete drawAxisRadar');
}

function drawChartBar(process) {
  let { context, opts, chartData } = this;
  let { label: globalLabel, xAxis } = opts;

  let { yMaxData, yMinData, xMaxData, xMinData } = chartData.axisData;

  let maxData = xAxis.type == 'value' ? xMaxData : yMaxData;
  let minData = xAxis.type == 'value' ? xMinData : yMinData;

  if (xAxis.type == 'category') {
    chartData.chartBar.forEach((barItemArr, barItemArrIndex) => {
      barItemArr.forEach((barItem, barIndex) => {
        barItem.forEach((seriesItem, seriesIndex) => {
          let { x, y, data, barWidth, barHeight, itemStyle } = seriesItem;
          let { color: barItemColor } = itemStyle;

          context.save();
          if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
            context.translate(opts._scrollDistance_, 0);
          }
          context.fillStyle = getColor(barItemColor, context, x - barWidth / 2, y - barHeight, x + barWidth, y);
          if (data >= 0) {
            context.fillRect(x - barWidth / 2, y, barWidth, -barHeight * process);
          } else {
            context.fillRect(x - barWidth / 2, y, barWidth, barHeight * process);
          }

          context.restore();
        });
      });
    });

    if (process == 1) {
      chartData.chartBar.forEach((barItemArr, barItemArrIndex) => {
        barItemArr.forEach((barItem, barIndex) => {
          barItem.forEach((seriesItem, seriesIndex) => {
            let { show: barItemShow, x, y, barWidth, barHeight, data, label, itemStyle } = seriesItem;
            let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin, format: labelFormat } = label;
            let { color: barItemColor } = itemStyle;
            const text = labelFormat ? labelFormat(data) : data;

            // globalLabel 权重大于 seriesLabel
            labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
            labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
            labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
            labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

            if (labelShow && barItemShow) {
              context.save();
              if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
                context.translate(opts._scrollDistance_, 0);
              }
              context.font = `${labelFontSize}px`;
              context.strokeStyle = labelColor == 'auto' ? barItemColor : labelColor;
              context.fillStyle = '#ffffff';
              context.textBaseline = 'middle';
              context.textAlign = 'center';

              if (data >= 0) {
                context.strokeText(text, x, y - barHeight / 2);
                context.fillText(text, x, y - barHeight / 2);
              } else {
                context.strokeText(text, x, y + barHeight / 2);
                context.fillText(text, x, y + barHeight / 2);
              }
              context.restore();
            }
          });
        });
      });
    }
  } else {
    chartData.chartBar.forEach((barItemArr, barItemArrIndex) => {
      barItemArr.forEach((barItem, barIndex) => {
        barItem.forEach((seriesItem, seriesIndex) => {
          let { x, y, data, barWidth, barHeight, itemStyle } = seriesItem;
          let { color: barItemColor } = itemStyle;

          context.save();
          context.fillStyle = barItemColor;

          if (data > 0) {
            context.fillRect(x, y - (barWidth * process) / 2, barHeight, barWidth * process);
          } else {
            context.fillRect(x, y - (barWidth * process) / 2, -barHeight, barWidth * process);
          }
          context.restore();
        });
      });
    });

    if (process == 1) {
      chartData.chartBar.forEach((barItemArr, barItemArrIndex) => {
        barItemArr.forEach((barItem, barIndex) => {
          barItem.forEach((seriesItem, seriesIndex) => {
            let { show: barItemShow, x, y, barWidth, barHeight, data, label, itemStyle } = seriesItem;
            let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin, format: labelFormat } = label;
            let { color: barItemColor } = itemStyle;
            const text = labelFormat ? labelFormat(data) : data;

            // globalLabel 权重大于 seriesLabel
            labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
            labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
            labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
            labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

            if (labelShow && barItemShow) {
              context.save();
              context.font = `${labelFontSize}px`;
              context.strokeStyle = labelColor == 'auto' ? barItemColor : labelColor;
              context.fillStyle = '#ffffff';
              context.textBaseline = 'middle';
              context.textAlign = 'center';

              if (data >= 0) {
                context.strokeText(text, x + barHeight / 2, y);
                context.fillText(text, x + barHeight / 2, y);
              } else {
                context.strokeText(text, x - barHeight / 2, y);
                context.fillText(text, x - barHeight / 2, y);
              }
              context.restore();
            }
          });
        });
      });
    }
  }

  console.log('complete drawChartBar', process);
}

function drawChartLine(process) {
  let { context, opts, chartData } = this;
  let { label: globalLabel, xAxis } = opts;
  let { xStart, xEnd, yStart, yEnd, yZero, xZero, yMaxData, yMinData, xMaxData, xMinData } = chartData.axisData;

  let maxData = xAxis.type == 'value' ? xMaxData : yMaxData;
  let minData = xAxis.type == 'value' ? xMinData : yMinData;

  function isNotMiddlePoint(dataArr, i) {
    if (dataArr[i - 1] && dataArr[i + 1]) {
      return dataArr[i].y >= Math.max(dataArr[i - 1].y, dataArr[i + 1].y) || dataArr[i].y <= Math.min(dataArr[i - 1].y, dataArr[i + 1].y)
    } else {
      return false
    }
  }

  function drawLine(line, itemStyle) {
    let { show: lineShow, lineWidth, color: lineColor, opacity: lineOpacity } = line;
    let { color: lineItemColor } = itemStyle;

    if (lineShow) {
      context.save();
      if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
        context.translate(opts._scrollDistance_, 0);
      }
      context.lineJoin = 'round';
      context.globalAlpha = lineOpacity;
      context.lineWidth = lineWidth;
      context.strokeStyle = lineColor == 'auto' ? lineItemColor : lineColor;
      context.stroke();
      context.restore();
    }
  }

  function drawArea(area, itemStyle, lineStartX, lineStartY, lineEndX, lineEndY) {
    let { show: areaShow, color: areaColor, opacity: areaOpacity } = area;
    let { color: lineItemColor } = itemStyle;

    if (areaShow) {
      if (xAxis.type == 'category') {
        if (maxData >= 0 && minData >= 0) {
          context.lineTo(lineEndX, yStart);
          context.lineTo(lineStartX, yStart);
        } else if (maxData <= 0 && minData <= 0) {
          context.lineTo(lineEndX, yEnd);
          context.lineTo(lineStartX, yEnd);
        } else {
          context.lineTo(lineEndX, yZero);
          context.lineTo(lineStartX, yZero);
        }
      } else {
        if (maxData >= 0 && minData >= 0) {
          context.lineTo(xStart, lineEndY);
          context.lineTo(xStart, lineStartY);
        } else if (maxData <= 0 && minData <= 0) {
          context.lineTo(xEnd, lineEndY);
          context.lineTo(xEnd, lineStartY);
        } else {
          context.lineTo(xZero, lineEndY);
          context.lineTo(xZero, lineStartY);
        }
      }
      context.closePath();
      context.save();
      if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
        context.translate(opts._scrollDistance_, 0);
      }
      context.globalAlpha = areaOpacity;
      context.fillStyle = getColor(areaColor == 'auto' ? lineItemColor : areaColor, context, xStart, yEnd, xEnd, yStart);
      context.fill();
      context.restore();
    }
  }

  lodash_clonedeep(chartData.chartLine).forEach(lineItem => {
    let { itemStyle, line, symbol, area, label, smooth, connectNulls } = lineItem;
    let { color: lineItemColor } = itemStyle;
    let { show: symbolShow, type: symbolType, size: symbolSize, color: symbolColor } = symbol;
    let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin, format: labelFormat } = label;

    let lineStartX, lineStartY, lineEndX, lineEndY;

    if (smooth) {
      // process更新y坐标数据
      lineItem.data = lineItem.data.map(dataItem => {
        let { x, y, height, data } = dataItem;

        if (xAxis.type == 'category') {
          if (maxData >= 0 && minData >= 0) {
            dataItem.y = y + height - height * process;
          } else if (maxData <= 0 && minData <= 0) {
            dataItem.y = y - height + height * process;
          } else {
            if (data > 0) {
              dataItem.y = y + height - height * process;
            } else {
              dataItem.y = y - height + height * process;
            }
          }
        } else {
          if (maxData >= 0 && minData >= 0) {
            dataItem.x = x - height + height * process;
          } else if (maxData <= 0 && minData <= 0) {
            dataItem.x = x + height - height * process;
          } else {
            if (data > 0) {
              dataItem.x = x - height + height * process;
            } else {
              dataItem.x = x + height - height * process;
            }
          }
        }

        return dataItem
      });

      // 获取有效data
      lineItem.validData = lineItem.data.filter(dataItem => {
        return typeof dataItem.data == 'number'
      });

      // 计算贝塞尔曲线控制点并绘制路径
      let bezierCurveData = connectNulls ? lineItem.validData : lineItem.data;

      bezierCurveData.forEach((dataItem, dataIndex, dataArr) => {
        const a = 0.2;
        const b = 0.2;
        let pAx = null;
        let pAy = null;
        let pBx = null;
        let pBy = null;
        let { x, y, data } = dataItem;

        if (typeof data == 'number') {
          if (lineStartX && lineStartY) {
            let i = dataIndex - 1;
            if (i < 1) {
              pAx = dataArr[0].x + (dataArr[1].x - dataArr[0].x) * a;
              pAy = dataArr[0].y + (dataArr[1].y - dataArr[0].y) * a;
            } else {
              pAx = dataArr[i].x + (dataArr[i + 1].x - dataArr[i - 1].x) * a;
              pAy = dataArr[i].y + (dataArr[i + 1].y - dataArr[i - 1].y) * a;
            }

            if (i > dataArr.length - 3) {
              let last = dataArr.length - 1;
              pBx = dataArr[last].x - (dataArr[last].x - dataArr[last - 1].x) * b;
              pBy = dataArr[last].y - (dataArr[last].y - dataArr[last - 1].y) * b;
            } else {
              pBx = dataArr[i + 1].x - (dataArr[i + 2].x - dataArr[i].x) * b;
              pBy = dataArr[i + 1].y - (dataArr[i + 2].y - dataArr[i].y) * b;
            }

            if (isNotMiddlePoint(dataArr, i + 1)) {
              pBy = dataArr[i + 1].y;
            }
            if (isNotMiddlePoint(dataArr, i)) {
              pAy = dataArr[i].y;
            }

            context.bezierCurveTo(pAx, pAy, pBx, pBy, x, y);

            lineEndX = x;
            lineEndY = y;
          } else {
            context.beginPath();
            context.moveTo(x, y);
            lineStartX = x;
            lineStartY = y;
          }
        }

        if ((!connectNulls && typeof data !== 'number') || dataIndex + 1 == dataArr.length) {
          if (lineEndX && lineEndY) {
            drawLine(line, itemStyle);
            drawArea(area, itemStyle, lineStartX, lineStartY, lineEndX, lineEndY);
            lineEndX = null;
            lineEndY = null;
          }
          lineStartX = null;
          lineStartY = null;
        }
      });
    } else {
      lineItem.data.forEach((dataItem, dataIndex, dataArr) => {
        let { x, y, height, data } = dataItem;

        if (xAxis.type == 'category') {
          if (maxData >= 0 && minData >= 0) {
            y = y + height - height * process;
          } else if (maxData <= 0 && minData <= 0) {
            y = y - height + height * process;
          } else {
            if (data > 0) {
              y = y + height - height * process;
            } else {
              y = y - height + height * process;
            }
          }
        } else {
          if (maxData >= 0 && minData >= 0) {
            x = x - height + height * process;
          } else if (maxData <= 0 && minData <= 0) {
            x = x + height - height * process;
          } else {
            if (data > 0) {
              x = x - height + height * process;
            } else {
              x = x + height - height * process;
            }
          }
        }

        if (typeof data == 'number') {
          if (lineStartX && lineStartY) {
            context.lineTo(x, y);
            lineEndX = x;
            lineEndY = y;
          } else {
            context.beginPath();
            context.moveTo(x, y);
            lineStartX = x;
            lineStartY = y;
          }
        }

        if ((!connectNulls && typeof data !== 'number') || dataIndex + 1 == dataArr.length) {
          if (lineEndX && lineEndY) {
            drawLine(line, itemStyle);
            drawArea(area, itemStyle, lineStartX, lineStartY, lineEndX, lineEndY);
            lineStartX = null;
            lineStartY = null;
            lineEndX = null;
            lineEndY = null;
          }
        }
      });
    }

    if (process == 1) {
      if (symbolShow) {
        context.save();
        if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
          context.translate(opts._scrollDistance_, 0);
        }
        lineItem.data.forEach(dataItem => {
          let { x, y, data } = dataItem;

          if (typeof data !== 'number') return

          switch (symbolType) {
            case 'circle':
              context.beginPath();
              context.arc(x, y, symbolSize / 2, 0, 2 * Math.PI);
              context.fillStyle = symbolColor == 'auto' ? lineItemColor : symbolColor;
              context.fill();

              context.beginPath();
              context.arc(x, y, symbolSize / 4, 0, 2 * Math.PI);
              context.fillStyle = '#ffffff';
              context.fill();
              break
          }
        });
        context.restore();
      }

      // globalLabel 权重大于 seriesLabel
      labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
      labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
      labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
      labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

      if (labelShow) {
        context.save();
        if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
          context.translate(opts._scrollDistance_, 0);
        }
        context.font = `${labelFontSize}px`;
        context.fillStyle = labelColor == 'auto' ? lineItemColor : labelColor;
        context.textAlign = 'center';

        lineItem.data.forEach(dataItem => {
          let { x, y, data } = dataItem;

          if (typeof data !== 'number') return

          const text = labelFormat ? labelFormat(data) : data;

          if (xAxis.type == 'category') {
            if (maxData >= 0 && minData >= 0) {
              context.textBaseline = 'bottom';
              context.fillText(text, x, y - labelMargin);
            } else if (maxData <= 0 && minData <= 0) {
              context.textBaseline = 'top';
              context.fillText(text, x, y + labelMargin);
            } else {
              if (data) {
                context.textBaseline = 'bottom';
                context.fillText(text, x, y - labelMargin);
              } else {
                context.textBaseline = 'top';
                context.fillText(text, x, y + labelMargin);
              }
            }
          } else {
            context.textBaseline = 'bottom';
            context.fillText(data, x, y - labelMargin);
          }
        });

        context.restore();
      }
    }
  });

  console.log('complete drawChartLine', process, context);
}

function drawChartPie(process) {
  let { context, opts, chartData } = this;
  let { backgroundColor, label: globalLabel } = opts;
  let { data, center, radius, offsetAngle, disablePieStroke, valueSum, maxData, roseType } = chartData.chartPie;
  let [centerX, centerY] = center;
  let [radiusMin, radiusMax] = radius;
  let _start_ = offsetAngle !== 0 ? (offsetAngle * Math.PI) / 180 : 0;

  data.forEach((dataItem, dataIndex) => {
    dataItem._start_ = _start_;

    if (roseType == 'area') {
      dataItem._proportion_ = (1 / data.length) * process;
    } else {
      dataItem._proportion_ = (dataItem.value / valueSum) * process;
    }
    dataItem._end_ = _start_ + 2 * dataItem._proportion_ * Math.PI;

    let radius = radiusMax;
    if (roseType == 'radius' || roseType == 'area') {
      radius = radiusMin + ((radiusMax - radiusMin) * dataItem.value) / maxData;
    }
    dataItem.radius = radius;

    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, dataItem._start_, dataItem._end_);
    context.lineWidth = 2;
    context.strokeStyle = backgroundColor;
    context.fillStyle = dataItem.itemStyle.color;
    context.fill();
    if (!disablePieStroke) {
      context.stroke();
    }

    if (radiusMin > 0) {
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.arc(centerX, centerY, radiusMin, dataItem._start_, dataItem._end_);
      context.fillStyle = backgroundColor;
      context.strokeStyle = backgroundColor;
      context.stroke();
      context.fill();
    }

    _start_ = dataItem._end_;
  });

  // 绘制文本标签
  if (process == 1) {
    let { label: seriesLabel, labelLine, title } = chartData.chartPie;
    let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin, format: labelFormat } = seriesLabel;
    let { length1, length2, lineWidth, lineDotRadius } = labelLine;
    let lineRadius = radiusMax + length1;
    let lastOrigin = null;
    let { show: titleShow, text, textStyle, subtext, subtextStyle, itemGap, backgroundColor, borderColor, borderWidth } = title;
    let { fontSize: textFontSize, color: textColor, lineHeight: textLineHeight } = textStyle;
    let { fontSize: subtextFontSize, color: subtextColor, lineHeight: subtextLineHeight } = subtextStyle;

    // globalLabel 权重大于 seriesLabel
    labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
    labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
    labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
    labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;
    labelFormat = globalLabel && globalLabel.format ? globalLabel.format : labelFormat;

    if (labelShow) {
      data.forEach((dataItem, dataIndex) => {
        let arc = 2 * Math.PI - (dataItem._start_ + (2 * Math.PI * dataItem._proportion_) / 2);
        let text = labelFormat
          ? labelFormat({ name: dataItem.name, value: dataItem.value, percent: ((dataItem.value / valueSum) * 100).toFixed(2) })
          : `${((dataItem.value / valueSum) * 100).toFixed(2)}%`;

        // length1 start
        let length1StartOrigin = {
          x: Math.cos(arc) * dataItem.radius,
          y: Math.sin(arc) * dataItem.radius,
        };
        // length2 start
        let length2StartOrigin = {
          x: Math.cos(arc) * lineRadius,
          y: Math.sin(arc) * lineRadius,
        };
        // length2 end
        let length2EndOrigin = {
          x: length2StartOrigin.x >= 0 ? length2StartOrigin.x + length2 : length2StartOrigin.x - length2,
          y: length2StartOrigin.y,
        };

        length2EndOrigin = avoidCollision(length2EndOrigin, lastOrigin, Math.max(lineDotRadius, labelFontSize / 2) * 2);
        lastOrigin = length2EndOrigin;

        let length1StartPosition = convertCoordinateOrigin(length1StartOrigin, center);
        let length2StartPosition = convertCoordinateOrigin(length2StartOrigin, center);
        let length2EndPosition = convertCoordinateOrigin(length2EndOrigin, center);

        // text start
        context.font = `${labelFontSize}px`;
        let textWidth = context.measureText(text).width;
        let textStartPosition = Object.assign({}, length2EndPosition);
        if (length2EndOrigin.x > 0) {
          textStartPosition.x += lineDotRadius + labelMargin;
        } else {
          textStartPosition.x -= textWidth + lineDotRadius + labelMargin;
        }

        context.beginPath();
        context.moveTo(length1StartPosition.x, length1StartPosition.y);
        context.quadraticCurveTo(length2StartPosition.x, length2StartPosition.y, length2EndPosition.x, length2EndPosition.y);
        context.lineWidth = lineWidth;
        context.strokeStyle = dataItem.itemStyle.color;
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(length2EndPosition.x, length2EndPosition.y);
        context.arc(length2EndPosition.x, length2EndPosition.y, lineDotRadius, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = dataItem.itemStyle.color;
        context.fill();

        context.font = `${labelFontSize}px`;
        context.textBaseline = 'middle';
        context.fillStyle = labelColor == 'auto' ? dataItem.itemStyle.color : labelColor;
        context.fillText(text, textStartPosition.x, textStartPosition.y);
      });
    }

    if (titleShow) {
      const textStrArr = text.split('\n').filter(item => !!item);
      const subtextStrArr = subtext.split('\n').filter(item => !!item);

      let titleY = centerY;
      let titleHeight = textLineHeight * textStrArr.length + subtextLineHeight * subtextStrArr.length;

      if (subtext) {
        titleHeight += itemGap;
      }
      titleY -= titleHeight / 2;

      context.save();
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      if (text) {
        titleY += textLineHeight / 2;
        context.font = `${textFontSize}px`;
        context.fillStyle = textColor;
        textStrArr.forEach((text, index, arr) => {
          context.fillText(text, centerX, titleY);
          if (index + 1 == arr.length) {
            titleY += textLineHeight / 2;
          } else {
            titleY += textLineHeight;
          }
        });
        titleY += itemGap;
      }

      if (subtext) {
        titleY += subtextLineHeight / 2;
        context.font = `${subtextFontSize}px`;
        context.fillStyle = subtextColor;
        subtextStrArr.forEach(text => {
          context.fillText(text, centerX, titleY);
          titleY += subtextLineHeight;
        });
      }
      context.restore();
    }
  }

  console.log('complete drawChartPie', process);
}

function drawChartRadar(process) {
  let { context, opts, chartData } = this;
  let { label: globalLabel } = opts;
  let { center } = chartData.radarAxis;

  chartData.chartRadar.forEach(radarItem => {
    let { dataPosition, itemStyle, area, line, symbol, label } = radarItem;
    let { show: areaShow, color: areaColor, opacity: areaOpactiy } = area;
    let { show: lineShow, lineWidht, color: lineColor, opacity: lineOpacity } = line;
    let { show: symbolShow, type: symbolType, size: symbolSize, color: symbolColor } = symbol;
    let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin } = label;

    context.beginPath();
    dataPosition.forEach((dataItem, dataIndex) => {
      let point = dataItem.point;
      let _point = { x: point.x * process, y: point.y * process };
      let position = convertCoordinateOrigin(_point, center);
      let { x: positionX, y: positionY } = position;
      dataItem.position = position;

      if (dataIndex == 0) {
        context.moveTo(positionX, positionY);
      } else {
        context.lineTo(positionX, positionY);
      }
    });
    context.closePath();

    if (areaShow) {
      context.save();
      context.globalAlpha = areaOpactiy;
      context.fillStyle = areaColor == 'auto' ? itemStyle.color : areaColor;
      context.fill();
      context.stroke();
      context.restore();
    }

    if (lineShow) {
      context.save();
      context.lineWidht = lineWidht;
      context.globalAlpha = lineOpacity;
      context.strokeStyle = lineColor == 'auto' ? itemStyle.color : lineColor;
      context.stroke();
      context.restore();
    }

    if (process == 1) {
      if (symbolShow) {
        switch (symbolType) {
          case 'circle':
            context.save();
            dataPosition.forEach(dataItem => {
              let { x: positionX, y: positionY } = dataItem.position;
              context.beginPath();
              context.arc(positionX, positionY, symbolSize / 2, 0, Math.PI * 2);
              context.fillStyle = symbolColor == 'auto' ? itemStyle.color : symbolColor;
              context.fill();

              context.beginPath();
              context.arc(positionX, positionY, symbolSize / 4, 0, Math.PI * 2);
              context.fillStyle = '#fff';
              context.fill();
            });
            context.restore();
            break
        }
      }

      // globalLabel 权重大于 seriesLabel
      labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
      labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
      labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
      labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

      if (labelShow) {
        context.save();
        context.font = `${labelFontSize}px`;
        context.fillStyle = labelColor == 'auto' ? itemStyle.color : labelColor;
        context.textAlign = 'center';
        context.textBaseline = 'bottom';

        dataPosition.forEach(dataItem => {
          let { x, y } = dataItem.position;
          context.fillText(dataItem.data, x, y - labelMargin);
        });
      }
    }
  });

  console.log('complete drawChartRadar', process);
}

function drawChartScatter(process) {
  let { context, opts, chartData } = this;
  let { label: globalLabel } = opts;

  chartData.chartScatter.forEach(scatterItem => {
    let { name: scatterItemName, data, label, itemStyle, opacity, lineWidth, strokeColor } = scatterItem;
    let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin } = label;
    let { color: scatterItemColor } = itemStyle;

    data.forEach(dataItem => {
      let { positionX, positionY, radius, color: dataItemColor } = dataItem;
      context.save();
      context.beginPath();
      context.arc(positionX, positionY, radius * process, 0, Math.PI * 2);
      if (lineWidth > 0) {
        context.strokeStyle = strokeColor == 'auto' ? dataItemColor : strokeColor;
        context.lineWidth = 0;
        context.stroke();
      }
      context.fillStyle = dataItemColor;
      context.globalAlpha = opacity;
      context.fill();
      context.restore();
    });

    if (process == 1) {
      // globalLabel 权重大于 seriesLabel
      labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
      labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
      labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
      labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

      if (labelShow) {
        context.save();
        context.font = `${labelFontSize}px`;
        context.fillStyle = labelColor == 'auto' ? scatterItemColor : labelColor;

        data.forEach(dataItem => {
          let { y, z, radius, name, positionX, positionY } = dataItem;
          let text = name ? name : z ? z : scatterItemName;

          if (typeof scatterItemColor !== 'string') {
            context.textAlign = 'center';
            context.textBaseline = 'bottom';
            context.fillText(text, positionX, positionY - radius - labelMargin);
          } else {
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, positionX, positionY);
          }
        });
        context.restore();
      }
    }
  });

  console.log('complete drawChartScatter', process);
}

function drawChartPie$1(process) {
  let { context, opts, chartData } = this;
  let { data, funnelAlign, itemStyle, label: seriesLabel } = chartData.chartFunnel;
  let { borderColor, borderWidth } = itemStyle;

  data.forEach(dataItem => {
    let { point, itemStyle: dataItemStyle } = dataItem;
    let { color: dataItemColor } = dataItemStyle;

    context.beginPath();
    point.forEach((pointItem, pointIndex) => {
      let { x, y } = pointItem;
      if (pointIndex == 0) {
        context.moveTo(x, y * process);
      } else {
        context.lineTo(x, y * process);
      }
    });
    context.closePath();

    if (borderWidth > 0) {
      context.strokeStyle = borderColor;
      context.lineWidth = borderWidth;
      context.stroke();
    }
    context.fillStyle = dataItemColor;
    context.fill();
  });

  // 绘制文本标签
  if (process == 1) {
    let { label: globalLabel } = opts;
    let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin, position: labelPosition } = seriesLabel;
    // globalLabel 权重大于 seriesLabel
    labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
    labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
    labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
    labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

    if (labelShow) {
      context.save();
      data.forEach(dataItem => {
        let { name, itemStyle: dataItemStyle, textPoint } = dataItem;
        let { x, y } = textPoint;

        if (labelPosition == 'inside') {
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.font = `${labelFontSize}px`;
          context.strokeStyle = dataItemStyle.color;
          context.fillStyle = '#ffffff';
          context.strokeText(name, x, y);
          context.fillText(name, x, y);
        } else {
          if (funnelAlign == 'right') {
            // 右对齐
            context.textAlign = 'right';
          } else {
            // 左对齐 左右对称
            context.textAlign = 'left';
          }
          context.textBaseline = 'middle';
          context.font = `${labelFontSize}px`;
          context.fillStyle = labelColor == 'auto' ? dataItemStyle.color : labelColor;
          context.fillText(name, x, y);
        }
      });
      context.restore();
    }
  }

  console.log('complete drawChartFunnel', process);
}

function drawChartCandlestick(process) {
  let { context, opts, chartData, seriesMap } = this;
  let seriesCandlestick = lodash_clonedeep(seriesMap['candlestick']);
  let { highLine: seriesHighLine, lowLine: seriesLowLine, bar: seriesBar } = seriesCandlestick[0];
  let { rect, highLine, lowhLine, bar } = chartData.chartCandlestick;

  context.save();
  rect.forEach(item => {
    let { color, bordercolor, opacity, borderWidth, rectPoint, upLinePoint, downLinePoint } = item;
    let { x, y, width, height } = rectPoint;
    let { startX: upLineStartX, startY: upLineStartY, endX: upLineEndX, endY: upLineEndY } = upLinePoint;
    let { startX: downLineStartX, startY: downLineStartY, endX: downLineEndX, endY: downLineEndY } = downLinePoint;

    context.strokeStyle = bordercolor;
    context.fillStyle = color;
    context.globalAlpha = opacity;
    context.strokeRect(x + borderWidth / 2, y + borderWidth / 2, width - borderWidth, height - borderWidth);
    context.fillRect(x, y, width, height);

    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = bordercolor;
    context.moveTo(upLineStartX, upLineStartY);
    context.lineTo(upLineEndX, upLineEndY);
    context.stroke();

    context.moveTo(downLineStartX, downLineStartY);
    context.lineTo(downLineEndX, downLineEndY);
    context.stroke();
  });
  context.restore();

  if (process == 1) {
    let { show: highLineShow, lineStyle: highLineStyle } = seriesHighLine;
    let { show: lowLineShow, lineStyle: lowLineStyle } = seriesLowLine;
    let { show: barShow, itemStyle: barItemStyle, lineStyle: barLineStyle } = seriesBar;
    let { color: highLineColor, lineWidth: highLineWidth, lineDash: highLineDash, opacity: highLineOpacity } = highLineStyle;
    let { color: lowLineColor, lineWidth: lowLineWidth, lineDash: lowLineDash, opacity: lowLineOpacity } = lowLineStyle;
    let { startX: highLineStartX, startY: highLineStartY, endX: highLineEndX, endY: highLineEndY } = highLine;
    let { startX: lowLineStartX, startY: lowLineStartY, endX: lowLineEndX, endY: lowLineEndY } = lowhLine;
    let { color: barColor, opacity: barOpacity } = barItemStyle;
    let { lineWidth: barLineWidth, lineColor: barLineColor } = barLineStyle;

    if (highLineShow) {
      context.save();
      context.beginPath();
      context.moveTo(highLineStartX, highLineStartY);
      context.lineTo(highLineEndX, highLineEndY);
      context.strokeStyle = highLineColor;
      context.lineWidth = highLineWidth;
      context.setLineDash(highLineDash);
      context.globalAlpha = highLineOpacity;
      context.stroke();
      context.restore();
    }

    if (lowLineShow) {
      context.save();
      context.beginPath();
      context.moveTo(lowLineStartX, lowLineStartY);
      context.lineTo(lowLineEndX, lowLineEndY);
      context.strokeStyle = lowLineColor;
      context.lineWidth = lowLineWidth;
      context.setLineDash(lowLineDash);
      context.globalAlpha = lowLineOpacity;
      context.stroke();
      context.restore();
    }

    if (barShow) {
      const { lineStartX, lineStartY, lineEndX, lineEndY, data } = bar;

      context.save();
      context.lineWidth = barLineWidth;
      context.strokeStyle = barLineColor;
      context.moveTo(lineStartX, lineStartY);
      context.lineTo(lineEndX, lineEndY);
      context.stroke();
      context.restore();

      data.forEach(barItem => {
        let { color, x, y, width, height } = barItem;

        context.save();
        context.beginPath();
        context.fillStyle = barColor == 'auto' ? color : barColor;
        context.globalAlpha = barOpacity;
        context.fillRect(x, y, width, -height);
        context.restore();
      });
    }
  }

  console.log('complete drawChartCandlestick', process);
}

function drawChartHeatmap(process) {
  let { context, opts, chartData } = this;
  let { xEachSpacing, yEachSpacing } = chartData.axisData;
  let { label: globalLabel } = opts;

  const xSplitLineWidth = opts.xAxis.axisSplitLine.lineStyle.lineWidth;
  const ySplitLineWidth = opts.yAxis.axisSplitLine.lineStyle.lineWidth;

  chartData.chartHeatmap.forEach(HeatmapItem => {
    let { data, label } = HeatmapItem;
    let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin } = label;

    data.forEach(dataItem => {
      let { positionX, positionY, color: dataItemColor, useSplit } = dataItem;
      context.save();
      context.beginPath();
      if (useSplit) {
        context.rect(positionX + ySplitLineWidth * 2, positionY + xSplitLineWidth * 2, xEachSpacing - ySplitLineWidth * 4, yEachSpacing - xSplitLineWidth * 4);
      } else {
        context.rect(positionX, positionY, xEachSpacing, yEachSpacing);
      }
      context.fillStyle = dataItemColor;
      context.globalAlpha = process;
      context.fill();
      context.restore();
    });

    if (process == 1) {
      // globalLabel 权重大于 seriesLabel
      labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
      labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
      labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
      labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

      if (labelShow) {
        context.save();
        context.font = `${labelFontSize}px`;
        context.fillStyle = labelColor == 'auto' ? '#ffffff' : labelColor;
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        data.forEach(dataItem => {
          let { positionX, positionY } = dataItem;
          let text = dataItem[2];
          context.fillText(text, positionX + xEachSpacing / 2, positionY + yEachSpacing / 2);
        });
        context.restore();
      }
    }
  });
  console.log('complete drawChartHeatmap', process);
}

// import cloneDeep from 'lodash.clonedeep'

function drawChartTreemap(process) {
  let { context, opts, chartData } = this;
  let { label: globalLabel } = opts;
  let { label: seriesLabel, splitLine } = chartData.chartTreemap.data;
  let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin } = seriesLabel;
  let { show: splitLineShow, lineWidth: splitLineWidth, color: splitLineColor } = splitLine;

  context.save();
  chartData.chartTreemap.children.forEach((item, index) => {
    let { x0, y0, x1, y1, data } = item;
    let width = x1 - x0;
    let height = y1 - y0;

    context.fillStyle = data.itemStyle.color;
    context.globalAlpha = process;
    if (splitLineShow) {
      context.lineWidth = splitLineWidth;
      context.strokeStyle = splitLineColor;
      context.strokeRect(x0, y0, width, height);
    }
    context.fillRect(x0, y0, width, height);
  });
  context.restore();

  // 绘制文本标签
  if (process == 1) {
    // globalLabel 权重大于 seriesLabel
    labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
    labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
    labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
    labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

    if (labelShow) {
      context.save();
      chartData.chartTreemap.children.forEach(item => {
        let { x0, y0, x1, y1, data } = item;
        let { name, itemStyle } = data;
        let x = x0 + (x1 - x0) / 2;
        let y = y0 + (y1 - y0) / 2;

        let min = Math.min(x1 - x0, y1 - y0);

        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = `${min * 0.2}px`;
        context.strokeStyle = labelColor == 'auto' ? itemStyle.color : labelColor;
        context.fillStyle = '#ffffff';
        context.strokeText(name, x, y);
        context.fillText(name, x, y);
      });
      context.restore();
    }
  }

  console.log('complete drawChartTreemap', process);
}

// import cloneDeep from 'lodash.clonedeep'

function drawChartTagCloud(process) {
  let { opts, chartData } = this;
  let { element, width, height } = opts;

  element.width = width;
  element.height = height;
  const context = element.getContext('2d');

  chartData.chartTagCloud.data.forEach(item => {
    let { text, x, y, font, size, rotate, itemStyle } = item;

    context.save();
    context.beginPath();
    context.font = `${size}px ${font}`;
    context.fillStyle = itemStyle.color;
    context.textAlign = 'center';
    context.translate(width / 2 + x, height / 2 + y);
    context.rotate((rotate * Math.PI) / 180);
    context.fillText(text, 0, 0);
    context.restore();
  });

  console.log('complete drawChartTagCloud', process);
}

function drawCharts() {
  const { animation, animationDuration, animationTiming } = this.opts;
  this.animationInstance && this.animationInstance.stop();

  this.animationInstance = new Animation({
    animation,
    animationDuration,
    animationTiming,
    onProcess: process => {
      // 绘制图表
      console.log('dadong process:', process);

      drawBackground.call(this); // 绘制背景
      if (this.seriesMap.line || this.seriesMap.bar || this.seriesMap.scatter || this.seriesMap.candlestick || this.seriesMap.heatmap) {
        drawXAxisGrid.call(this); // 有相同xy轴的图表，只绘制一次
        drawYAxisGrid.call(this); // 有相同xy轴的图表，只绘制一次
      }
      Object.keys(this.seriesMap).forEach(type => {
        switch (type) {
          case 'bar':
            drawChartBar.call(this, process);
            break
          case 'line':
            drawChartLine.call(this, process);
            break
          case 'pie':
            drawChartPie.call(this, process);
            break
          case 'radar':
            drawAxisRadar.call(this);
            drawChartRadar.call(this, process);
            break
          case 'scatter':
            drawChartScatter.call(this, process);
            break
          case 'funnel':
            drawChartPie$1.call(this, process);
            break
          case 'candlestick':
            drawChartCandlestick.call(this, process);
            break
          case 'heatmap':
            drawChartHeatmap.call(this, process);
            break
          case 'treemap':
            drawChartTreemap.call(this, process);
            break
          case 'tagCloud':
            drawChartTagCloud.call(this, process);
            break
        }
      });
      if (this.seriesMap.line || this.seriesMap.bar || this.seriesMap.scatter || this.seriesMap.candlestick || this.seriesMap.heatmap) {
        drawXAxis.call(this); // 有相同xy轴的图表，只绘制一次
        drawYAxis.call(this); // 有相同xy轴的图表，只绘制一次
      }
      if (process === 1) {
        drawLegend.call(this); // 绘制图例
        drawTooltip.call(this); // 绘制tooltip
      }
    },
    onAnimationFinish: () => {
      this.event.trigger('renderComplete');
    },
  });
}

class Charts {
  constructor(opts = {}) {
    this.config = Object.assign({}, Config);
    this.opts = Object.assign({}, opts);
    this.context = this.opts.element.getContext('2d');
    this.tooltipData = {
      tooltipTitle: '',
      data: [],
      maxTextWidth: 0,
      offset: {},
    };
    this.legendData = {};
    this.seriesMap = {};
    this.chartData = {};

    // 绑定事件
    this.event = new Event();
    this.event.addEventListener('renderComplete', opts.onRenderComplete);

    this.scrollOption = {
      currentOffset: 0,
      startTouchX: 0,
      distance: 0,
    };
    // 计算图表数据
    calChartsData.call(this);

    // 绘制图表
    drawCharts.call(this);
  }

  updateData(updateOpts = {}) {
    Object.keys(updateOpts).forEach(key => {
      if (key == 'series') {
        this.opts.series = lodash_clonedeep(updateOpts.series);
        calSeries.call(this);
      } else {
        replenishData(updateOpts, key, this.opts, key, true);
      }
    });

    console.log('complete updateData', this);

    // 计算图表数据
    calChartsData.call(this);

    // 绘制图表
    drawCharts.call(this);
  }

  showTooltip(e) {
    const { animation, tooltip } = this.opts;
    const animationCache = animation;

    if (!tooltip.show) return

    const { currentData, offset } = this.getCurrentIndex(e);

    this.tooltipData = {
      tooltipTitle: '',
      data: [],
      maxTextWidth: 0,
      offset,
    };

    Object.keys(currentData).forEach(type => {
      const currentIndex = currentData[type];
      switch (type) {
        case 'bar':
          calBarChartTooltipData.call(this, currentIndex);
          break
        case 'line':
          calLineChartTooltipData.call(this, currentIndex);
          break
        case 'pie':
          calPieChartTooltipData.call(this, currentIndex);
          break
        case 'radar':
          calRadarChartTooltipData.call(this, currentIndex);
          break
        case 'candlestick':
        case 'k':
          calCandlestickChartTooltipData.call(this, currentIndex);
          break
      }
    });

    Object.keys(currentData).forEach(type => {
      switch (type) {
        case 'bar':
        case 'line':
        case 'candlestick':
        case 'k':
          if (!this.tooltipData.axisPointerData) {
            calAxisPointerData.call(this, currentData[type]);
          }
          break
      }
    });

    calTooltipContainerData.call(this);

    console.log('complete showTooltip', this.opts, currentData, offset);
    this.opts.animation = false;
    drawCharts.call(this);
    this.opts.animation = animationCache;
  }

  hideTooltip() {
    const { opts, tooltipData } = this;
    const { animation } = opts;
    const animationCache = animation;

    this.tooltipData = {
      tooltipTitle: '',
      data: [],
      maxTextWidth: 0,
      offset: {},
    };

    console.log('complete hideTooltip', tooltipData);

    this.opts.animation = false;
    drawCharts.call(this);
    this.opts.animation = animationCache;
  }

  getCurrentIndex(e) {
    const touches = e.touches && e.touches.length ? e.touches : e.changedTouches;
    const offset = { x: touches[0].offsetX || 0, y: touches[0].offsetY || 0 };

    let currentData = {};

    Object.keys(this.seriesMap).forEach(type => {
      switch (type) {
        case 'bar':
        case 'line':
        case 'candlestick':
        case 'k':
          currentData[type] = getAxisChartCurrentIndex.call(this, offset);
          break
        case 'pie':
          currentData[type] = getPieChartCurrentIndex.call(this, offset);
          break
        case 'radar':
          currentData[type] = getRadarChartCurrentIndex.call(this, offset);
          break
      }
    });

    console.log('complete getCurrentIndex', currentData, this.chartData);

    return {
      currentData,
      offset,
    }
  }

  scrollStart(e) {
    if (e.touches[0] && this.opts.enableScroll === true) {
      this.scrollOption.startTouchX = e.touches[0].clientX;
    }
  }

  scroll(e) {
    // TODO throtting...
    if (e.touches[0] && this.opts.enableScroll === true) {
      let _distance = e.touches[0].clientX - this.scrollOption.startTouchX;
      let { currentOffset } = this.scrollOption;
      let validDistance = calValidDistance(currentOffset + _distance, this.chartData, this.opts, this.opts);

      this.scrollOption.distance = _distance = validDistance - currentOffset;
      let opts = Object.assign({}, this.opts, {
        _scrollDistance_: currentOffset + _distance,
        animation: false,
      });
      this.opts = opts;
      console.log('dadong scroll:', opts._scrollDistance_);
      drawCharts.call(this);
    }
  }

  scrollEnd(e) {
    if (this.opts.enableScroll === true) {
      let { currentOffset, distance } = this.scrollOption;
      this.scrollOption.currentOffset = currentOffset + distance;
      this.scrollOption.distance = 0;
    }
  }
}

export default Charts;
//# sourceMappingURL=qacharts.js.map
