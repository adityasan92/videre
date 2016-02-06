// import React, {Component, PropTypes} from 'react';
// import {connect} from 'react-redux';
// import { ItemTypes } from '../constants/draggableTypes.js';
// import { DragSource } from 'react-dnd';
// import flow from 'lodash/function/flow';
//
// const textBoxSource = {
//   beginDrag(props) {
//     const { id, left, top } = props;
//     return { id, left, top };
//   },
//   endDrag(props, monitor, component) {
//     if (!monitor.didDrop()) {
//       // You can check whether the drop was successful
//       // or if the drag ended but nobody handled the drop
//       console.log("Monitor didnt drop");
//       return;
//     }
//
//     //const item = monitor.getItem();
//     const dropResult = monitor.getDropResult();
//     console.log(dropResult);
//   }
// };
//
// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//   }
// }
//
// class TextBox extends Component{
//
//       constructor(props) {
//         super(props);
//         console.log(props);
//       }
//
//
//       render(){
//         const { connectDragSource, isDragging, left, top } = this.props;
//         //console.log(this.props);
//         return connectDragSource(
//           <div style={{ left, top }}>
//             <textarea ></textarea>
//           </div>
//         );
//       };
//
// }
//
// function mapStateToProps(state) {
//     const {environment, navigator} = state;
//     console.log(environment);
//     return {
//         height: environment.height,
//         isMobile: environment.isMobile,
//         //path: navigator.route.path,
//         width: environment.width
//     };
// }
//
// //export default  DragSource(ItemTypes.TEXTBOX, textBoxSource, collect)(TextBox);
// export default  flow(
//   DragSource(ItemTypes.TEXTBOX, textBoxSource, collect),
//   connect(mapStateToProps)
// )(TextBox);


import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { ItemTypes } from '../constants/draggableTypes.js';
import { DragSource } from 'react-dnd';
import flow from 'lodash/function/flow';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

const boxSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};


class TextBox extends Component {

  size(event){
    console.log(event);
  }

  resize(event){
    console.log(event);
    //console.log(this.refs.svg.offsetWidth);
  }

  componentDidMount() {
    console.log(this.refs.svg.offsetWidth);
    var width = this.refs.svg.offsetWidth;
    var height = this.refs.svg.offsetHeight;
    console.log(height);
  }

  render() {
    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    return connectDragSource(
      <div style={{ ...style, left, top }}>
        <textarea ref="svg" onChange={this.size} onMouseUp={this.resize} ></textarea>
      </div>
    );
  }
}

export default DragSource(ItemTypes.TEXTBOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(TextBox);
