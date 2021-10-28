import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Note = ({
  id,
  noteTitle,
  content,
  date,
  handleRemoveNote
}) => {
const history = useHistory();

  return (
    <Card className="note">
        <Card.Header className="note-title">{noteTitle}</Card.Header>
        <Card.Body className="note-details">
            <div>{content}</div>
            <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
            Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveNote(id)}>
          Delete
        </Button>
        </Card.Body>
        <Card.Footer>
        Date: {new Date(date).toDateString()}
        </Card.Footer>
    </Card>
  );
};

export default Note;