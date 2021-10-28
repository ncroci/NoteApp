import React from 'react';
import _ from 'lodash';
import Note from './note';
import { Container } from 'react-bootstrap';

const NoteList = ({notes, setNotes}) => {
  const handleRemoveNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id))
  };

  return (
      <div>
          <div className = "container">
              {!_.isEmpty(notes) ? (
                  notes.map((note) => (
                      <Note key={note.id} {...note} handleRemoveNote={handleRemoveNote} />
                  ))
              ) : (
                  <p className="message">No notes currently.</p>
              )}
          </div>
      </div>
  )
};

export default NoteList;