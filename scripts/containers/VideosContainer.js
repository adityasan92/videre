import React, {Component, PropTypes} from 'react';
//var Draggabilly = require('draggabilly');
import TextBox from '../components/TextBox.js';

class VideosContainer extends Component {

    allowDrop(ev){
        console.log("sadsa");
         ev.preventDefault();
    }

     drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    render(){
      const {dispatch} = this.props;
      return (
        <div className="row" ondragover={this.allowDrop} ondrop={this.drop} >
            <TextBox {...this.props} />
        </div>
      );
    }
}

export default VideosContainer;
