import React, { Component } from 'react';
import { Header, Icon, Segment} from 'semantic-ui-react';
import { Button, Card, Image, Modal, List, Input } from 'semantic-ui-react'
import './App.css';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Boards from './Boards';
import firebasedb from './firebase/firebase';
import {logout} from "./Login/src/helpers/auth";
const appTokenKey = "appToken";
const uuid = require("uuidv4")
//var SortableItem = sortable(Boards);
const SortableItem = SortableElement(Boards);
// {boards? boards.map((items, index) => (
//  <Boards key={index} />
// ))   : ""}
const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items ? items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      )): ""}
    </ul>
  );
});

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userData : null,
        boards : [],
        boardname: ""
    };
          this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
      logout().then(function () {
          localStorage.removeItem(appTokenKey);
          this.props.history.push("/login");
          console.log("user signed out from firebase");
      }.bind(this));

  }
  componentDidMount(){
    firebasedb.child("/users/"+"aradhikanigam").on('value', (snapshot) => {
      let data = snapshot.val()
      this.setState({userData : data})
      console.log(data)
      data.boards.map(boardId => {
        firebasedb.child('/boards/'+boardId).on('value', (snapshot1) =>{
          let boardData = snapshot1.val()
          console.log(boardData)
          let temp = this.state.boards ||  []


          temp.push(boardData)
          this.setState({
            boards : temp
          })
        })
      })
    })
  }

  addBoard = ()=>{
    console.log("addBoard")
    let self = this
    let uniquId = uuid()
    console.log(uniquId);
    let tryid = firebasedb.child('/boards').push({"name" : this.state.boardname})
    console.log(tryid.path.pieces_[1]);
    //let user = firebasedb.child('users')
    console.log("yooo",this.state.userData)
    let temp = this.state.userData
    console.log("ys",tryid.path.pieces_[1])
     temp.boards.push(tryid.path.pieces_[1])
    //console.log(temp);
    firebasedb.child('users/aradhikanigam').set(temp)
    // this.setState({
    //   userData: null,
    //   boards: []
    // })
    this.setState({
      userData: temp,
      boards: temp.boards
    })
    console.log("state",this.state.userData)
  }



 onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      boards: arrayMove(this.state.boards, oldIndex, newIndex),
    });
  };

  render() {
    console.log("hi");
    console.log(localStorage.getItem("displayName"));
    const { boards } = this.state;
    return (
      <div className="App">
        <div>
          <Segment>
            <Header as='h4' icon textAlign='center' style={{height:30, marginTop:-5}}>

              <Icon name='users' circular />
                TRELLO
            </Header>
            <Header as='h4'>
   <Image circular src={localStorage.getItem("photoURL")} />
   {' '}{localStorage.getItem("displayName")}
 </Header>
            <Header as='h3' textAlign='right'>
            <Modal style={{margin:'auto',marginTop:'auto'}} trigger={<Icon.Group size='large'>
                <Icon name='plus' />
              </Icon.Group>}>
                <Modal.Header>Add a new Board</Modal.Header>
                <Modal.Content scrolling>
                    <Modal.Description>
                        <Header>Title of the Board</Header>
                        <Input onChange={this.handleChange} value={this.state.boardname}/>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick={this.addBoard}>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
              <Icon.Group size='large'>
                <Icon name='info circle' />
              </Icon.Group>
              <Icon.Group size='large'>
                <Icon name='bell outline' />
              </Icon.Group>
              <Button color='black' onClick={this.handleLogout}>
<Icon name='sign out' /> Sign Out
</Button>
            </Header>
          </Segment>
          {/* <Card.Group style={{margin: 'auto'}}> */}
            <SortableList items={this.state.boards} onSortEnd={this.onSortEnd} />
         {/* {boards? boards.map((items, index) => (
          <Boards key={index} />
        ))   : ""} */}
         {/* <Boards boardname={this.state.boardname} date="12/12/2012" /> */}

{/*
         {boards? boards.map((items, index) => (
          <SortableItem key={index}
          onSortItems={this.onSortItems}
          items={items}
          sortId={index}>{items}</SortableItem>
        ))   : ""} */}
       {/* </Card.Group> */}
        </div>


        </div>
        );
      }
    }

    export default App;
