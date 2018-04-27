import { Button, Card, Image } from 'semantic-ui-react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import Mods from './modalfortasks';
import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';
import firebasedb from './firebase/firebase';
class TrelloCards extends Component {
    state = {
        open: false, title: [
            {
                cname: 'Aayush',
                tname: ['This is Aayush','This is Nema','This is Abhi1nema2','This is NGhosh'],
                descp: "Aayush wants to add you to the group best friends"
            },
            {
                cname: 'Abhishek',
                tname: ['This is AAayush','This is ANema','This is AAbhi1nema2','This is ANGhosh'],
                descp: "Abhishek wants to add you to the group best friends"
            },
            {
                cname: 'Nirmalya',
                tname: ['This is BAayush','This is BNema','This is BAbhi1nema2','This is BNGhosh'],
                descp: "Nirmalya wants to add you to the group best friends"
            },
            {
                cname: 'Yuvraj',
                tname: ['This is CAayush','This is CNema','This is CAbhi1nema2','This is CNGhosh'],
                descp: `Yuvraj wants to add you to the group best friends`
            },
            {
                cname: 'Aradhika',
                tname: ['This is Aradhika','This is Arvind','This is ZUZU','This is CNema','This is CAbhi1nema2','This is CNGhosh'],
                descp: `Aradhika wants to add you to the group nigga friends`
            }
        ],
    }
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    componentDidMount() {
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
    handleClick = () => {
        console.log("I clicked u")
    };
    render() {
        const { open } = this.state;
        return (
            <React.Fragment>
                <Card.Group style={{ display: 'flex', justifyContent: 'center' }}>
                {this.state.title.map((p,index)=>(
                    <Card style={{ margin: 35 }} onClick={this.handleClick}>
                        <Card.Content extra>
                            <Card.Header>
                                {p.cname}
    </Card.Header>
                            <Card.Meta>
                                Date: 12/08/3518
    </Card.Meta>
                            <Card.Description>
                                {p.descp}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content>
                            <Segment inverted>
                                <List divided inverted relaxed>
                                    {p.tname.map((o,i)=>(<Mods title={p.tname[i]} />))} 
                                </List>
                            </Segment>
                        </Card.Content>
                        <Button primary onClick={this.show}>Add</Button>
                        <Modal style={{ margin: 'auto', marginTop: 'auto' }} open={open} onClose={this.close}>
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
                                <Button primary onClick={this.close}>
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