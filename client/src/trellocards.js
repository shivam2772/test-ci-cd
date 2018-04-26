import { Button, Card, Image } from 'semantic-ui-react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import Mods from './modalfortasks';
import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';
import firebasedb from './firebase/firebase';
class TrelloCards extends Component {
    componentDidMount() {
        // Initialize Firebase
        var toprint = "";
        var fireBaseBoardsRef = firebasedb.child("/user/" + "vdhulappanavar").on('value', function (snapshot) {
            console.log(snapshot.val())
            const users = snapshot.val()
            //    for(board in users.boards){
            //      console.log(board)
            //      toprint += `<div>${board}</div>`
            //  }
            console.log(users);
        });
    }

    render() {
        return (
            <React.Fragment>
                <Card.Group style={{display:'flex', justifyContent:'center'}}>
                    <Card style={{ margin: 35 }}>
                        <Card.Content extra>
                            <Card.Header>
                                Card 1
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/3518
    </Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content>
                            <Segment inverted>
                                <List divided inverted relaxed>

                                    <Mods title="Task1" />
                                    <Mods title="Task2" />
                                    <Mods title="Task1" />
                                    <Mods title="Task2" />
                                    <Mods title="Task1" />
                                    <Mods title="Task2" />
                                    


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
                    <Card style={{ margin: 35 }}>
                        <Card.Content extra>
                            <Card.Header>
                                Card 2
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/3518
    </Card.Meta>
                            <Card.Description>
                                Molly wants to add you to the group <strong>musicians</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content >
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
                    <Card style={{ margin: 35 }}>
                        <Card.Content>
                            <Card.Header>
                                Card 3
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/3518
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
                    <Card style={{ margin: 35 }}>
                        <Card.Content>
                            <Card.Header>
                                Card 3
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/3518
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
                    <Card style={{ margin: 35 }}>
                        <Card.Content>
                            <Card.Header>
                                Card 3
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/3518
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