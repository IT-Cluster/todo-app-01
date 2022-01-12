import React from 'react';
import './App.css';
import {Container, Navbar} from "react-bootstrap";
import {Footer} from "./components/Footer";
import {ToDoList} from "./components/ToDoList";

const defaultData = {
    title: 'React',
    items: [{
        label: 'Start',
        checked: true,
        index: 0
    }, {
        label: 'Components',
        checked: false,
        index: 1
    }, {
        label: 'Lifecircle methods',
        checked: false,
        index: 2
    }]
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: defaultData
        }
        this.onItemChanged = this.onItemChanged.bind(this);
    }

    onItemChanged(changedItem) {
        console.log('App component', changedItem);
        const changedItems = this.state.data.items.map(item => {
            if (item.index === changedItem.index) {
                item.checked = !item.checked;
            }
            return item;
        })
        console.log(changedItems);
        this.setState({
            data: {
                ...this.state.data,
                items: changedItems
            }
        })
    }

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">TODO App v.1.0</Navbar.Brand>
                    </Container>
                </Navbar>
                <Container>
                    <ToDoList {...this.state.data} onItemChanged={this.onItemChanged}/>
                </Container>
                <Footer data={this.state.data}/>
            </>
        );
    }
}
