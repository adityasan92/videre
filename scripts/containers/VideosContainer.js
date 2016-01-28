import React, {Component, PropTypes} from 'react';
//var Draggabilly = require('draggabilly');
import TextBox from '../components/TextBox.js';
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

import { ItemTypes } from '../constants/draggableTypes.js';
import { DropTarget } from 'react-dnd';
import flow from 'lodash/function/flow';

const squareTarget = {
  drop(props) {
  //  moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class VideosContainer extends Component {

    render(){
      const {connectDropTarget} = this.props;
      return connectDropTarget(
        <div className="row" >
            <TextBox {...this.props} />
        </div>
      );
    }
}

export default  flow(
  DragDropContext(HTML5Backend),
  DropTarget(ItemTypes.TEXTBOX, squareTarget, collect)
)(VideosContainer);
