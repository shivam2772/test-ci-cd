import React, { Component } from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { Button, Card, Image, Modal, List, Popup } from 'semantic-ui-react'
import './App.css';
import TrelloCards from './trellocards';
class Start extends Component {
    render() {
        return (
            <div>
                <Segment>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' circular />
                        TRELLO
            </Header>
                    <Header as='h3' textAlign='right'>
                        <Modal style={{ margin: 'auto', marginTop: 'auto' }} trigger={<Icon.Group size='large'>
                            <Icon name='plus' />
                        </Icon.Group>}>
                            <Modal.Header>Add a new Board</Modal.Header>
                            <Modal.Content scrolling>
                                <Modal.Description>
                                    <Header>Title of the Board</Header>
                                    <p>Note: You cant change the title of this board once created</p>
                                    <input />
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary>
                                    Proceed <Icon name='right chevron' />
                                </Button>
                            </Modal.Actions>
                        </Modal>
                        <Popup
                            trigger={<Icon.Group size='large'>
                                <Icon name='info circle' />
                            </Icon.Group>}
                            content='Note: Click on + button to add a new Card and in the card click Add button to add tasks to it, Enjoy!!'
                        />

                        <Icon.Group size='large'>
                            <Icon name='bell outline' />
                        </Icon.Group>
                    </Header>
                </Segment>
                <TrelloCards />
            </div>
        );
    }
}

export default Start;
