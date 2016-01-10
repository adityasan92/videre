import * as types from '../constants/ActionTypes';
import {CHANGE_TYPES} from '../constants/VidereConstants';


export function playSong(playlist, songIndex) {
    return (dispatch, getState) => {
        /*dispatch(changeCurrentTime(0));

        const {player} = getState();
        const {selectedPlaylists} = player;
        const len = selectedPlaylists.length;
        if (len === 0 || selectedPlaylists[len - 1] !== playlist) {
            dispatch(changeSelectedPlaylists(selectedPlaylists, playlist));
        }
        dispatch(changePlayingSong(songIndex));*/
    };
}

export function toggleIsPlaying(isPlaying) {
    return {
        type: types.TOGGLE_IS_PLAYING,
        isPlaying
    };
}
