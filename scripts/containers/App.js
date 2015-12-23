import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initEnvironment} from '../actions/environment';

class App extends Component {

  componentDidMount () {
       const {dispatch} = this.props;
       console.log("Init the env");
       dispatch(initEnvironment());

   }

  render(){
    console.log(this.props);
    return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
  }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired
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

export default connect(mapStateToProps)(App);