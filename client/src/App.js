import React, { Component } from 'react';
import { Header, Icon, Segment} from 'semantic-ui-react';
import { Button, Card, Image, Modal, List, Input } from 'semantic-ui-react'
import './App.css';
import Boards from './Boards';
import firebasedb from './firebase/firebase'
const uuid = require("uuidv4")
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userData : null,
        boards : [],
        boardname: ""
    };
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
  let user = firebasedb.child('users')
  let temp = this.state.userData
  temp.boards.push(tryid.path.pieces_[1])
  console.log(temp);
  firebasedb.child('users/aradhikanigam').set(temp)
  this.setState({
    userData: temp,
    boards: temp.boards
  })

}
  handleChange =(e)=>{
    this.setState({boardname:e.target.value})
    console.log(this.state);

  }
  render() {
    const { boards } = this.state;
    return (
      <div className="App">
        <div>
          <Segment>
            <Header as='h2' icon textAlign='center' style={{height:80, marginTop:-5}}>
              <Icon name='users' circular />
                TRELLO
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
            </Header>
          </Segment>
          <Card.Group style={{margin: 'auto'}}>
         {boards? boards.map((items, index) => (
          <Boards key={index} />
        ))   : ""}
         {/* <Boards boardname={this.state.boardname} date="12/12/2012" /> */}
       </Card.Group>
        </div>


        </div>
        );
      }
    }

    export default App;
