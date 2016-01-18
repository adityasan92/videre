import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class TextBox extends Component{

      constructor(props) {
        super(props);
         //this.document.getElementByClass("this.textArea").addEventListener("drag", drag);
         console.log(props)

      }

      drag(ev) {
          //console.log("I am in");
          console.log(ev);
          ev.dataTransfer.setData("text", ev.target.id);
          console.log(this.props);
          
      };

      render(){
        return(
          <div>
            <textArea draggable={true} className="textArea" onDragStart={this.drag}></textArea>
          </div>
        );
      };

}

export default connect()(TextBox);
