import React, {Component, PropTypes} from 'react';
//var Draggabilly = require('draggabilly');
import update from 'react/lib/update';
import TextBox from '../components/TextBox.js';
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

import { ItemTypes } from '../constants/draggableTypes.js';
import { DropTarget } from 'react-dnd';
import flow from 'lodash/function/flow';

const styles = {
  width: 300,
  height: 400,
  position: 'fixed'
};

const target = {
  canDrop: function (props, monitor) {
    // You can disallow drop based on props or item
    //console.log("asdasdasdsa");
    var item = monitor.getItem();
    return true;
  },

  drop(props,monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    console.log(monitor.getItemType());
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    component.moveBox(item.id, left, top);
    console.log(component);
    return {};
  }
};

function collect(connect, monitor) {
  return {
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget()
  };
}

class VideosContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        textBox: {
          'a': { top: 0, left: 0},

        }
      };
    }

    moveBox(id, left, top) {
      this.setState(update(this.state, {
        textBox: {
          [id]: {
            $merge: {
              left: left,
              top: top
            }
          }
        }
      }));
    }

    render(){
      const {connectDropTarget} = this.props;
      const {textBox} = this.state;

      return connectDropTarget(
        // <div className="row" >
        //     <TextBox {...this.props} id={key} left={x} top={y} />
        // </div>
        <div style={styles}>
          {Object.keys(textBox).map(key => {
           const { left, top } = textBox[key];
           return (
             <TextBox
                  id={key}
                  left={left}
                  top={top} />
           );
         })}
       </div>
      );
    }
}

export default  flow(
  DropTarget(ItemTypes.TEXTBOX, target, collect)
)(VideosContainer);
