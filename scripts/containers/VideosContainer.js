import React, {Component, PropTypes} from 'react';
//var Draggabilly = require('draggabilly');
import TextBox from '../components/TextBox.js';
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

import { ItemTypes } from '../constants/draggableTypes.js';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  drop(props) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class VideosContainer extends Component {

    allowDrop(ev) {
      //console.log(ev);
      ev.preventDefault();
      //ev.dataTransfer.dropEffect = "move"
    }

    drop(ev) {
       ev.preventDefault();
       //console.log(ev.dataTransfer);
       var data = ev.dataTransfer.getData("text");
       console.log(data);
       //ev.target.appendChild(document.getElementById(data));
       ev.target.innerHTML = document.getElementById(data);

    }

    drag(ev){
      console.log("in drag method in VideosContainer");
      //console.log(ev.target.id);
      ev.dataTransfer.setData("text",ev.target.dataset.reactid);
      console.log(ev.dataTransfer);
    }

    render(){
      const {dispatch} = this.props;
      return (
        <div className="row" >
            <TextBox {...this.props} />
        </div>
        // <div>
        //       <textArea  className="textArea" ></textArea>
        // </div>
      );
    }
}

export default DragDropContext(HTML5Backend)(VideosContainer);
