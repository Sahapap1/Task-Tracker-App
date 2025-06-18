import { Container, Form, Button } from "react-bootstrap"
import { useState, useEffect } from "react";


import '../style/TaskForm.css'

const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ''; 

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};


export const TaskForm = ({ isModalOpen, onClose, taskData, onSave }) => {
    const [taskName, setTaskName] = useState(taskData?.name || '');
    const [category, setCategory] = useState(taskData?.type || 'Work');
    const [taskDateTime, setTaskDateTime] = useState(formatDateForInput(taskData?.dateTime));

    useEffect(() => {
        setTaskName(taskData?.name || '');
        setCategory(taskData?.category || 'Work'); 
        setTaskDateTime(formatDateForInput(taskData?.dateTime));
    }, [taskData]); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: taskData?.id || Date.now().toString(),
            name: taskName,
            category: category,
            dateTime: taskDateTime
        };
        if (onSave) {
            onSave(newTask);
        }

        onClose(); 

    }

    return (
        <div className="form-overlay">
            <Form onSubmit={handleSubmit} className="form-container">
                <h3>{taskData ? 'modify Task' : 'Add New Task'}</h3>
                <Form.Group className="mb-3" controlId="task-name">
                    <Form.Label>Task name</Form.Label>
                    <Form.Control type="text" placeholder="Enter task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="task-category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="task-date-time">
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        name="selectedDateTime"
                        value={taskDateTime}
                        onChange={(e) => setTaskDateTime(e.target.value)}
                        required
                    />
                </Form.Group>
                <Container className="d-flex justify-content-end gap-3">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="danger" type="button" onClick={onClose}>
                        Cancel
                    </Button>
                </Container>
            </Form>
        </div>
    )
}