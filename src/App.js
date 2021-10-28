import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import AddNote from './components/Add-Note';
import NoteList from './components/Note-list';
import EditNote from './components/Edit-Note';
import useLocalStorage from './components/useLocalStorage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
  
  const [notes, setNotes] = useLocalStorage('notes', []);

    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className="main-content">
            <Switch>
            <Route
              render={(props) => (
                <NoteList {...props} notes={notes} setNotes={setNotes} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                  <AddNote {...props} notes={notes} setNotes={setNotes} />
                )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditNote {...props} notes={notes} setNotes={setNotes} />
              )}
              path="/edit/:id"
            />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  };
  
  export default App;