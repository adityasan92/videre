import React, {Component} from 'react';
import Modal from 'react-modal';

class ModalC extends Component{

    render(){
      console.log("Hello World");
      return(
          <Modal isOpen={true}><h2>Hello</h2></Modal>
      );
    }

}

export default ModalC;
