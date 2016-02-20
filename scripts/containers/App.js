import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initEnvironment} from '../actions/environment';
//import {initNavigator} from '../actions/navigator';
import NavContainer from '../containers/NavContainer';
//import VidereContainer from '../containers/VidereContainer';
//import VideresContainer from '../containers/VideresContainer';
import VideosContainer from '../containers/VideosContainer';
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
import flow from 'lodash/function/flow';
import Container from '../containers/Container';
class App extends Component {

  componentDidMount () {
       const {dispatch} = this.props;
       console.log("Init the env");
       dispatch(initEnvironment());

   }

  render(){
    console.log(this.props);
    const {height, isMobile, width} = this.props;
          if (isMobile) {
              return (
                  <div className='mobile' style={{height: `${height}px`, width: `${width}px`}}>

                  </div>
              );
          }

          return (
              // <div>
              //   <NavContainer />
              //   <VideosContainer />
              // </div>
              <div>
               <NavContainer />
                  <Container />
              </div>
          );
      }
  }


App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    //path: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const {environment, navigator} = state;
    console.log(environment);
    return {
        height: environment.height,
        isMobile: environment.isMobile,
        //path: navigator.route.path,
        width: environment.width
    };
}

export default  flow(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps)
)(App);
