import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class TextBox extends Component{

      drag(e) {
          console.log("I am in");
          console.log(e);
      };

      render(){
        return(
          <div >
            <textArea draggable="true" ondragstart="drag(event)"></textArea>
          </div>
        );
      };

}

export default connect()(TextBox);
