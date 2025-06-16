import { Navbar, Container, Button } from 'react-bootstrap'
import '../style/Navbar.css'

export default function NavigationBar() {
    return (
        <Navbar expand="md" className='nav-bar'>
            <Container>
                <Navbar.Brand href="#home" color='#FFF'>
                    <img
                        alt=""
                        src="../../public/task_icon_sci_fi__3a61a2de.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Task Tracker
                </Navbar.Brand>
                <Button variant='light  ' className='add-task'>+</Button>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}