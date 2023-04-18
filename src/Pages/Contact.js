import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './contact.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    });
  };

  return (
    <Form onSubmit={handleSubmit} className='cont'>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email Id</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactPage;
