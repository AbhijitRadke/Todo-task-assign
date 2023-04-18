import { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const Task = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks(prevTasks => [...prevTasks, task]);
    setTask('');
  };

  const handleDelete = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  const handleUpdate = (index, updatedTask) => {
    setTasks(prevTasks => prevTasks.map((t, i) => i === index ? updatedTask : t));
  };

  return (
    <Container>
      <h1>Task Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTask">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            value={task}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
      <hr />
      <ListGroup>
        {tasks.map((t, i) => (
          <ListGroup.Item key={i}>
            <div className="d-flex justify-content-between align-items-center">
              <div>{t}</div>
              <div>
                <Button variant="warning" onClick={() => handleUpdate(i, prompt('Enter updated task:', t))}>
                  Update
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(i)}>
                  Delete
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Task;
