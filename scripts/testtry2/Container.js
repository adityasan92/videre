import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import ItemTypes from './ItemTypes';
import Box from './Box';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import flow from 'lodash/function/flow';
import TextBox from '../components/TextBox'
import ImageCom from '../components/image'

const styles = {
  width: 600,
  height: 400,
  position: 'fixed'
};

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log(item);
    if(item.urls){
      $.ajax({
         url: '/api/scrapeUrl',
         dataType: 'json',
         type: 'POST',
         data: item.urls,
         success: function(data) {

         }.bind(this),
         error: function(xhr, status, err) {
           console.error("No response");
         }.bind(this)
       });
    }else if(item.files){
      //console.log();
      for (var i=0; i<item.files.length; i++) {
         var file = item.files[i];
         var reader = new FileReader();
          console.log(reader);
         //attach event handlers here...

         reader.readAsDataURL(file);
         reader.onload = function(){
           //console.log(reader.result);
           component.addImage("a", 0, 0, reader.result);
         }
       }
    }else{
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);

      component.moveBox(item.id, left, top);
    }

  }
};

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textbox: {
        'a': { top: 20, left: 80},
        'b': { top: 180, left: 20}
      }
    };
    this.state.image = null;
  }

  moveBox(id, left, top) {
    console.log(id);
    console.log(left);
    console.log(top);
    this.setState(update(this.state, {
      textbox: {
        [id]: {
          $merge: {
            left: left,
            top: top
          }
        }
      }
    }));
  }

  addImage(id, top,left,data){
      console.log("Adding a image");
      this.setState({image:{
        [id]:{
            left:left,
            top:top,
            data:data
        }
      }});
  }

  renderContent(){
    if(this.state.image){
      return (Object.keys(this.state.image).map(key => {
        const { left, top,data} = this.state.image[key];
        //console.log(top);
          return(<ImageCom id={key}
               left={left}
               top={top}
               data={data}
              />
            )
      }))
    }
  }

  render() {
    const { hideSourceOnDrag, connectDropTarget } = this.props;
    const { textbox} = this.state;
    console.log(this.renderContent());
    return connectDropTarget(
      <div style={styles}>
        {Object.keys(textbox).map(key => {
          const { left, top} = textbox[key];
          return (
            <TextBox id={key}
                 left={left}
                 top={top}
                />
          );
        })},
        {this.renderContent()}

      </div>
    );
  }
}

export default flow(

  DropTarget([ItemTypes.TEXTBOX , NativeTypes.FILE, NativeTypes.URL], boxTarget, (connect , monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }))
)(Container);
