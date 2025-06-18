import { Navbar, Container, Button, Nav } from 'react-bootstrap'
import { TaskForm } from './TaskForm.jsx'
import { Modal as AppModal } from './Modal.jsx'
import { useState } from 'react'

import '../style/Navbar.css'

export default function NavigationBar({ onAddTask }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveNewTask = (newTaskData) => {
        if (onAddTask) {
            onAddTask(newTaskData);
        }
    };

    return (
        <>
            <Navbar expand="md" className='nav-bar'>
                <Container>
                    <Nav className='me-auto'>
                        <Navbar.Brand href="#home" color='#FFF' className=''>
                            <img
                                alt=""
                                src="../../public/task_icon_sci_fi__3a61a2de.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Task Tracker
                        </Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Button variant='light' className='add-task' onClick={() => setIsModalOpen(true)}>+</Button>
                    </Nav>

                </Container>
            </Navbar>
            {isModalOpen && (
                <AppModal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <TaskForm isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveNewTask} />
                </AppModal>
            )}
        </>

    )
}