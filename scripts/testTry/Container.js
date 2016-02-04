import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import flow from 'lodash/function/flow';
import {connect} from 'react-redux';

class Container extends Component {
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name='Glass' />
          <Box name='Banana' />
          <Box name='Paper' />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

    return {
        "SADASD":"ASDSAD"
    };
}

export default flow(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps)
)(Container);

//export default DragDropContext(HTML5Backend)(Container);
