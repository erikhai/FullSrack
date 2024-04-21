import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextArea1'>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control as="textarea" rows={3} ref={revText} defaultValue={defaultValue} />
      </Form.Group>
      <Button variant="outline-info" type="submit">Submit</Button>
    </Form>
  );
}

export default ReviewForm;
