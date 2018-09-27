import React, { Component } from 'react';
import { Spring } from 'react-spring';
import range from 'lodash/range';
import './styles.css';
import SequencerRow from './row';
import { reinsert } from './util';

const clamp = (n, min, max) => Math.max(Math.min(n, max), min);

// Replace with array of instruments for sequencer
const itemsCount = 6;

export default class Sequencer extends Component {
  state = {
    mouseY: 0,
    topDeltaY: 0,
    isPressed: false,
    originalPosOfLastPressed: 0,
    order: range(itemsCount),
  };

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  handleTouchStart = (key, pressLocation, e) =>
    this.handleMouseDown(key, pressLocation, e.touches[0]);

  handleTouchMove = e =>
    e.preventDefault() || this.handleMouseMove(e.touches[0]);

  handleMouseUp = () => this.setState({ isPressed: false, topDeltaY: 0 });

  handleMouseDown = (pos, pressY, { pageY }) =>
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      originalPosOfLastPressed: pos,
    });

  handleMouseMove = ({ pageY }) => {
    const {
      isPressed,
      topDeltaY,
      order,
      originalPosOfLastPressed,
    } = this.state;
    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      const currentRow = clamp(Math.round(mouseY / 100), 0, itemsCount - 1);
      let newOrder = order;
      if (currentRow !== order.indexOf(originalPosOfLastPressed)) {
        newOrder = reinsert(
          order,
          order.indexOf(originalPosOfLastPressed),
          currentRow,
        );
      }
      this.setState({ mouseY, order: newOrder });
    }
  };

  render() {
    const {
      mouseY, isPressed, originalPosOfLastPressed, order,
    } = this.state;
    return (
      <div className="sequencer-container">
        {range(itemsCount).map(i => {
          const active = originalPosOfLastPressed === i && isPressed;
          const style = active
            ? { scale: 1.075, y: mouseY }
            : { scale: 1, y: order.indexOf(i) * 100 };
          return (
            <Spring
              immediate={name => active && name === 'y'}
              to={style}
              key={i}
            >
              {({ scale, y }) => (
                <div
                  onMouseDown={this.handleMouseDown.bind(null, i, y)}
                  onTouchStart={this.handleTouchStart.bind(null, i, y)}
                  className="sequencer-row"
                  style={{
                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    zIndex: i === originalPosOfLastPressed ? 99 : i,
                  }}
                >
                  <SequencerRow />
                </div>
              )}
            </Spring>
          );
        })}
      </div>
    );
  }
}
