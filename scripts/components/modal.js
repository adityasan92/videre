import React, {Component} from 'react';
import Modal from 'react-modal';

class ModalC extends Component{

  constructor(props) {
    super(props);
    this.state ={};
    this.state.modalIsOpen = true;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    closeModal() {
      this.setState({modalIsOpen: false});
      this.props.closeModal();
    }

    render(){
      console.log("Hello World");
      //const { } = this.props;
      return(
          <Modal isOpen={this.state.modalIsOpen }  onRequestClose={this.closeModal}>
            <h2>Hello</h2>
            <button onClick={this.closeModal}>close</button>
          </Modal>
      );
    }

}

export default ModalC;
