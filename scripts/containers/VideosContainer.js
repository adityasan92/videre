import React, {Component, PropTypes} from 'react';

class VideosContainer extends Component {
    render(){
      const {dispatch} = this.props;
      return (
        <div className="row">
          <div className="col-md-4">.col-md-1</div>
          <div className="col-md-4">.col-md-1</div>
          <div className="col-md-4">.col-md-1</div>
        </div>
      );
    }

}

export default VideosContainer;
