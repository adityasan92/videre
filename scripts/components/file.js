import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { ItemTypes } from '../constants/draggableTypes.js';
import { DragSource } from 'react-dnd';
import flow from 'lodash/function/flow';

const style = {
  position: 'absolute'
};

const imageStyle = {
  width: 50,
  height: 50,
}

const fileSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};


class File extends Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(){
    console.log("Double clicking");
    console.log(this.props);
    this.props.openModal("file", this.props.data);
  }

  setClickPos(){
      console.log("ada");
  }

  render() {
    const {left, top, connectDragSource, data, title, file} = this.props;
    console.log(this.props);
    this.file = file;
    return connectDragSource(
      <div  style={{ ...style, top, left}} onDoubleClick={this.openModal}>
          <i className="fa fa-file fa-4x" ></i>
          <p> {title}</p>
      </div>
    );
  }
}

export default DragSource(ItemTypes.FILE, fileSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(File);
