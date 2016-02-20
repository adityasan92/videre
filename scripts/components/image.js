import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { ItemTypes } from '../constants/draggableTypes.js';
import { DragSource } from 'react-dnd';
import flow from 'lodash/function/flow';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem'
};

const imageStyle = {
  width: 100,
  height: 100,
}

const imgSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};


class ImageCom extends Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(){
    console.log("Double clicking");
    console.log(this.props);
    this.props.openModal();
  }

  render() {
    const {left, top, connectDragSource, data} = this.props
    console.log(this.props);
    var img = new Image();
    img.src = data;
    return connectDragSource(
      <div style={{ ...style, top, left}}>
        <img style={{...imageStyle }} src={data} onDoubleClick={this.openModal}></img>
      </div>
    );
  }
}

export default DragSource(ItemTypes.IMAGE, imgSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(ImageCom);
