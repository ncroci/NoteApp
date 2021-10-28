import React from 'react';
import NoteForm from './NoteForm';
import { useParams } from 'react-router-dom';

const EditNote = ({ history, notes, setNotes }) => {
  const { id } = useParams();
  const noteToEdit = notes.find((note) => note.id === id);

  const handleOnSubmit = (note) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes([note, ...filteredNotes]);
    history.push('/');
  };

  return (
    <div>
      <NoteForm note={noteToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditNote;