import { Button, Card, Image } from 'semantic-ui-react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import Mods from './modalfortasks';
import firebase from 'firebase';
import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';
import firebasedb from './firebase/firebase';
import addTasks from './addTasks';

let valueLocal = "";
class TrelloCards extends Component {



    constructor(props){
        super(props);

        this.state = {
            open:false,
            cards : [],
            boardId: "",
            cardIndex: null

        };
        this.addTask = this.addTask.bind(this);
    }

    addTask(){

        const indexVal = this.state.cardIndex;
        const taskData = this.state.cards[indexVal].taskName.length
        const boardId = this.state.boardId;
        firebase.database().ref().child('boards/' + boardId + '/cards/' + indexVal + '/taskName/' + taskData).set(valueLocal);
        this.setState({ open: false })
    }

     show = (index) => {
        this.setState({ 
            open: true,
            cardIndex: index
        })
    };


    componentDidMount(){

        const boardId = localStorage.getItem("boardId");
        console.log("Yo Data",boardId);

        firebasedb.child("/boards/"+boardId+"/cards").on('value', (snapshot) => {
            let data = snapshot.val()
            if(data != null){
                
                // let arr = Object.keys(data).map(function(k) { return data[k] });
                this.setState({
                    cards:data,
                    boardId: boardId,
                })
                console.log("Yo Datas",this.state.cards);
                localStorage.removeItem("boardId");
            }
            
        })
  }
    handleClick = (index) => {
        console.log("I clicked u",index)
    };
    
    handleChange(event) {
        valueLocal = event.target.value
    }

    render() {
        const { open } = this.state;
        return (
            <React.Fragment>
                <Card.Group style={{ display: 'flex', justifyContent: 'center' }} >
                {this.state.cards.map((items,index)=>(
                    <Card style={{ margin: 35 } }>
                        <Card.Content extra>
                            <Card.Header>
                                {items.name}
                            </Card.Header>
                            <Card.Meta>
                                Date: {items.createdOn}
                            </Card.Meta>
                            <Card.Description>
                                {items.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content>
                            <Segment inverted>
                                <List divided inverted relaxed>
                                    {items.taskName.map((value)=>(<Mods title={value} />))} 
                                </List>                            
                            </Segment>
                        </Card.Content>
                        <Button primary onClick={() => this.show(index)}>Add A Task</Button>

                        <Modal style={{ margin: 'auto', marginTop: 'auto' }} open={open} onClose={this.close}>
                            <Modal.Header>Add more tasks</Modal.Header>
                            <Modal.Content scrolling>
                                <Modal.Description>
                                    <Header>{items.name}</Header>
                                    <p>Add Task</p>
                                    <Form>
                                        <TextArea autoHeight placeholder='Add a Task'  onChange={this.handleChange} />
                                    </Form>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary onClick={() => this.addTask()}>
                                    Proceed <Icon name='right chevron' />
                                </Button>
                            </Modal.Actions>
                        </Modal>
                        
                    </Card>))}
                </Card.Group>
            </React.Fragment>
        );
    }
}


export default TrelloCards;
