import { Button, Card, Badge } from 'react-bootstrap'
import { Modal as AppModal } from './Modal.jsx'
import { TaskForm } from './TaskForm.jsx'

import { useState } from 'react'

import '../style/TaskItem.css'



export function TaskItem({ taskData, onDeleteTask, onUpdateTask, onCompleteTask }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);

    const task = taskData;

    const handleDeleteClick = () => {
        setModalType('delete');
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        console.log(`confirm delete ${task.name}!`);
        if (onDeleteTask) onDeleteTask(task.id);
        setIsModalOpen(false);
        setModalType(null);
    };


    const handleSuccessClick = () => {
        setModalType('success');
        setIsModalOpen(true);
    };

    const handleConfirmSuccess = () => {
        console.log(`confirm ${task.name}!`);
        if (onCompleteTask) onCompleteTask(task.id, !task.isCompleted);
        setIsModalOpen(false);
        setModalType(null);
    };

    const handleEditClick = () => {
        setModalType('edit')
        setIsModalOpen(true)
    }

    const handleSaveEditedTask = (updatedTaskData) => {
        console.log("บันทึก Task ที่แก้ไขแล้ว:", updatedTaskData);
        if (onUpdateTask) onUpdateTask(updatedTaskData);
        setIsModalOpen(false)
        setModalType(null);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType(null);
    };

    if (!task) {
        return null;
    }


    return (
        <>
            <Card>
                <Card.Body className='d-flex justify-content-between task-item'>
                    <div className='d-flex gap-5'>
                        <h3 className='mb-2'>
                            {task.name}{' '}
                            <Badge bg={task.category === 'Work' ? 'warning' : task.category === 'Personal' ? 'danger' : 'dark'} className="ms-2">
                                {task.category}
                            </Badge>
                            {task.isCompleted && <Badge bg="success" className="ms-2">Success</Badge>}
                        </h3>
                        <div className='d-flex gap-4 task-item-time'>
                            <Card.Subtitle className="text-muted align-items-center d-flex">
                                {new Date(task.dateTime).toLocaleDateString('th-TH', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}
                            </Card.Subtitle>
                            <Card.Subtitle className="text-muted align-items-center d-flex">
                                {new Date(task.dateTime).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', hour12: false })}
                            </Card.Subtitle>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between gap-3'>
                        <Button variant='success' className='task-item-manage-btn' onClick={handleSuccessClick}>Success</Button>
                        <Button variant='secondary' className='task-item-manage-btn' onClick={handleEditClick}>Edit</Button>
                        <Button variant='danger' className='task-item-manage-btn' onClick={handleDeleteClick}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>

            {isModalOpen && (
                <>
                    <AppModal isOpen={isModalOpen} onClose={handleCloseModal}>
                        {modalType === 'success' && (
                            <>
                                <h3 className="text-center mb-3">confirm Success?</h3>
                                <p className="text-center">Are you sure would you like to success this task?</p>
                                <div className="d-flex justify-content-center gap-3 mt-4">
                                    <Button variant="success" onClick={handleConfirmSuccess}>
                                        confirm success
                                    </Button>
                                    <Button variant="secondary" onClick={handleCloseModal}>
                                        cancel
                                    </Button>
                                </div>
                            </>
                        )}

                        {modalType === 'delete' && (
                            <>
                                <h3 className="text-center mb-3">confirm delete?</h3>
                                <p className="text-center">Are you sure would you like to delete this task?</p>
                                <div className="d-flex justify-content-center gap-3 mt-4">
                                    <Button variant="danger" onClick={handleConfirmDelete}>
                                        confirm delete
                                    </Button>
                                    <Button variant="secondary" onClick={handleCloseModal}>
                                        cancel
                                    </Button>
                                </div>
                            </>
                        )}

                        {modalType === 'edit' && (
                            <TaskForm isOpen={isModalOpen} onClose={handleCloseModal} taskData={task} onSave={handleSaveEditedTask} />
                        )}
                    </AppModal>
                </>
            )}
        </>
    );
}