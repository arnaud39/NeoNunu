import React from 'react';
import Chatbot from 'react-chatbot-kit'

import ReactDOM from 'react-dom';
import { Button, Sidenav, Nav, Dropdown, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';


function App() {
  return (

<div className="App">
    <header className="App-header">
        <div class="flex-container">
            <div style={{ "max-width": 250 }} class="flex-child magenta">
                <Sidenav defaultOpenKeys={['4']} activeKey="3">
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1" icon={<Icon icon="user-circle" />}>
                            Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="data-authorize" />}>
                            Personal Data
                            </Nav.Item>
                            <Nav.Item eventKey="3" icon={<Icon icon="smile-o" />}>
                            Assistant
                            </Nav.Item>
                            <Dropdown eventKey="4" title="Me & Sparkasse" icon={<Icon icon="bank" />}>
                            <Dropdown.Item eventKey="3-1">Services</Dropdown.Item>
                            <Dropdown.Item eventKey="3-2">Requests</Dropdown.Item>
                            <Dropdown.Item eventKey="3-3">Advisor</Dropdown.Item>
                            </Dropdown>
                            <Nav.Item eventKey="5" icon={<Icon icon="gear-circle" />}>
                            Settings
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
            <div id="chat" class="flex-child green">
                <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
            </div>
        </div>
    </header>
</div>
    
    
  );
}

export default App;
