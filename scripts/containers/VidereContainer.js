import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Song from '../components/Videre';

class VidereContainer extends Component{
    render() {
      return <Videre {...this.props}/>
    }
}

function mapStateToProps(state){
    const {player,playerlists} = state;

    return {
      player,
      playerlists
    }

}

export default connect(mapStateToProps)(VidereContainer);
