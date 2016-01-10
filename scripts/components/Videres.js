import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
//import {fetchSongsIfNeeded} from '../actions/playlists';

class Videres extends Component{
    componentWillMount(){
      const {dispatch,playlist,playlists} = this.props;

    }

    render(){
      const { height, playlist, playlists, songs, time, users} = this.props;
      return (
            <div className={'songs' + (sticky ? ' sticky' : '')}>

                <div className='container'>
                    <SongCards
                        dispatch={dispatch}
                        height={height}
                        songs={songs}
                        users={users} />
                </div>
            </div>
        );
    }

}
