import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

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
          ev.dataTransfer.setData("text", ev.target.id);
          console.log(this.props);
          //console.log(ev.target.id);
          this.props.onDragSomething(ev);
      };

      render(){
        return(
          <div>
            <textArea draggable={true} className="textArea" ></textArea>
          </div>
        );
      };

}

export default connect()(TextBox);
