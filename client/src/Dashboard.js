import React, { Component } from 'react';
import {Segment, Button, Menu, Image, Icon, Header, Modal, Input } from 'semantic-ui-react'
import './App.css';
import Boards from './Boards.js'


class Home extends Component {
handleAddBoard(){
  console.log("Hello");
}
  render() {

    return (
      <div className="Dashboard">
                <Header as='h2' icon textAlign='center' style={{height:200, marginTop:10}}>
                  <Icon name='users' circular/>
                    TRELLO
                {/* </Header> */}
                <Header.Content as='h3' textAlign='center'>
                  <Modal style={{marginTop:100, marginLeft: 180}} trigger={ <Button>Create Board</Button>}>
                    <Modal.Header>New Board<Input fluid placeholder='Name...' /></Modal.Header>
                  </Modal>
                </Header.Content>
                </Header>
              <Boards />

        </div>
        );
      }
    }

    export default Home;
