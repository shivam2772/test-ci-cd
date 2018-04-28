import React, { Component } from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { Button, Card, Image, Modal, List, Popup } from 'semantic-ui-react'
import './App.css';
import { Form, TextArea } from 'semantic-ui-react';
import TrelloCards from './trellocards';
class Start extends Component {
    state = { open: false }
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    render() {
        const { open } = this.state;
        return (
            <div>
                <Segment>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' circular />
                        TRELLO
            </Header>
                    <Header as='h3' textAlign='right'>
                        <Icon.Group size='large' onClick={this.show}>
                            <Icon name='plus' />
                        </Icon.Group>
                        <Modal style={{ margin: 'auto', marginTop: 'auto' }} open={open} onClose={this.close}>
                            <Modal.Header>Add a new Card</Modal.Header>
                            <Modal.Content scrolling>
                                <Modal.Description>
                                    <Header>Title of the Card</Header>
                                    <p>Note: You cant change the title of this Card once created</p>
                                    <Form>
                                        <TextArea autoHeight placeholder='Add a Card' />
                                    </Form>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary onClick={this.close}>
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
