import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal, List } from 'semantic-ui-react';
import _ from 'lodash';
import { Form, TextArea } from 'semantic-ui-react';

class Mods extends Component {
    state = { open: false }
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    render() {
        const { open } = this.state;
        return (
            <React.Fragment>
                <List.Item onClick={this.show}>{this.props.title}</List.Item>
                <Modal style={{ margin: 'auto', marginTop: 'auto' }} open={open} onClose={this.close}>
                    <Modal.Header>Profile Picture</Modal.Header>
                    <Modal.Content scrolling>
                        <Modal.Description>
                            <Header>{this.props.title}</Header>
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
            </React.Fragment>);
    }
}
export default Mods;