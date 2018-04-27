import { Button, Card, Image } from 'semantic-ui-react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';

import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';

class Boards extends Component {

    render() {
        return (
            <React.Fragment>
                <Card.Group>
                    <Card style={{ margin: 20 }}>
                        <Card.Content>
                            <Card.Header>
                                {this.props.boardname}
                            </Card.Header>
                            <Card.Meta>
                                Date: {this.props.date}
                            </Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                      </Card>

                </Card.Group>
            </React.Fragment>
        );
    }
}

export default Boards;
