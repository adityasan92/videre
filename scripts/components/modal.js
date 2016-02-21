import React, {Component} from 'react';
import Modal from 'react-modal';

const imageStyle = {
  height: 300,
  width: 300,

}

class ModalC extends Component{

  constructor(props) {
    super(props);
    this.state ={};
    this.state.modalIsOpen = true;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    closeModal() {
      this.setState({modalIsOpen: false});
      this.props.closeModal();
    }

    setImageStyle(){
        return ({
          overlay : {
              position          : 'fixed',
              top               : 0,
              left              : 0,
              right             : 0,
              bottom            : 0,
              backgroundColor   : 'rgba(0, 0, 0, 0.6)'
            },
          content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
          });
    }

    setStyle(type){
      console.log(type);
      if(type == "image"){
        return this.setImageStyle();
      }
    }

    renderContent(){
      const { type, data } = this.props;
      console.log(this.props);
      if(type =="image"){
        return(
          <img style={{...imageStyle }} src={data} onDoubleClick={this.openModal}></img>
        )
      }
    }

    render(){
      console.log("Hello World");
      const { type, data } = this.props;
      console.log(type);
      return(
          <Modal style={this.setStyle(type)} isOpen={this.state.modalIsOpen }  onRequestClose={this.closeModal}>
                {this.renderContent(this.props)}
          </Modal>
      );
    }

}

export default ModalC;
