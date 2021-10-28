import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';



const NoteForm = (props) => {
  const [note, setNote] = useState({
    noteTitle: props.note ? props.note.noteTitle : '',
    content: props.note ? props.note.content : '',
    date: props.note ? props.note.date : ''
  });
  
  const [errorMsg, setErrorMsg] = useState('');
  const { noteTitle, content } = note;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [noteTitle, content];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '';
    });
  
    if (allFieldsFilled) {
      const note = {
        id: uuidv4(),
        noteTitle,
        content,
        date: new Date()
      };
      props.handleOnSubmit(note);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
        setNote((prevState) => ({
          ...prevState,
          [name]: value
        }));
    };


  return (
    
    <div className="main-form">
      <h2>Add Note</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label></Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="noteTitle"
            value={noteTitle}
            placeholder="Title"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Control
            as="textarea" 
            rows={5} 
            className="input-control"
            type="text"
            name="content"
            value={content}
            placeholder="Enter Note"
            onChange = {handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Add Note
        </Button>
        {errorMsg && <Alert className="alert alert-danger">{errorMsg}</Alert>}
      </Form>
    </div>
  );
};

export default NoteForm;