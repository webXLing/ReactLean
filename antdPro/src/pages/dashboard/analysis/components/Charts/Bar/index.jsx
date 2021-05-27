import { Axis, Chart, Geom, Tooltip, Interval } from 'bizcharts';
import React, { Component } from 'react';
import Debounce from 'lodash.debounce';
import autoHeight from '../autoHeight';
import styles from '../index.less';



class Bar extends Component {
  state = {
    autoHideXLabels: false,
    data2: [
      { year: '1951 年', tNum: 38 },
      { year: '1952 年', tNum: 52 },
      { year: '1956 年', tNum: 61 },
      { year: '1957 年', tNum: 45 },
      { year: '1958 年', tNum: 48 },
      { year: '1959 年', tNum: 38 },
      { year: '1960 年', tNum: 38 },
      { year: '1962 年', tNum: 38 },
    ]
  };

  root = undefined;

  node = undefined;

  resize = Debounce(() => {
    if (!this.node || !this.node.parentNode) {
      return;
    }

    const canvasWidth = this.node.parentNode.clientWidth;
    const { data = [], autoLabel = true } = this.props;

    if (!autoLabel) {
      return;
    }

    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
    }
  }, 500);

  componentDidMount () {
    window.addEventListener('resize', this.resize, {
      passive: true,
    });
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resize);
  }

  handleRoot = n => {
    this.root = n;
  };

  handleRef = n => {
    this.node = n;
  };

  render () {
    const {
      height = 1,
      title,
      forceFit = true,
      data,
      color = 'rgba(24, 144, 255, 0.85)',
      padding,
    } = this.props;
    const { autoHideXLabels, data2 } = this.state;
    console.log(data2, "data2--------")

    const scale = {
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    };
    const tooltip = [
      'x*y',
      (x, y) => ({
        name: x,
        value: y,
      }),
    ];
    return (
      <div
        className={styles.chart}
        style={{
          height,
        }}
        ref={this.handleRoot}
      >
        <div>
          <div>data2</div>
        </div>
        <div ref={this.handleRef}>
          {title && (
            <h4
              style={{
                marginBottom: 20,
              }}
            >
              {title}
            </h4>
          )}


          {/* ------ */}
          <Chart
            scale={scale}
            height={title ? height - 41 : height}
            forceFit={forceFit}
            data={data}
            padding={padding || 'auto'}
          >

            <Axis
              name="x"
              title={false}
              label={
                {
                  rotate: Math.PI / 4
                }
              }
              tickLine={
                {
                  lineWidth: 1, // 刻度线宽
                  stroke: '#96b429', // 刻度线的颜色
                }
              }
              line={
                {
                  stroke: '#d32f2f',
                  fill: '#12248b',
                  lineDash: [2, 2, 3],
                  lineWidth: 3
                }
              }
            />

            <Axis name="y" min={0} />
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom type="interval" position="x*y" color={color} tooltip={tooltip} />
          </Chart>
        </div>
      </div>
    );
  }
}

export default autoHeight()(Bar);
