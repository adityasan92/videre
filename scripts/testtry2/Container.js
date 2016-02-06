import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import ItemTypes from './ItemTypes';
import Box from './Box';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import flow from 'lodash/function/flow';
import TextBox from '../components/TextBox'


const styles = {
  width: 600,
  height: 400,
  position: 'fixed'
};

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log(item);
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(item.id, left, top);
  }
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textbox: {
        'a': { top: 20, left: 80},
        'b': { top: 180, left: 20}
      }
    };
  }

  moveBox(id, left, top) {
    console.log(id);
    console.log(left);
    console.log(top);
    this.setState(update(this.state, {
      textbox: {
        [id]: {
          $merge: {
            left: left,
            top: top
          }
        }
      }
    }));
  }

  render() {
    const { hideSourceOnDrag, connectDropTarget } = this.props;
    const { textbox} = this.state;

    return connectDropTarget(
      <div style={styles}>
        {Object.keys(textbox).map(key => {
          const { left, top} = textbox[key];
          return (
            <TextBox id={key}
                 left={left}
                 top={top}
                />
          );
        })}
      </div>
    );
  }
}

export default flow(

  DropTarget(ItemTypes.TEXTBOX, boxTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Container);
