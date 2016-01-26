import React, {Component, PropTypes} from 'react';
//var Draggabilly = require('draggabilly');
import TextBox from '../components/TextBox.js';
var $draggable = $('.draggable').draggabilly({
  // options...
})

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
        <div className="row" onDrop={this.drop} onDragOver={this.allowDrop}>
            <TextBox {...this.props} onDragSomething={this.drag}/>
        </div>
        // <div>
        //       <textArea  className="textArea" ></textArea>
        // </div>
      );
    }
}

export default VideosContainer;
