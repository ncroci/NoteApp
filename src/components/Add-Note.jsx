import React from 'react';
import NoteForm from './NoteForm';

const AddNote = ({history, notes, setNotes}) => {
  const handleOnSubmit = (note) => {
    setNotes([note, ...notes]);
    history.push('/');
  };

  return (
    <div>
      <NoteForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddNote;