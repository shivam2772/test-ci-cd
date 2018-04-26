import React, { Component } from 'react';
import { Header, Icon, Segment} from 'semantic-ui-react';
import { Button, Card, Image } from 'semantic-ui-react'
import './App.css';
import TrelloCards from './trellocards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Segment>
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' circular />
                TRELLO
            </Header>
            <Header as='h3' textAlign='right'>
              <Icon.Group size='large'>
                <Icon name='plus' />
              </Icon.Group>
              <Icon.Group size='large'>
                <Icon name='info circle' />
              </Icon.Group>
              <Icon.Group size='large'>
                <Icon name='bell outline' />
              </Icon.Group>
            </Header>
          </Segment>
          <TrelloCards />
        </div>


        </div>
        );
      }
    }

    export default App;
