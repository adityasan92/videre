import {CHANGE_TYPES} from '../constants/VidereConstants';

const initialState = {
    currentVidereIndex: null,
    currentTime: 0,
    isPlaying: false,
    selectedPlaylists: []
};

export default function player(state = initialState,action){

    switch(action.type){
      //case types.
      default:
        return state;
    }

}
