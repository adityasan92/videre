import React, {Component, PropTypes} from 'react';
//var Draggabilly = require('draggabilly');
import update from 'react/lib/update';
import TextBox from '../components/TextBox.js';
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

import { ItemTypes } from '../constants/draggableTypes.js';
import { DropTarget } from 'react-dnd';
import flow from 'lodash/function/flow';

const target = {
  drop(props,monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    console.log(item);
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    component.moveBox(item.id, left, top);
    console.log(component);
    //return {};
  }
};

function collect(connect, monitor) {
  return {
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
      var key = 'a';
      var y = 0;
      var x = 0;
      const {textBox} = this.state;

      return connectDropTarget(
        // <div className="row" >
        //     <TextBox {...this.props} id={key} left={x} top={y} />
        // </div>
        <div className="row" >
          {Object.keys(textBox).map(key => {
           const { left, top, title } = textBox[key];
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
