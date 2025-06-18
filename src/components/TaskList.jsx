import { Container, ListGroup } from 'react-bootstrap';
import { TaskItem } from './TaskItem.jsx'



export function TaskList({ filter, tasks, onDeleteTask, onUpdateTask, onCompleteTask }) {
    return (
        <Container>
            <Container className='py-3 px-5'>
                <h3 className='mb-4'>{filter === "All" ? "All task" : filter === "Today" ? "Today task" : "Upcoming task"}</h3>
                <ListGroup variant="flush gap-3">
                    {tasks.length > 0 ? (
                        tasks.map(task => (
                            <TaskItem
                                key={task.id}
                                taskData={task}
                                onDeleteTask={onDeleteTask}
                                onUpdateTask={onUpdateTask}
                                onCompleteTask={onCompleteTask}
                            />
                        ))
                    ) : (
                        <p className="text-muted text-center">No task found</p>
                    )}
                </ListGroup>
            </Container>
        </Container>

    )
}

