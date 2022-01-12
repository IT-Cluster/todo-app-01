import {Container, Navbar} from "react-bootstrap";

export const Footer = (props) => {
    const checkedItems = props.data.items.filter(item => item.checked).length;
    return <Navbar fixed="bottom" bg="light">
        <Container>
            {props.data.title} | Progress: {checkedItems}/{props.data.items.length}
        </Container>
    </Navbar>
}