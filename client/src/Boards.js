import { Button, Card, Image } from 'semantic-ui-react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import {Redirect, Route, Router} from "react-router";
import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';
import Tasks from './ayush/App';
import { Link } from "react-router-dom";

class Boards extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        // Handle Click
        console.log("handle click here")
        
    }


    render() {
        return (
            <React.Fragment>
                <Card.Group>
                    <Card style={{ margin: 20 }} onClick={this.handleClick}>
                        <Card.Content >
                            <Card.Header>
                               
                                {this.props.boardname}
                            </Card.Header>
                            <Card.Meta>
                                Date: {this.props.date}
                            </Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content >
                      </Card>
                   
                </Card.Group>
            </React.Fragment>
        );
    }
}

export default Boards;
