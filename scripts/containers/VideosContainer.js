import React, {Component, PropTypes} from 'react';
//var Draggabilly = require('draggabilly');
import TextBox from '../components/TextBox.js';

class VideosContainer extends Component {

    render(){
      const {dispatch} = this.props;
      return (
        <div className="row">
            <TextBox {...this.props} />
        </div>
      );
    }
}

export default VideosContainer;
