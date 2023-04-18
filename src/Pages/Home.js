import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const HomePage = ({ formData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (formData) {
      const { firstName, lastName } = JSON.parse(formData);
      setFirstName(firstName);
      setLastName(lastName);
    }
  }, [formData]);

  return (
    <Container>
      <h1>Welcome to Todo APP!</h1>
      {firstName && lastName && (
        <p>
          Thank you, {firstName} {lastName}, for contacting us.
        </p>
      )}
      <button type="button" class="btn btn-danger">Clear data</button>

    </Container>
  );
};

export default HomePage;
