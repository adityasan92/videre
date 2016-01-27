import React, {Component, PropTypes} from 'react';
import { ItemTypes } from '../constants/draggableTypes.js';
import {connect} from 'react-redux';
import { DragSource } from 'react-dnd';

const textBoxSource = {
  beginDrag(props) {
    return {};
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
         //this.document.getElementByClass("this.textArea").addEventListener("drag", drag);
         console.log(props)
         this.drag = this.drag.bind(this);
      }

      drag(ev) {
          //console.log("I am in");
          console.log(ev.dataTransfer);
          //ev.dataTransfer.setData("text", ev.target.id);
          // /console.log(this.props);
          console.log(ev.target.id);
          //console.log(ev.target.id);
          this.props.onDragSomething(ev);
      };

      render(){
        const { connectDragSource, isDragging } = this.props;
        console.log(this.props);
        return connectDragSource(
          // <div>
          //   <textarea draggable="true" className="textArea"  onDragStart={this.drag} >okosd</textarea>
          // </div>
          <div>
            <textarea ></textarea>
          </div>
        );
      };

}

export default DragSource(ItemTypes.TEXTBOX, textBoxSource, collect)(TextBox);
