import { Button, Card, Image } from 'semantic-ui-react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import Mods from './modalfortasks';
import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';
class TrelloCards extends Component {
    //     componentDidMount(){
    // // Initialize Firebase
    // var config = {
    //   apiKey: "AIzaSyCba3Oq0fWB5iVe-cpRvPb12Ii4TPaC9vQ",
    //   authDomain: "stackroutetrello.firebaseapp.com",
    //   databaseURL: "https://stackroutetrello.firebaseio.com",
    //   projectId: "stackroutetrello",
    //   storageBucket: "",
    //   messagingSenderId: "13912144222"
    // };
    // firebase.initializeApp(config);
    //         var fireBaseBoardsRef = firebase.database().ref().child("/user/"+ "vdhulappanavar")
    //             .once("value").then(function(snapshot){
    //                 console.log(snapshot.val())
    //             })
    //     }

    render() {
        return (
            <React.Fragment>
                <Card.Group>
                    <Card style={{ margin: 20 }}>
                        <Card.Content>
                            {/* <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' /> */}
                            <Card.Header>
                                Card 1
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/2018
    </Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Segment inverted>
                                <List divided inverted relaxed>

                                    <Mods title="Task1" />
                                    <Mods title="Task2" />
                                    <Mods title="Task3" />
                                </List>
                            </Segment>
                        </Card.Content>
                        <Modal style={{ margin: 'auto', marginTop: 'auto' }} trigger={<Button primary>Add</Button>}>
                            <Modal.Header>Add more tasks</Modal.Header>
                            <Modal.Content scrolling>
                                <Modal.Description>
                                    <Header>Task1</Header>
                                    <p>Add Task</p>
                                    <Form>
                                        <TextArea autoHeight placeholder='Add a Task' />
                                    </Form>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary>
                                    Proceed <Icon name='right chevron' />
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </Card>
                    <Card>
                        <Card.Content>
                            {/* <Image floated='right' size='mini' src='/assets/images/avatar/large/molly.png' /> */}
                            <Card.Header>
                                Card 2
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/2018
    </Card.Meta>
                            <Card.Description>
                                Molly wants to add you to the group <strong>musicians</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Segment inverted>
                                <List divided inverted relaxed>
                                    <Mods title="Task1" />
                                    <Mods title="Task2" />
                                    <Mods title="Task3" />
                                </List>
                            </Segment>
                        </Card.Content>
                        <Modal style={{ margin: 'auto', marginTop: 'auto' }} trigger={<Button primary>Add</Button>}>
                            <Modal.Header>Add more tasks</Modal.Header>
                            <Modal.Content scrolling>
                                <Modal.Description>
                                    <Header>Task2</Header>
                                    <p>Add Task</p>
                                    <Form>
                                        <TextArea autoHeight placeholder='Add a Task' />
                                    </Form>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary>
                                    Proceed <Icon name='right chevron' />
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </Card>
                    <Card>
                        <Card.Content>
                            {/* <Image floated='right' size='mini' src='/assets/images/avatar/large/jenny.jpg' /> */}
                            <Card.Header>
                                Card 3
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/2018
    </Card.Meta>
                            <Card.Description>
                                Jenny requested permission to view your contact details
    </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Segment inverted>
                                <List divided inverted relaxed>
                                    <Mods title="Task1 is a very good task so lets go for it nigga!" />
                                    <Mods title="Task2" />
                                    <Mods title="Task3" />
                                </List>
                            </Segment>
                        </Card.Content>
                        <Modal style={{ margin: 'auto', marginTop: 'auto' }} trigger={<Button primary>Add</Button>}>
                            <Modal.Header>Add more tasks</Modal.Header>
                            <Modal.Content scrolling>
                                <Modal.Description>
                                    <Header>Task3</Header>
                                    <p>Add Task</p>
                                    <Form>
                                        <TextArea autoHeight placeholder='Add a Task' />
                                    </Form>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary>
                                    Proceed <Icon name='right chevron' />
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </Card>
                </Card.Group>
            </React.Fragment>
        );
    }
}

export default TrelloCards;