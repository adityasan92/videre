import React, {Component, PropTypes} from 'react';
//var Draggabilly = require('draggabilly');
import TextBox from '../components/TextBox.js';

class VideosContainer extends Component {

    allowDrop(ev) {
      ev.preventDefault();
    }

    drop(ev) {
       /*ev.preventDefault();
       console.log(ev.dataTransfer);
       var data = ev.dataTransfer.getData("text");
       console.log(data);
       ev.target.appendChild(document.getElementById(data));*/
    }

    drag(ev){
      console.log("caleed");
      console.log(ev);
    }

    render(){
      const {dispatch} = this.props;
      return (
        <div className="row" onDrop={this.drop} onDragOver={this.allowDrop}>
            <TextBox {...this.props} onDragSomething={this.drag}/>
        </div>
      );
    }
}

export default VideosContainer;
