/*
 * banner
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
  addEventListener(type, listener = function() {}) {
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

var Config = {
  animation: true,
  animationDuration: 1000,
  animationTiming: 'default', // default, easeIn, easeOut, easeInOut, linear
  backgroundColor: '#ffffff',
  colors: ['#7cb5ec', '#f7a35c', '#434348', '#90ed7d', '#f15c80', '#8085e9'], // wxcharts调色盘
  label: {
    show: true,
    fontSize: 15,
    color: 'auto',
    margin: 2,
  },
  legend: {
    show: true,
    type: 'default', // default, circle, line, rect
    marginTop: 8,
    itemGap: 15,
    shapeWidth: 15,
    shapeHeight: 15,
    textStyle: {
      fontSize: 15,
      color: '#333333',
      padding: 5,
    },
  },
  padding: [20, 20, 20, 20],
  bar: {
    barMaxWidth: 20,
    barMinWidth: 1,
    barWidth: 'auto',
    barGap: 5,
  },
  pie: {
    center: ['50%', '50%'],
    radius: [0, '80%'],
    offsetAngle: 0,
    disablePieStroke: true,
    labelLine: {
      lineDotRadius: 3,
      lineWidth: 1,
      length1: 25,
      length2: 15,
    },
  },
  line: {
    showIndex: [], // 控制显示的下标数组
    smooth: false, // 是否显示曲线
    connectNulls: false, // 是否连接空值数据
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
  radar: {
    area: {
      show: true,
      color: 'auto',
      opacity: 0.5,
    },
    line: {
      show: true,
      lineWidth: 1,
      color: 'auto',
      opacity: 1,
    },
    symbol: {
      show: true,
      type: 'circle', // circle
      size: 7,
      color: 'auto',
    },
  },
  radarAxis: {
    shape: 'polygon', // polygon. circle
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
        color: '#f5f5f5', // 奇数区域颜色与背景色相同
        opacity: 1,
      },
      even: {
        show: true,
        color: '#e6e6e6', // 奇数区域颜色与背景色相同
        opacity: 1,
      },
    },
  },
  xAxis: {
    show: true,
    boundaryGap: true, // boundaryGap为true时, 这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
    axisName: {
      show: true,
      text: 'x轴名称',
      gap: 10,
      textStyle: {
        color: '#666666',
        fontSize: 15,
      },
    },
    axisLabel: {
      show: true,
      showIndex: [], // 控制显示的下标数组
      rotate: 0,
      gap: 5,
      textStyle: {
        color: '#666666',
        fontSize: 12,
      },
    },
    axisTick: {
      show: true,
      showIndex: [], // 控制显示的下标数组
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
      showIndex: [], // 控制显示的下标数组
      lineStyle: {
        lineWidth: 1,
        color: '#dddddd',
      },
    },
  },
  yAxis: {
    show: true,
    max: 'auto',
    min: 'auto',
    splitNumber: 4,
    axisName: {
      show: true,
      text: 'y轴名称',
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
};

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
 * 将来源对象数据补充到目标对象中
 * @param {String} key
 * @param {Object} sources // 来源对象
 * @param {Object} target  // 目标对象
 * @param {Boolean} isCover  // 是否强制来源对象数据覆盖目标对象数据
 */
function replenishData(key, sources, target, isCover = false) {
  if (!target[key] && target[key] !== 0 && target[key] !== '' && typeof target[key] !== 'boolean') {
    // console.log(`空值, ${key}, target[key]: ${target[key]}, sources[key]: ${sources[key]}, isCover: ${isCover}`)
    // (opts参数为空时赋值)
    if (isObject(sources[key])) {
      target[key] = Object.assign({}, sources[key]);
    } else if (isArray(sources[key])) {
      target[key] = [].concat(sources[key]);
    } else {
      target[key] = sources[key];
    }
  } else {
    // console.log(`不为空值, ${key}, target[key]: ${target[key]}, sources[key]: ${sources[key]}, isCover: ${isCover}`)
    // (opts参数不为为空时，若数据类型为原始类型和数组则不做处理，对象类型时递归)
    if (isCover) {
      if (isObject(sources[key])) {
        Object.keys(sources[key]).forEach(_key => {
          replenishData(_key, sources[key], target[key], isCover);
        });
      } else if (isArray(sources[key])) {
        if (key == 'series') {
          sources[key].forEach((sourcesItem, sourcesIndex) => {
            Object.keys(sourcesItem).forEach(_key => {
              replenishData(_key, sources[key][sourcesIndex], target[key][sourcesIndex], true);
            });
          });
        } else {
          target[key] = [].concat(sources[key]);
        }
      } else {
        target[key] = sources[key];
      }
    } else {
      if (isObject(target[key])) {
        Object.keys(sources[key]).forEach(_key => {
          replenishData(_key, sources[key], target[key], isCover);
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

  replenishData('animation', config, opts);
  replenishData('animationDuration', config, opts);
  replenishData('animationTiming', config, opts);
  replenishData('backgroundColor', config, opts);
  replenishData('colors', config, opts);
  replenishData('padding', config, opts);
  replenishData('legend', config, opts);

  switch (opts.type) {
    case 'bar':
      replenishData('yAxis', config, opts);
      replenishData('xAxis', config, opts);
      break
    case 'line':
      replenishData('yAxis', config, opts);
      replenishData('xAxis', config, opts);
      break
    case 'pie':
      break
    case 'radar':
      replenishData('radarAxis', config, opts);
      break
  }

  calSeries.call(this);

  console.log('complete calOptions', this);
}

/**
 * 将series的数据补充完整
 */
function calSeries() {
  let { config, opts } = this;

  switch (opts.type) {
    case 'bar':
      opts.series.forEach(seriesItem => {
        replenishData('label', config, seriesItem);
        replenishData('barMaxWidth', config.bar, seriesItem);
        replenishData('barMinWidth', config.bar, seriesItem);
        replenishData('barWidth', config.bar, seriesItem);
        replenishData('barGap', config.bar, seriesItem);
      });
      break
    case 'line':
      opts.series.forEach(seriesItem => {
        replenishData('label', config, seriesItem);
        replenishData('smooth', config.line, seriesItem);
        replenishData('connectNulls', config.line, seriesItem);
        replenishData('line', config.line, seriesItem);
        replenishData('symbol', config.line, seriesItem);
        replenishData('area', config.line, seriesItem);
      });
      break
    case 'pie':
      opts.series.forEach(seriesItem => {
        replenishData('label', config, seriesItem);
        replenishData('center', config.pie, seriesItem);
        replenishData('radius', config.pie, seriesItem);
        replenishData('labelLine', config.pie, seriesItem);
        replenishData('offsetAngle', config.pie, seriesItem);
        replenishData('disablePieStroke', config.pie, seriesItem);
      });
      break
    case 'radar':
      opts.series.forEach(seriesItem => {
        replenishData('label', config, seriesItem);
        replenishData('line', config.radar, seriesItem);
        replenishData('symbol', config.radar, seriesItem);
        replenishData('area', config.radar, seriesItem);
      });
      break
  }
}

var Timing = {
  easeIn: function(pos) {
    return Math.pow(pos, 3)
  },
  easeOut: function(pos) {
    return Math.pow(pos - 1, 3) + 1
  },
  easeInOut: function(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3)
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2)
    }
  },
  linear: function(pos) {
    return pos
  },
};

class Animation {
  constructor(opts) {
    this.isStop = false;

    let { type, animation, animationDuration, animationTiming, onProcess, onAnimationFinish } = opts;

    let createAnimationFrame = function() {
      if (typeof requestAnimationFrame !== 'undefined') {
        return requestAnimationFrame
      } else if (typeof setTimeout !== 'undefined') {
        return function(step) {
          setTimeout(function() {
            let timeStamp = +new Date();
            step(timeStamp);
          }, 17);
        }
      } else {
        return function(step) {
          step(null);
        }
      }
    };
    let animationFrame = createAnimationFrame();

    if (animation) {
      if (animationTiming == 'default') {
        switch (type) {
          case 'bar':
          case 'line':
            animationTiming = 'easeIn';
            break
          case 'pie':
          case 'radar':
            animationTiming = 'easeInOut';
            break
        }
      }
      let timingFunction = Timing[animationTiming];
      let startTimeStamp = null;

      let step = function() {
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

function calSeriesColor() {
  const colors = this.opts.colors;
  const colorsLength = colors.length;

  if (this.opts.type == 'pie') {
    this.opts.series.forEach(seriesItem => {
      seriesItem.data.forEach((dataItem, dataIndex) => {
        dataItem.itemStyle = dataItem.itemStyle || {};
        if (!dataItem.itemStyle.color) {
          dataItem.itemStyle.color = colors[dataIndex % colorsLength];
        }
      });
    });
  } else {
    this.opts.series.forEach((seriesItem, seriesIndex) => {
      seriesItem.itemStyle = seriesItem.itemStyle || {};
      if (!seriesItem.itemStyle.color) {
        seriesItem.itemStyle.color = colors[seriesIndex % colorsLength];
      }
    });
  }

  console.log('complete calSeriesColor');
}

function calLegendData() {
  if (this.opts.legend.show) {
    let { context, opts } = this;
    let { type, width, legend, series } = opts;
    let { shapeWidth, shapeHeight, itemGap, marginTop, textStyle } = legend;
    let { fontSize, padding } = textStyle;
    let seriesDataList = [];
    let legendWidth = 0;
    let legendWidthNum = 0;
    let legendList = [];
    let currentRow = [];

    context.font = `${fontSize}px`;

    if (type == 'pie') {
      seriesDataList = series[0].data;
    } else {
      seriesDataList = series;
    }

    seriesDataList.forEach(seriesDataItem => {
      let { name, itemStyle } = seriesDataItem;
      let measureText = this.context.measureText(name || '').width;
      let itemWidth = shapeWidth + padding + itemGap + measureText;

      let obj = {
        name,
        measureText,
        itemStyle,
      };

      if (legendWidthNum + itemWidth > width) {
        legendList.push(currentRow);
        legendWidthNum = itemWidth;
        currentRow = [obj];
      } else {
        legendWidthNum += itemWidth;
        legendWidth = Math.max(legendWidth, legendWidthNum);
        currentRow.push(obj);
      }
    });

    if (legendList.length == 0) {
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

  console.log('complete calLegendData');
}

function calAxisYData() {
  let { context, opts, legendData, chartData } = this;
  let { width, height, xAxis, yAxis, padding, categories, series } = opts;

  let {
    show: xAxisShow,
    format: xAxisFormat,
    axisName: xAxisName,
    axisLabel: xAxisLabel,
    axisTick: xAxisTick,
    axisLine: xAxisLine,
    axisSplitLine: xAxisSplitLine,
    boundaryGap,
  } = xAxis;

  let {
    show: yAxisShow,
    max,
    min,
    splitNumber,
    format: yAxisFormat,
    axisName: yAxisName,
    axisLabel: yAxisLabel,
    axisTick: yAxisTick,
    axisLine: yAxisLine,
    axisSplitLine: yAxisSplitLine,
  } = yAxis;

  let { show: xAxisNameShow, text: xAxisNameText, gap: xAxisNameGap, textStyle: xAxisNameTextStyle } = xAxisName;
  let { show: xAxisLabelShow, gap: xAxisLabelGap, rotate: xAxisLabelRotate, textStyle: xAxisLabelTextStyle } = xAxisLabel;
  let { show: xAxisTickShow, length: xAxisTickLength, lineStyle: xAxisTickStyle, alignWithLabel } = xAxisTick;
  let { show: xAxisLineShow, lineStyle: xAxisLineStyle } = xAxisLine;
  let { show: xAxisSplitLineShow, lineStyle: xAxisSplitLineStyle } = xAxisSplitLine;

  let { show: yAxisNameShow, text: yAxisNameText, gap: yAxisNameGap, textStyle: yAxisNameTextStyle } = yAxisName;
  let { show: yAxisLabelShow, gap: yAxisLabelGap, textStyle: yAxisLabelTextStyle } = yAxisLabel;
  let { show: yAxisTickShow, length: yAxisTickLength, lineStyle: yAxisTickStyle } = yAxisTick;
  let { show: yAxisLineShow, lineStyle: yAxisLineStyle } = yAxisLine;
  let { show: yAxisSplitLineShow, lineStyle: yAxisSplitLineStyle } = yAxisSplitLine;

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

  let xStartInit = xStart;
  let yStartInit = yStart;

  let xSpacingNumber = boundaryGap ? categories.length : categories.length - 1;
  let xSpacing = 0;
  let xEachSpacing = 0;
  let xAxisLabelMaxHeight = 0;
  let xAxisLabelMaxWidht = 0;
  let xAxisNameTextWidth = 0;

  let isSamePart = true; // 是否同时为正数或负数，为false时同时存在正负数
  let yZero = 0;
  let plusSpacing = 0;
  let minusSpacing = 0;
  let yAxisLabelText = [];
  let yAxisLabelMaxWidth = 0;
  let ySpacing = 0;
  let yEachSpacing = 0;
  let maxData = 0;
  let minData = 0;
  let dataRange = 0;
  let dataEachRange = 0;

  let limit = 0;
  let multiple = 1;

  chartData.xAxis = {
    xAxisLabelMaxHeight: 0,
    xStart: 0,
    xEnd: 0,
    xSpacing: 0,
    xEachSpacing: 0,
    xAxisLabelPoint: [],
    xAxisTickPoint: [],
    xAxisLinePoint: {},
    xAxisSplitLinePoint: [],
    xAxisNamePoint: {},
  };
  chartData.yAxis = {
    isSamePart: true,
    yAxisLabelMaxWidth: 0,
    yStart: 0,
    yEnd: 0,
    ySpacing: 0,
    yEachSpacing: 0,
    maxData: 0,
    minData: 0,
    dataRange: 0,
    dataEachRange: 0,
    yAxisLabelPoint: [],
    yAxisTickPoint: [],
    yAxisLinePoint: {},
    yAxisSplitLinePoint: [],
    yAxisNamePoint: {},
  };

  // 计算y轴数据的最大值最小值
  let allDataArr = series.reduce((allDataArr, seriesItem) => {
    return allDataArr.concat(seriesItem.data)
  }, []);
  maxData = Math.max(...allDataArr);
  minData = Math.min(...allDataArr);

  if (maxData >= 0 && minData >= 0) {
    minData = typeof min === 'number' ? min : 0;
  } else if (maxData <= 0 && minData <= 0) {
    maxData = typeof max === 'number' ? max : 0;
  } else {
    maxData = typeof max === 'number' ? max : maxData;
    minData = typeof min === 'number' ? max : minData;
  }

  dataRange = maxData - minData;
  if (dataRange >= 10000) {
    limit = 1000;
  } else if (dataRange >= 1000) {
    limit = 100;
  } else if (dataRange >= 100) {
    limit = 10;
  } else if (dataRange >= 10) {
    limit = 5;
  } else if (dataRange >= 1) {
    limit = 1;
  } else if (dataRange >= 0.1) {
    limit = 0.1;
  } else if (dataRange >= 0.01) {
    limit = 0.01;
  } else if (dataRange >= 0.001) {
    limit = 0.001;
  } else {
    limit = 0.0001;
  }

  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }

  maxData = maxData * multiple;
  minData = minData * multiple;

  if (max === 'auto') {
    maxData = Math.ceil(maxData);
    while (maxData % limit !== 0) {
      maxData++;
    }
  }
  if (min === 'auto') {
    minData = Math.floor(minData);
    while (minData % limit !== 0) {
      minData--;
    }
  }

  // 修正后的 maxData, minData, dataRange, isSamePart
  maxData = maxData / multiple;
  minData = minData / multiple;
  dataRange = maxData - minData;
  isSamePart = maxData > 0 && minData < 0 ? false : true; // 是否同时为正数或负数，为false时同时存在正负数

  // 计算y轴数据
  dataEachRange = dataRange / splitNumber;
  context.font = `${yAxisLabelFontSize}px`;
  if (isSamePart) {
    for (let i = 0; i <= splitNumber; i++) {
      let num = minData + dataEachRange * i;
      num = num.toFixed(multiple.toString().length - 1);
      let text = yAxisFormat ? yAxisFormat(num) : num;
      yAxisLabelMaxWidth = Math.max(context.measureText(text).width, yAxisLabelMaxWidth);
      yAxisLabelText.push(text);
    }
  } else {
    yAxisLabelText.push(0);

    let num = 0;
    while (num < maxData) {
      num += dataEachRange;
      yAxisLabelText.push(num);
    }

    num = 0;
    while (num > minData) {
      num -= dataEachRange;
      yAxisLabelText.unshift(num);
    }

    yAxisLabelText.forEach(text => {
      text = yAxisFormat ? yAxisFormat(text) : text;
      yAxisLabelMaxWidth = Math.max(context.measureText(text).width, yAxisLabelMaxWidth);
    });
  }

  // 修正xStart
  if (yAxisLabelShow) {
    xStart += yAxisLabelMaxWidth + yAxisLabelGap;
  }
  if (yAxisShow && yAxisTickShow) {
    xStart += yAxisTickLength;
  }

  // 修正xEnd
  if (xAxisShow && xAxisNameShow) {
    context.font = `${xAxisNameFontSize}px`;
    xAxisNameTextWidth = context.measureText(xAxisNameText).width;
    xEnd -= xAxisNameTextWidth + xAxisNameGap;
    xSpacing = xEnd - xStart;
    xEachSpacing = Math.floor(xSpacing / xSpacingNumber);
    xEnd = xStart + xEachSpacing * xSpacingNumber;
  }

  // 修正yStart
  if (xAxisShow && xAxisLabelShow) {
    context.font = `${xAxisLabelFontSize}px`;
    categories.forEach(item => {
      item = xAxisFormat ? xAxisFormat(item) : item;
      xAxisLabelMaxWidht = Math.max(xAxisLabelMaxWidht, context.measureText(item).width);
    });

    if (xAxisLabelRotate == 0) {
      xAxisLabelMaxHeight = xAxisLabelFontSize;
    } else {
      xAxisLabelMaxHeight =
        Math.abs(xAxisLabelMaxWidht * Math.sin((xAxisLabelRotate * Math.PI) / 180)) +
        Math.abs(xAxisLabelFontSize * Math.cos((xAxisLabelRotate * Math.PI) / 180));
    }

    yStart -= xAxisLabelMaxHeight + xAxisLabelGap;
  }
  if (xAxisShow && xAxisTickShow) {
    if (isSamePart) {
      yStart -= xAxisTickLength;
    }
  }

  // 修正yEnd
  if (yAxisShow && yAxisNameShow) {
    yEnd += yAxisNameFontSize + yAxisNameGap;
    ySpacing = yStart - yEnd;
    yEachSpacing = Math.floor(ySpacing / (yAxisLabelText.length - 1));
    yEnd = yStart - yEachSpacing * (yAxisLabelText.length - 1); // yEachSpacing经由Math.floor计算后存在误差，需重新计算yEnd
    ySpacing = yStart - yEnd;
  }

  // 计算 yAxis 各项数据 (先计算y轴再计算x轴)
  // 计算 yAxisLabelPoint
  chartData.yAxis.yAxisLabelPoint = yAxisLabelText.reduce((arr, item, index) => {
    let _xStart = xStartInit;

    arr.push({
      text: item,
      x: _xStart + yAxisLabelMaxWidth,
      y: yStart - xAxisLineWidth / 2 - yEachSpacing * index,
    });

    if (!isSamePart && item === 0) {
      yZero = yStart - xAxisLineWidth / 2 - yEachSpacing * index; // 存在正负值时计算0线的y坐标
      plusSpacing = yZero - yEnd;
      minusSpacing = yStart - yZero;
    }

    return arr
  }, []);

  // 计算 yAxisTickPoint
  if (yAxisShow && yAxisTickShow) {
    let _xStart = xStartInit;
    if (yAxisShow && yAxisLabelShow) {
      _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
    }

    chartData.yAxis.yAxisTickPoint = chartData.yAxis.yAxisLabelPoint.reduce((arr, item, index) => {
      arr.push({
        startX: _xStart, // 起点x坐标
        startY: yStart - yAxisTickLineWidth / 2 - yEachSpacing * index, // 起点y坐标
        endX: _xStart + yAxisTickLength, // 终点x坐标
        endY: yStart - yAxisTickLineWidth / 2 - yEachSpacing * index, // 终点y坐标
      });
      return arr
    }, []);
  }

  // 计算 yAxisSplitLinePoint
  if (yAxisShow && yAxisSplitLineShow) {
    let _xStart = xStartInit;
    if (yAxisShow && yAxisLabelShow) {
      _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
    }
    if (yAxisShow && yAxisTickShow) {
      _xStart += yAxisTickLength; // 更新_xStart数据
    }

    chartData.yAxis.yAxisSplitLinePoint = chartData.yAxis.yAxisLabelPoint.reduce((arr, item, index) => {
      arr.push({
        startX: _xStart, // 起点x坐标 ps: 这里应该是不用加yAxisLineWidth的
        startY: yStart - yAxisSplitLineWidth / 2 - yEachSpacing * index, // 起点y坐标
        endX: xEnd, // 终点x坐标
        endY: yStart - yAxisSplitLineWidth / 2 - yEachSpacing * index, // 终点y坐标
      });
      return arr
    }, []);
  }

  // 计算 yAxisLinePoint
  if (yAxisShow && yAxisLineShow) {
    let _xStart = xStartInit;
    if (yAxisShow && yAxisLabelShow) {
      _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
    }
    if (yAxisShow && yAxisTickShow) {
      _xStart += yAxisTickLength; // 更新_xStart数据
    }

    chartData.yAxis.yAxisLinePoint = {
      startX: _xStart + yAxisLineWidth / 2, // 起点x坐标
      startY: yStart, // 起点y坐标
      endX: _xStart + yAxisLineWidth / 2, // 终点x坐标
      endY: yEnd - yAxisTickLineWidth, // 终点y坐标
    };
  }

  // 计算 yAxisNamePoint
  if (yAxisShow && yAxisNameShow) {
    let _xStart = xStartInit;
    if (yAxisShow && yAxisLabelShow) {
      _xStart += yAxisLabelMaxWidth + yAxisLabelGap; // 更新_xStart数据
    }
    if (yAxisShow && yAxisTickShow) {
      _xStart += yAxisTickLength; // 更新_xStart数据
    }
    if (yAxisShow && yAxisLineShow) {
      _xStart += yAxisLineWidth / 2; // 更新_xStart数据
    }

    chartData.yAxis.yAxisNamePoint = {
      text: yAxisNameText,
      x: _xStart,
      y: yEnd - yAxisNameGap,
    };
  }

  // 计算 xAxis 各项数据
  // 计算 xAxisLabelPoint
  chartData.xAxis.xAxisLabelPoint = categories.reduce((arr, item, index) => {
    let _yStart = yStartInit;

    if (boundaryGap) {
      arr.push({
        text: item,
        x: xStart + xEachSpacing * (index + 1) - xEachSpacing / 2,
        y: _yStart - xAxisLabelMaxHeight,
      });
    } else {
      arr.push({
        text: item,
        x: xStart + xEachSpacing * index,
        y: _yStart - xAxisLabelMaxHeight,
      });
    }
    return arr
  }, []);

  // 计算 xAxisSplitLinePoint
  if (xAxisShow && xAxisSplitLineShow) {
    let _yStart = yStartInit;
    if (xAxisShow && xAxisLabelShow) {
      _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新yStart数据
    }
    if (xAxisShow && xAxisTickShow) {
      if (isSamePart) {
        _yStart -= xAxisTickLength; // 更新yStart数据
      }
    }

    for (let index = 0, xAxisSplitLineNumber = boundaryGap ? categories.length + 1 : categories.length; index < xAxisSplitLineNumber; index++) {
      chartData.xAxis.xAxisSplitLinePoint.push({
        startX: xStart + xAxisSplitLineWidth / 2 + xEachSpacing * index,
        startY: _yStart,
        endX: xStart + xAxisSplitLineWidth / 2 + xEachSpacing * index,
        endY: yEnd,
      });
    }
  }

  // 计算 xAxisTickPoint
  if (xAxisShow && xAxisTickShow) {
    let _yStart = yStartInit;

    if (isSamePart) {
      if (xAxisShow && xAxisLabelShow) {
        _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新yStart数据
      }
      _yStart -= xAxisTickLength;
    } else {
      _yStart = yZero;
    }

    // alignWithLabel为true时，刻度线与标签对齐
    let xAxisTickNumber = 0;
    if (boundaryGap) {
      xAxisTickNumber = alignWithLabel ? categories.length : categories.length + 1;
    } else {
      xAxisTickNumber = categories.length;
    }

    for (let index = 0; index < xAxisTickNumber; index++) {
      if (boundaryGap && alignWithLabel) {
        chartData.xAxis.xAxisTickPoint.push({
          startX: xStart + xAxisTickLineWidth / 2 + xEachSpacing * index + xEachSpacing / 2,
          startY: _yStart,
          endX: xStart + xAxisTickLineWidth / 2 + xEachSpacing * index + xEachSpacing / 2,
          endY: _yStart + xAxisTickLength,
        });
      } else {
        chartData.xAxis.xAxisTickPoint.push({
          startX: xStart + xAxisTickLineWidth / 2 + xEachSpacing * index,
          startY: _yStart,
          endX: xStart + xAxisTickLineWidth / 2 + xEachSpacing * index,
          endY: _yStart + xAxisTickLength,
        });
      }
    }
  }

  // 计算 xAxisLinePoint
  if (xAxisShow && xAxisLineShow) {
    let _yStart = yStartInit;
    if (isSamePart) {
      if (xAxisShow && xAxisLabelShow) {
        _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新yStart数据
      }
      if (xAxisShow && xAxisTickShow) {
        _yStart -= xAxisTickLength; // 更新yStart数据
      }
      _yStart -= xAxisLineWidth / 2;
    } else {
      _yStart = yZero;
    }

    chartData.xAxis.xAxisLinePoint = {
      startX: xStart,
      startY: _yStart,
      endX: xEnd + yAxisTickLineWidth,
      endY: _yStart,
    };
  }

  // 计算 xAxisNamePoint
  if (xAxisShow && xAxisNameShow) {
    let _yStart = yStartInit;
    if (isSamePart) {
      if (xAxisShow && xAxisLabelShow) {
        _yStart -= xAxisLabelMaxHeight + xAxisLabelGap; // 更新yStart数据
      }
      if (xAxisShow && xAxisTickShow) {
        _yStart -= xAxisTickLength; // 更新yStart数据
      }
      if (xAxisShow && xAxisLineShow) {
        _yStart -= xAxisLineWidth / 2; // 更新yStart数据
      }
    } else {
      _yStart = yZero - xAxisLineWidth / 2;
    }

    chartData.xAxis.xAxisNamePoint = {
      text: xAxisNameText,
      x: xEnd + xAxisNameGap,
      y: _yStart,
    };
  }

  chartData.xAxis.xAxisLabelMaxHeight = xAxisLabelMaxHeight;
  chartData.xAxis.xStart = xStart;
  chartData.xAxis.xEnd = xEnd;
  chartData.xAxis.xSpacing = xSpacing;
  chartData.xAxis.xEachSpacing = xEachSpacing;

  chartData.yAxis.yAxisLabelMaxWidth = yAxisLabelMaxWidth;
  chartData.yAxis.isSamePart = isSamePart;
  chartData.yAxis.yZero = yZero;
  chartData.yAxis.plusSpacing = plusSpacing;
  chartData.yAxis.minusSpacing = minusSpacing;
  chartData.yAxis.yStart = yStart;
  chartData.yAxis.yEnd = yEnd;
  chartData.yAxis.ySpacing = ySpacing;
  chartData.yAxis.yEachSpacing = yEachSpacing;
  chartData.yAxis.maxData = maxData;
  chartData.yAxis.minData = minData;
  chartData.yAxis.dataRange = dataRange;
  chartData.yAxis.dataEachRange = dataEachRange;

  console.log('complete calAxisData', this.chartData);
}

function calAxisRadarData() {
  let { context, opts, legendData, chartData } = this;
  let { width, height, padding, radarAxis, categories } = opts;
  let { center, radius, splitNumber, axisName: radarAxisName } = JSON.parse(JSON.stringify(radarAxis));
  let { show: radarAxisNameShow, textStyle: radarAxisNameTextStyle } = radarAxisName;
  let { fontSize: radarAxisNameFontSize, margin: radarAxisNameMargin } = radarAxisNameTextStyle;
  let [centerX, centerY] = center;
  chartData.radarAxis = {
    center: [],
    radius: 0,
    lineEndPosition: [],
    namePosition: [],
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

  if (radarAxisNameShow) {
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
  }

  console.log('complete calAxisRadarData');
}

function calChartBarData() {
  let { opts, chartData } = this;
  let { series, xAxis } = opts;
  let { lineWidth: xAxisLineWidth } = xAxis.axisLine.lineStyle;
  let { lineWidth: xAxisTickLineWidth } = xAxis.axisTick.lineStyle;
  let { xEachSpacing, xAxisLabelPoint } = chartData.xAxis;
  let { yZero, plusSpacing, minusSpacing, yStart, yEnd, ySpacing, maxData, minData, dataRange } = chartData.yAxis;

  let autoWidth = 0;
  let autoWidthNumber = 0;
  let sumWidth = 0;
  // 修正barWidth和计算autoWidthNumber和部分sumWidth
  series.forEach((seriesItem, seriesIndex) => {
    let { barMaxWidth, barMinWidth, barWidth, barGap } = seriesItem;

    if (typeof seriesItem.barWidth == 'number') {
      if (barWidth > barMaxWidth) {
        seriesItem.barWidth = barMaxWidth;
      }
      if (barWidth < barMinWidth) {
        seriesItem.barWidth = barMinWidth;
      }
      sumWidth += seriesItem.barWidth;
    } else {
      autoWidthNumber++;
    }
    if (seriesIndex == 0) {
      // 第一个seriesItem的barGap为两边的padding，其他的为与上一个的间隙
      sumWidth += 2 * barGap;
    } else {
      sumWidth += barGap;
    }
    return seriesItem
  });

  // 计算autoWidth
  if (sumWidth + autoWidthNumber < xEachSpacing) {
    autoWidth = (xEachSpacing - sumWidth) / autoWidthNumber;
  } else {
    autoWidth = 1;
  }

  // 修正barWidth，和计算完成sumWidth
  series.forEach(seriesItem => {
    let { barMaxWidth, barWidth } = seriesItem;

    if (barWidth == 'auto') {
      seriesItem.barWidth = autoWidth > barMaxWidth ? barMaxWidth : autoWidth;
      sumWidth += seriesItem.barWidth;
    }
  });

  // 生成数据结构
  chartData.chartBar = JSON.parse(JSON.stringify(series)).reduce((chartBarArr, seriesItem, seriesIndex) => {
    seriesItem.data.forEach((dataItem, dataIndex) => {
      if (!chartBarArr[dataIndex]) {
        chartBarArr[dataIndex] = [];
      }
      if (!chartBarArr[dataIndex][seriesIndex]) {
        chartBarArr[dataIndex][seriesIndex] = JSON.parse(JSON.stringify(seriesItem));
      }
    });
    return chartBarArr
  }, []);

  chartData.chartBar.forEach((barItemArr, dataIndex) => {
    let x = xAxisLabelPoint[dataIndex].x - sumWidth / 2;

    barItemArr.forEach(barItem => {
      // 记录柱体数值
      barItem.data = barItem.data[dataIndex];

      // 记录柱体宽度
      if (barItem.barWidth == 'auto') {
        barItem.barWidth = autoWidth;
      }

      // 记录柱体高度和y坐标点
      let barHeight = 0;
      let y = 0;
      if (maxData >= 0 && minData >= 0) {
        barHeight = (ySpacing * (barItem.data - minData)) / dataRange;
        barHeight -= xAxisLineWidth;
        y = yStart - xAxisLineWidth;
      } else if (maxData <= 0 && minData <= 0) {
        barHeight = (ySpacing * (Math.abs(barItem.data) - Math.abs(maxData))) / dataRange;
        barHeight -= xAxisTickLineWidth;
        y = yEnd + xAxisTickLineWidth;
      } else {
        if (barItem.data > 0) {
          barHeight = (plusSpacing * barItem.data) / maxData;
          barHeight -= xAxisLineWidth;
          y = yZero - xAxisLineWidth;
        } else {
          barHeight = (minusSpacing * Math.abs(barItem.data)) / Math.abs(minData);
          barHeight -= xAxisLineWidth;
          y = yZero + xAxisLineWidth;
        }
      }
      barItem.barHeight = barHeight;
      barItem.y = y;

      // 记录柱体x坐标点
      barItem.x = x + barItem.barGap + barItem.barWidth / 2;

      x += barItem.barGap + barItem.barWidth;
    });
  });

  console.log('complete calChartBarData', chartData.chartBar);
}

function calChartLineData() {
  let { opts, chartData } = this;
  let { series, xAxis } = opts;
  let { lineWidth: xAxisLineWidth } = xAxis.axisLine.lineStyle;
  let { xAxisLabelPoint } = chartData.xAxis;
  let { yZero, plusSpacing, minusSpacing, yStart, yEnd, ySpacing, maxData, minData, dataRange } = chartData.yAxis;

  chartData.chartLine = JSON.parse(JSON.stringify(series)).reduce((chartLineArr, seriesItem) => {
    seriesItem.data = seriesItem.data.reduce((dataArr, dataItem, dataIndex) => {
      let itemHeight = 0;
      let y = 0;
      if (maxData >= 0 && minData >= 0) {
        itemHeight = (ySpacing * (dataItem - minData)) / dataRange;
        y = yStart - (xAxisLineWidth * 3) / 2 - itemHeight;
      } else if (maxData <= 0 && minData <= 0) {
        itemHeight = (ySpacing * (Math.abs(dataItem) - Math.abs(maxData))) / dataRange;
        y = yEnd - (xAxisLineWidth * 3) / 2 + itemHeight;
      } else {
        if (dataItem > 0) {
          itemHeight = (plusSpacing * dataItem) / maxData;
          y = yZero - xAxisLineWidth - itemHeight;
        } else {
          itemHeight = (minusSpacing * Math.abs(dataItem)) / Math.abs(minData);
          y = yZero + xAxisLineWidth + itemHeight;
        }
      }

      dataArr.push({
        x: xAxisLabelPoint[dataIndex].x,
        y,
        value: dataItem,
        height: itemHeight,
      });
      return dataArr
    }, []);

    chartLineArr.push(JSON.parse(JSON.stringify(seriesItem)));

    return chartLineArr
  }, []);

  console.log('complete calChartLineData', this.chartData.chartLine);
}

function calChartPieData() {
  let { opts, legendData, chartData } = this;
  let { width, height, series, padding } = opts;

  chartData.chartPie = JSON.parse(JSON.stringify(series[0]));

  let { data, center, radius } = chartData.chartPie;
  let [centerX, centerY] = center;
  let [radius1, radius2] = radius;
  let valueSum = 0;

  valueSum = data.reduce((sum, dataItem) => {
    sum += dataItem.value === null ? 0 : dataItem.value;
    return sum
  }, 0);

  chartData.chartPie.valueSum = valueSum;

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
  chartData.chartPie.center = [centerX, centerY];
  chartData.chartPie.radius = [radius1, radius2];

  console.log('complete calChartPieData');
}

function calChartRadarData() {
  let { opts, chartData } = this;
  let { radarAxis, categories, series } = opts;
  let { max } = radarAxis;
  let { center, radius } = chartData.radarAxis;

  let maxData = 0;
  series.forEach(seriesItem => {
    maxData = Math.max(maxData, ...seriesItem.data);
  });
  maxData = max == 'auto' ? maxData : max;

  let spacingAangle = (2 * Math.PI) / categories.length;
  let start = Math.PI / 2; // 以90度为起点, 逆时针累加

  chartData.chartRadar = JSON.parse(JSON.stringify(series));
  chartData.chartRadar.map(radarItem => {
    radarItem.dataPosition = radarItem.data.reduce((arr, dataItem, dataIndex) => {
      let scale = dataItem / maxData;
      let point = {
        x: radius * Math.cos(start + spacingAangle * dataIndex) * scale,
        y: radius * Math.sin(start + spacingAangle * dataIndex) * scale,
      };
      arr.push({
        data: dataItem,
        point,
      });
      return arr
    }, []);

    return radarItem
  });

  console.log('complete calChartRadarData');
}

/**
 * 绘制背景图
 */

function drawBackground(startX = 0, startY = 0, endX = this.opts.width, endY = this.opts.height) {
  this.context.fillStyle = this.opts.backgroundColor;
  this.context.fillRect(startX, startY, endX, endY);

  console.log('complete drawBackground');
}

/**
 * 绘制图例组件
 */

function drawLegend() {
  if (!this.opts.legend.show) return

  let { context, opts, legendData } = this;
  let { type, legend } = opts;
  let { type: legendType, shapeWidth, shapeHeight, itemGap, marginTop, textStyle } = legend;
  let { fontSize, color, padding } = textStyle;
  let { legendList, legendWidth, legendHeight } = legendData;

  if (legendType == 'default') {
    switch (type) {
      case 'bar':
        legendType = 'rect';
        break
      case 'line':
        legendType = 'line';
        break
      case 'pie':
        legendType = 'circle';
        break
      case 'radar':
        legendType = 'rect';
        break
    }
  }

  let legendHeightMax = Math.max(shapeHeight, fontSize);
  let startY = opts.height - opts.padding[2] - legendHeight + marginTop;
  let startX = (opts.width - legendWidth) / 2;
  legendList.forEach((listItem, listIndex) => {
    startX = (opts.width - legendWidth) / 2; // 重置startX

    listItem.forEach(legendItem => {
      switch (legendType) {
        case 'circle':
          context.beginPath();
          context.moveTo(startX + shapeWidth / 2, startY + legendHeightMax / 2);
          context.arc(startX + shapeWidth / 2, startY + legendHeightMax / 2, shapeWidth / 2, 0, 2 * Math.PI);
          context.closePath();

          context.fillStyle = legendItem.itemStyle.color;
          context.fill();
          break
        case 'line':
          let lineLength = (shapeWidth - shapeHeight) / 2;

          context.beginPath();
          context.moveTo(startX, startY + legendHeightMax / 2);
          context.lineTo(startX + lineLength - 2, startY + legendHeightMax / 2);
          context.closePath();
          context.lineWidth = 2;
          context.strokeStyle = legendItem.itemStyle.color;
          context.stroke();

          context.beginPath();
          context.moveTo(startX + shapeWidth / 2, startY + legendHeightMax / 2);
          context.arc(startX + shapeWidth / 2, startY + legendHeightMax / 2, shapeHeight / 2, 0, 2 * Math.PI);
          context.closePath();
          context.fillStyle = legendItem.itemStyle.color;
          context.fill();

          context.beginPath();
          context.moveTo(startX + lineLength + shapeHeight + 2, startY + legendHeightMax / 2);
          context.lineTo(startX + shapeWidth, startY + legendHeightMax / 2);
          context.closePath();
          context.lineWidth = 2;
          context.strokeStyle = legendItem.itemStyle.color;
          context.stroke();

          break
        case 'rect':
          context.fillStyle = legendItem.itemStyle.color;
          if (shapeHeight >= fontSize) {
            context.fillRect(startX, startY, shapeWidth, shapeHeight);
          } else {
            context.fillRect(startX, startY + (fontSize - shapeHeight) / 2, shapeWidth, shapeHeight);
          }
          break
      }

      startX += shapeWidth + padding;

      context.save();
      context.textAlign = 'left';
      context.textBaseline = 'middle';
      context.font = `${fontSize}px`;
      context.fillStyle = color;
      context.fillText(legendItem.name, startX, startY + legendHeightMax / 2);
      context.restore();

      startX += legendItem.measureText + itemGap;
    });

    startY += legendHeightMax + itemGap;
  });

  console.log('complete drawLegend');
}

/**
 * 绘制Y轴, 包括 axisName(名称), axisLabel(标签), axisTick(刻度线), axisLine(轴线)
 */
function drawAxisY() {
  let { context, opts, chartData } = this;
  let { xAxis, yAxis } = opts;

  let { show: xAxisShow, axisName: xAxisName, axisLabel: xAxisLabel, axisTick: xAxisTick, axisLine: xAxisLine, axisSplitLine: xAxisSplitLine } = xAxis;
  let { show: yAxisShow, axisName: yAxisName, axisLabel: yAxisLabel, axisTick: yAxisTick, axisLine: yAxisLine, axisSplitLine: yAxisSplitLine } = yAxis;

  let { show: xAxisNameShow, textStyle: xAxisNameTextStyle } = xAxisName;
  let { show: xAxisLabelShow, showIndex: xAxisLabelShowIndex, textStyle: xAxisLabelTextStyle, rotate: xAxisLabelRotate } = xAxisLabel;
  let { show: xAxisTickShow, showIndex: xAxisTickShowIndex, lineStyle: xAxisTickStyle } = xAxisTick;
  let { show: xAxisLineShow, lineStyle: xAxisLineStyle } = xAxisLine;
  let { show: xAxisSplitLineShow, showIndex: xAxisSplitShowIndex, lineStyle: xAxisSplitLineStyle } = xAxisSplitLine;

  let { show: yAxisNameShow, textStyle: yAxisNameTextStyle } = yAxisName;
  let { show: yAxisLabelShow, textStyle: yAxisLabelTextStyle } = yAxisLabel;
  let { show: yAxisTickShow, lineStyle: yAxisTickStyle } = yAxisTick;
  let { show: yAxisLineShow, lineStyle: yAxisLineStyle } = yAxisLine;
  let { show: yAxisSplitLineShow, lineStyle: yAxisSplitLineStyle } = yAxisSplitLine;

  let { color: xAxisNameColor, fontSize: xAxisNameFontSize } = xAxisNameTextStyle;
  let { color: xAxisLabelColor, fontSize: xAxisLabelFontSize } = xAxisLabelTextStyle;
  let { color: xAxisTickLineColor, lineWidth: xAxisTickLineWidth } = xAxisTickStyle;
  let { color: xAxisLineColor, lineWidth: xAxisLineWidth } = xAxisLineStyle;
  let { color: xAxisSplitLineColor, lineWidth: xAxisSplitLineWidth } = xAxisSplitLineStyle;

  let { color: yAxisNameColor, fontSize: yAxisNameFontSize } = yAxisNameTextStyle;
  let { color: yAxisLabelColor, fontSize: yAxisLabelFontSize } = yAxisLabelTextStyle;
  let { color: yAxisTickLineColor, lineWidth: yAxisTickLineWidth } = yAxisTickStyle;
  let { color: yAxisLineColor, lineWidth: yAxisLineWidth } = yAxisLineStyle;
  let { color: yAxisSplitLineColor, lineWidth: yAxisSplitLineWidth } = yAxisSplitLineStyle;

  let { xAxisLabelPoint, xAxisTickPoint, xAxisLinePoint, xAxisSplitLinePoint, xAxisNamePoint } = chartData.xAxis;
  let { yAxisLabelPoint, yAxisTickPoint, yAxisLinePoint, yAxisSplitLinePoint, yAxisNamePoint } = chartData.yAxis;

  if (yAxisShow) {
    if (yAxisLabelShow) {
      context.save();
      context.font = `${yAxisLabelFontSize}px`;
      context.fillStyle = yAxisLabelColor;
      context.textAlign = 'right';
      context.textBaseline = 'middle';
      yAxisLabelPoint.forEach(item => {
        context.fillText(item.text, item.x, item.y);
      });
      context.restore();
    }

    if (yAxisTickShow) {
      context.lineWidth = yAxisTickLineWidth;
      context.strokeStyle = yAxisTickLineColor;

      yAxisTickPoint.forEach(item => {
        context.beginPath();
        context.moveTo(item.startX, item.startY);
        context.lineTo(item.endX, item.endY);
        context.closePath();

        context.stroke();
      });
    }

    if (yAxisSplitLineShow) {
      context.lineWidth = yAxisSplitLineWidth;
      context.strokeStyle = yAxisSplitLineColor;

      yAxisSplitLinePoint.forEach((item, index) => {
        context.beginPath();
        context.moveTo(item.startX, item.startY);
        context.lineTo(item.endX, item.endY);
        context.closePath();

        context.stroke();
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

    if (yAxisNameShow) {
      context.save();
      context.font = `${yAxisNameFontSize}px`;
      context.fillStyle = yAxisNameColor;
      context.textAlign = 'center';
      context.textBaseline = 'bottom';
      context.fillText(yAxisNamePoint.text, yAxisNamePoint.x, yAxisNamePoint.y);
      context.restore();
    }
  }

  if (xAxisShow) {
    if (xAxisLabelShow) {
      context.save();
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

      if (xAxisLabelShowIndex && xAxisLabelShowIndex.length) {
        // 存在控制显示的下标数组
        xAxisLabelShowIndex.forEach(showIndex => {
          let item = xAxisLabelPoint[showIndex];

          if (xAxisLabelRotate == 0) {
            context.fillText(item.text, item.x, item.y);
          } else {
            context.save();
            context.translate(item.x, item.y);
            context.rotate((-xAxisLabelRotate * Math.PI) / 180);
            context.fillText(item.text, 0, 0);
            context.restore();
          }
        });
      } else {
        xAxisLabelPoint.forEach(item => {
          if (xAxisLabelRotate == 0) {
            context.fillText(item.text, item.x, item.y);
          } else {
            context.save();
            context.translate(item.x, item.y);
            context.rotate((-xAxisLabelRotate * Math.PI) / 180);
            context.fillText(item.text, 0, 0);
            context.restore();
          }
        });
      }

      context.restore();
    }

    if (xAxisSplitLineShow) {
      context.lineWidth = xAxisSplitLineWidth;
      context.strokeStyle = xAxisSplitLineColor;

      if (xAxisSplitShowIndex && xAxisSplitShowIndex.length) {
        // 存在控制显示的下标数组
        xAxisSplitShowIndex.forEach(showIndex => {
          let item = xAxisSplitLinePoint[showIndex];

          if (showIndex == 0 && yAxisShow && yAxisLineShow) return

          context.beginPath();
          context.moveTo(item.startX, item.startY);
          context.lineTo(item.endX, item.endY);
          context.closePath();

          context.stroke();
        });
      } else {
        xAxisSplitLinePoint.forEach((item, index) => {
          // 由于先绘制y轴后绘制x轴, 在y轴轴线显示的情况下，为避免覆盖，不绘制x轴网格线的第一条
          if (index == 0 && yAxisShow && yAxisLineShow) return

          context.beginPath();
          context.moveTo(item.startX, item.startY);
          context.lineTo(item.endX, item.endY);
          context.closePath();

          context.stroke();
        });
      }
    }

    if (xAxisTickShow) {
      context.lineWidth = xAxisTickLineWidth;
      context.strokeStyle = xAxisTickLineColor;

      if (xAxisTickShowIndex && xAxisTickShowIndex.length) {
        // 存在控制显示的下标数组
        xAxisTickShowIndex.forEach(showIndex => {
          let item = xAxisTickPoint[showIndex];

          context.beginPath();
          context.moveTo(item.startX, item.startY);
          context.lineTo(item.endX, item.endY);
          context.closePath();

          context.stroke();
        });
      } else {
        xAxisTickPoint.forEach(item => {
          context.beginPath();
          context.moveTo(item.startX, item.startY);
          context.lineTo(item.endX, item.endY);
          context.closePath();

          context.stroke();
        });
      }
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

  console.log('complete drawAxis');
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

function drawChartPie(process) {
  let { context, opts, chartData } = this;
  let { label: globalLabel } = opts;
  let { maxData, minData } = chartData.yAxis;

  chartData.chartBar.forEach(barItemArr => {
    barItemArr.forEach(barItem => {
      let { x, y, data, barWidth, barHeight, itemStyle } = barItem;
      let { color: barItemColor } = itemStyle;

      context.beginPath();
      context.save();
      context.fillStyle = barItemColor;
      if (maxData >= 0 && minData >= 0) {
        context.fillRect(x - barWidth / 2, y, barWidth, -barHeight * process);
      } else if (maxData <= 0 && minData <= 0) {
        context.fillRect(x - barWidth / 2, y, barWidth, barHeight * process);
      } else {
        if (data > 0) {
          context.fillRect(x - barWidth / 2, y, barWidth, -barHeight * process);
        } else {
          context.fillRect(x - barWidth / 2, y, barWidth, barHeight * process);
        }
      }

      context.restore();
      context.closePath();
    });
  });

  if (process == 1) {
    chartData.chartBar.forEach(barItemArr => {
      barItemArr.forEach(barItem => {
        let { x, y, barHeight, data, label, itemStyle } = barItem;
        let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin } = label;
        let { color: barItemColor } = itemStyle;

        // globalLabel 权重大于 seriesLabel
        labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
        labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
        labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
        labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

        if (!labelShow) return

        context.save();
        context.font = `${labelFontSize}px`;
        context.fillStyle = labelColor == 'auto' ? barItemColor : labelColor;
        context.textAlign = 'center';
        if (maxData >= 0 && minData >= 0) {
          context.textBaseline = 'bottom';
          context.fillText(data, x, y - barHeight - labelMargin);
        } else if (maxData <= 0 && minData <= 0) {
          context.textBaseline = 'top';
          context.fillText(data, x, y + barHeight + labelMargin);
        } else {
          if (data > 0) {
            context.textBaseline = 'bottom';
            context.fillText(data, x, y - barHeight - labelMargin);
          } else {
            context.textBaseline = 'top';
            context.fillText(data, x, y + barHeight + labelMargin);
          }
        }
        context.restore();
      });
    });
  }

  console.log('complete drawChartBar', process);
}

function drawChartLine(process) {
  let { context, opts, chartData } = this;
  let { label: globalLabel } = opts;
  let { lineWidth: xAxisLineWidth } = opts.xAxis.axisLine.lineStyle;
  let { yZero, yStart, yEnd, maxData, minData } = chartData.yAxis;

  chartData.chartLine.forEach(lineItem => {
    let { data, showIndex: dataShowIndex, itemStyle, line, symbol, area, label, smooth } = lineItem;
    let { color: lineItemColor } = itemStyle;
    let { show: lineShow, lineWidth, color: lineColor, opacity: lineOpacity } = line;
    let { show: symbolShow, type: symbolType, size: symbolSize, color: symbolColor } = symbol;
    let { show: areaShow, color: areaColor, opacity: areaOpacity } = area;
    let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin } = label;

    // globalLabel 权重大于 seriesLabel
    labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
    labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
    labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
    labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

    if (smooth) {
      // process更新y坐标数据
      data = JSON.parse(JSON.stringify(data)).map(dataItem => {
        let { y, height, value } = dataItem;
        if (maxData >= 0 && minData >= 0) {
          dataItem.y = y + height - height * process;
        } else if (maxData <= 0 && minData <= 0) {
          dataItem.y = y - height + height * process;
        } else {
          if (value > 0) {
            dataItem.y = y + height - height * process;
          } else {
            dataItem.y = y - height + height * process;
          }
        }
        return dataItem
      });

      // 计算贝塞尔曲线控制点并绘制路径
      context.beginPath();
      data.forEach((dataItem, dataIndex, points) => {
        function isNotMiddlePoint(points, i) {
          if (points[i - 1] && points[i + 1]) {
            return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y, points[i + 1].y)
          } else {
            return false
          }
        }

        const a = 0.2;
        const b = 0.2;
        let pAx = null;
        let pAy = null;
        let pBx = null;
        let pBy = null;
        let { x, y } = dataItem;

        if (dataIndex == 0) {
          context.moveTo(x, y);
        } else {
          let i = dataIndex - 1;
          if (i < 1) {
            pAx = points[0].x + (points[1].x - points[0].x) * a;
            pAy = points[0].y + (points[1].y - points[0].y) * a;
          } else {
            pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
            pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
          }

          if (i > points.length - 3) {
            let last = points.length - 1;
            pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
            pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
          } else {
            pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
            pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
          }

          if (isNotMiddlePoint(points, i + 1)) {
            pBy = points[i + 1].y;
          }
          if (isNotMiddlePoint(points, i)) {
            pAy = points[i].y;
          }

          context.bezierCurveTo(pAx, pAy, pBx, pBy, x, y);
        }
      });
    } else {
      context.beginPath();
      data.forEach((dataItem, dataIndex) => {
        let { x, y, height, value } = dataItem;
        if (maxData >= 0 && minData >= 0) {
          y = y + height - height * process;
        } else if (maxData <= 0 && minData <= 0) {
          y = y - height + height * process;
        } else {
          if (value > 0) {
            y = y + height - height * process;
          } else {
            y = y - height + height * process;
          }
        }

        if (dataIndex == 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });
    }

    if (lineShow) {
      context.save();
      context.lineJoin = 'round';
      context.globalAlpha = lineOpacity;
      context.lineWidth = lineWidth;
      context.strokeStyle = lineColor == 'auto' ? lineItemColor : lineColor;
      context.stroke();
      context.restore();
    }

    if (areaShow) {
      if (maxData >= 0 && minData >= 0) {
        context.lineTo(data[data.length - 1].x, yStart - xAxisLineWidth);
        context.lineTo(data[0].x, yStart - xAxisLineWidth);
      } else if (maxData <= 0 && minData <= 0) {
        context.lineTo(data[data.length - 1].x, yEnd);
        context.lineTo(data[0].x, yEnd);
      } else {
        context.lineTo(data[data.length - 1].x, yZero);
        context.lineTo(data[0].x, yZero);
      }
      context.closePath();
      context.save();
      context.globalAlpha = areaOpacity;
      context.fillStyle = areaColor == 'auto' ? lineItemColor : areaColor;
      context.fill();
      context.restore();
    }

    if (process == 1) {
      if (symbolShow) {
        if (dataShowIndex && dataShowIndex.length) {
          // 存在控制显示的下标数组
          dataShowIndex.forEach(showIndex => {
            let dataItem = data[showIndex];
            let { x, y } = dataItem;

            switch (symbolType) {
              case 'circle':
                context.save();
                context.beginPath();
                context.arc(x, y, symbolSize / 2, 0, 2 * Math.PI);
                context.fillStyle = symbolColor == 'auto' ? lineItemColor : symbolColor;
                context.fill();

                context.beginPath();
                context.arc(x, y, symbolSize / 4, 0, 2 * Math.PI);
                context.fillStyle = '#fff';
                context.fill();
                context.restore();
                break
            }
          });
        } else {
          switch (symbolType) {
            case 'circle':
              context.save();
              data.forEach(dataItem => {
                let { x, y } = dataItem;
                context.beginPath();
                context.arc(x, y, symbolSize / 2, 0, 2 * Math.PI);
                context.fillStyle = symbolColor == 'auto' ? lineItemColor : symbolColor;
                context.fill();

                context.beginPath();
                context.arc(x, y, symbolSize / 4, 0, 2 * Math.PI);
                context.fillStyle = '#fff';
                context.fill();
              });
              context.restore();
              break
          }
        }
      }

      if (labelShow) {
        context.save();
        context.font = `${labelFontSize}px`;
        context.fillStyle = labelColor == 'auto' ? lineItemColor : labelColor;
        context.textAlign = 'center';

        if (dataShowIndex && dataShowIndex.length) {
          // 存在控制显示的下标数组
          dataShowIndex.forEach(showIndex => {
            let dataItem = data[showIndex];
            let { x, y, value } = dataItem;

            if (maxData >= 0 && minData >= 0) {
              context.textBaseline = 'bottom';
              context.fillText(value, x, y - labelMargin);
            } else if (maxData <= 0 && minData <= 0) {
              context.textBaseline = 'top';
              context.fillText(value, x, y + labelMargin);
            } else {
              if (value) {
                context.textBaseline = 'bottom';
                context.fillText(value, x, y - labelMargin);
              } else {
                context.textBaseline = 'top';
                context.fillText(value, x, y + labelMargin);
              }
            }
          });
        } else {
          data.forEach(dataItem => {
            let { x, y, value } = dataItem;

            if (maxData >= 0 && minData >= 0) {
              context.textBaseline = 'bottom';
              context.fillText(value, x, y - labelMargin);
            } else if (maxData <= 0 && minData <= 0) {
              context.textBaseline = 'top';
              context.fillText(value, x, y + labelMargin);
            } else {
              if (value) {
                context.textBaseline = 'bottom';
                context.fillText(value, x, y - labelMargin);
              } else {
                context.textBaseline = 'top';
                context.fillText(value, x, y + labelMargin);
              }
            }
          });
        }

        context.restore();
      }
    }
  });

  console.log('complete drawChartLine', process);
}

function drawChartPie$1(process) {
  let { context, opts, chartData } = this;
  let { backgroundColor, label: globalLabel } = opts;
  let { data, center, radius, format, offsetAngle, disablePieStroke, valueSum } = chartData.chartPie;
  let [centerX, centerY] = center;
  let [radiusMin, radiusMax] = radius;
  let _start_ = 0;

  data.forEach(dataItem => {
    dataItem._proportion_ = (dataItem.value / valueSum) * process;
    dataItem._start_ = _start_;
    if (offsetAngle !== 0) {
      dataItem._start_ += (offsetAngle * Math.PI) / 180;
    }

    context.beginPath();

    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radiusMax, dataItem._start_, dataItem._start_ + 2 * dataItem._proportion_ * Math.PI);
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
      context.arc(centerX, centerY, radiusMin, dataItem._start_, dataItem._start_ + 2 * dataItem._proportion_ * Math.PI);
      context.fillStyle = backgroundColor;
      context.fill();
    }

    _start_ += 2 * dataItem._proportion_ * Math.PI;
  });

  // 绘制文本标签
  if (process == 1) {
    let { label: seriesLabel, labelLine } = chartData.chartPie;
    let { show: labelShow, fontSize: labelFontSize, color: labelColor, margin: labelMargin } = seriesLabel;
    let { length1, length2, lineWidth, lineDotRadius } = labelLine;
    let lineRadius = radiusMax + length1;
    let lastOrigin = null;

    // globalLabel 权重大于 seriesLabel
    labelShow = globalLabel && typeof globalLabel.show == 'boolean' ? globalLabel.show : labelShow;
    labelFontSize = globalLabel && globalLabel.fontSize ? globalLabel.fontSize : labelFontSize;
    labelColor = globalLabel && globalLabel.color ? globalLabel.color : labelColor;
    labelMargin = globalLabel && globalLabel.margin ? globalLabel.margin : labelMargin;

    if (!labelShow) return

    data.forEach((dataItem, dataIndex) => {
      let arc = 2 * Math.PI - (dataItem._start_ + (2 * Math.PI * dataItem._proportion_) / 2);
      let text = format ? format(dataItem.value, name) : `${(+dataItem._proportion_ * 100).toFixed(2)}%`;

      // length1 start
      let length1StartOrigin = {
        x: Math.cos(arc) * radiusMax,
        y: Math.sin(arc) * radiusMax,
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

  console.log('complete drawChartPie', process);
}

function drawChartRadar(process) {
  let { context, chartData } = this;
  let { center } = chartData.radarAxis;

  chartData.chartRadar.forEach(radarItem => {
    console.log(1111, radarItem);
    let { dataPosition, itemStyle, area, line, symbol } = radarItem;
    let { show: areaShow, color: areaColor, opacity: areaOpactiy } = area;
    let { show: lineShow, lineWidht, color: lineColor, opacity: lineOpacity } = line;
    let { show: symbolShow, type: symbolType, size: symbolSize, color: symbolColor } = symbol;

    context.beginPath();
    dataPosition.forEach((dataItem, dataIndex) => {
      let point = JSON.parse(JSON.stringify(dataItem.point));
      point.x = point.x * process;
      point.y = point.y * process;

      let position = convertCoordinateOrigin(point, center);
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
    }
  });

  console.log('complete drawChartRadar', process);
}

function drawCharts() {
  let { type, animation, animationDuration, animationTiming } = this.opts;
  let onProcessFn = function() {};

  this.animationInstance && this.animationInstance.stop();

  calSeriesColor.call(this);
  calLegendData.call(this);

  switch (type) {
    case 'bar':
      calAxisYData.call(this);
      calChartBarData.call(this);

      onProcessFn = process => {
        drawBackground.call(this);
        drawAxisY.call(this);
        drawChartPie.call(this, process);

        if (process == 1) {
          drawLegend.call(this);
        }
      };
      break
    case 'line':
      calAxisYData.call(this);
      calChartLineData.call(this);

      onProcessFn = process => {
        drawBackground.call(this);
        drawAxisY.call(this);
        drawChartLine.call(this, process);

        if (process == 1) {
          drawLegend.call(this);
        }
      };
      break
    case 'pie':
      calChartPieData.call(this);

      onProcessFn = process => {
        drawBackground.call(this);
        drawChartPie$1.call(this, process);

        if (process == 1) {
          drawLegend.call(this);
        }
      };
      break
    case 'radar':
      calAxisRadarData.call(this);
      calChartRadarData.call(this);

      onProcessFn = process => {
        drawBackground.call(this);
        drawAxisRadar.call(this);
        drawChartRadar.call(this, process);

        if (process == 1) {
          drawLegend.call(this);
        }
      };
      break
  }

  this.animationInstance = new Animation({
    type,
    animation,
    animationDuration,
    animationTiming,
    onProcess: onProcessFn,
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
    this.chartData = {};

    // 绑定事件
    this.event = new Event();
    this.event.addEventListener('renderComplete', opts.onRenderComplete);

    // 将opts的数据补充完整
    calOptions.call(this);

    // 绘制图表
    drawCharts.call(this);
  }

  updateData(data = {}) {
    let { opts, config } = this;

    Object.keys(data).forEach(dataKey => {
      if (dataKey == 'series') {
        opts.series = JSON.parse(JSON.stringify(data.series));
        calSeries.call(this);
      } else {
        replenishData(dataKey, data, opts, true);
      }
    });

    drawCharts.call(this);
  }
}

export default Charts;
//# sourceMappingURL=qacharts.js.map
