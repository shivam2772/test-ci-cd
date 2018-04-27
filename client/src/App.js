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

// const SortableItem = SortableElement(Boards);

// const SortableList = SortableContainer(({items}) => {
//   return (
//     <ul>
//       {items ? items.map((value, index) => (
//         <SortableItem key={`item-${index}`} index={index} value={value} />
//       )): ""}
//     </ul>
//   );
// });

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      boards: [],
      boardName: "",

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
  componentWillMount(){
    firebasedb.child("/users/"+"aradhikanigam"+"/boards").on('value', (snapshot) => {
      let data = snapshot.val()
      let arr = Object.keys(data).map(function(k) { return data[k] });


      this.setState({
        boards:arr,

      })

      console.log("data",this.state.boards)

    })
  }

  addBoard = ()=>{

    let tryid = firebasedb.child('/boards').push({"boardName":this.state.boardName})
    console.log(tryid.path.pieces_[1])
    let dataId = tryid.path.pieces_[1];
    firebasedb.child("/users/"+"aradhikanigam"+"/boards/").push({
      "boardId": dataId,
      "boardName":this.state.boardName
    });

  }
    handleChange =(e)=>{
      this.setState({boardName:e.target.value})
      console.log(this.state);

    }


//  onSortEnd = ({oldIndex, newIndex}) => {
//     this.setState({
//       boards: arrayMove(this.state.boards, oldIndex, newIndex),
//     });
//   };

  render() {
    console.log("hi");
    console.log(localStorage.getItem("displayName"));
    const { boards } = this.state;
    return (
      <div className="App">
        <div>
          <Segment>
            <Header as='h4' icon textAlign='center' style={{height:20, marginTop:-5}}>

              <Icon name='users' circular />
                TRELLO
            </Header>
            <Header as='h3' style={{height:20, marginTop:-5}}>
   <Image circular src={localStorage.getItem("photoURL")} />
   {' '}{localStorage.getItem("displayName")}
 </Header>
            <Header as='h4' textAlign='right' style={{height:30, marginTop:-5}}>
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
            <Card.Group style={{margin: 'auto'}}>
            {/* <SortableList items={this.state.boards} onSortEnd={this.onSortEnd} /> */}
            {this.state.boards ? this.state.boards.map((items,index) => (
             <Boards key={index}  date="12/12/2012" data = {items} />
           ))   : ""}
              </Card.Group>
        </div>


        </div>
        );
      }
    }

    export default App;
