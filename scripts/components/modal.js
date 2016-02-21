import React, {Component} from 'react';
import Modal from 'react-modal';

class ModalC extends Component{

  constructor(props) {
    super(props);
    this.modalIsOpen = true;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    render(){
      console.log("Hello World");
      return(
          <Modal isOpen={this.modalIsOpen}  onRequestClose={this.closeModal}><h2>Hello</h2></Modal>
      );
    }

}

export default ModalC;
