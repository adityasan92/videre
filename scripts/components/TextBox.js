import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { ItemTypes } from '../constants/draggableTypes.js';
import { DragSource } from 'react-dnd';
import flow from 'lodash/function/flow';

const textBoxSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class TextBox extends Component{

      constructor(props) {
        super(props);
         console.log(props)
      }


      render(){
        const { connectDragSource, isDragging, left, top } = this.props;
        console.log(this.props);
        return connectDragSource(
          <div style={{ left, top }}>
            <textarea ></textarea>
          </div>
        );
      };

}

function mapStateToProps(state) {
    const {environment, navigator} = state;
    console.log(environment);
    return {
        height: environment.height,
        isMobile: environment.isMobile,
        //path: navigator.route.path,
        width: environment.width
    };
}

//export default  DragSource(ItemTypes.TEXTBOX, textBoxSource, collect)(TextBox);
export default  flow(
  DragSource(ItemTypes.TEXTBOX, textBoxSource, collect),
  connect(mapStateToProps)
)(TextBox);
