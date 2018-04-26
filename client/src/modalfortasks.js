import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal, List } from 'semantic-ui-react';
import _ from 'lodash';

class Mods extends Component {
    render() {
        return (
            <Modal style={{ margin: 'auto', marginTop: 'auto' }} trigger={<List.Item>{this.props.title}</List.Item>}>
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content scrolling>
                    <Modal.Description>
                        <Header>{this.props.title}</Header>
                        <p>Add Task</p>
                        <input />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>);
    }
}
export default Mods;