import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Song from '../components/Videres';

class VideresContainer extends Component{
    render() {
      return <Videres {...this.props}/>
    }
}

function mapStateToProps(state){
    const {player,playerlists} = state;

    /*return {
      player,
      playerlists
    }*/

    return {

    }

}

export default connect(mapStateToProps)(VideresContainer);
