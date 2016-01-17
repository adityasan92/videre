import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class TextBox extends Component{

      constructor(props) {
        super(props);
         this.document.getElementByClass("this.textArea").addEventListener("drag", drag);
      }

      drag(e) {
          console.log("I am in");
          console.log(e);
      };

      render(){
        return(
          <div>
            <textArea className="textArea"></textArea>
          </div>
        );
      };

}

export default connect()(TextBox);
