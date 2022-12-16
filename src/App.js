import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <h1>Exercise Tracker</h1>
          <p>Track your exercise progress by logging your exercises, and updating your stats as needed.</p>
          <Navigation />
          <Routes>
              <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}></Route>
              <Route path="/add-exercise" element={<AddExercisePage />}></Route>
              <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
            </Routes>
          </div>
          <div className="App-footer">
            <p>ⓒ 2022 D'Souza Maya</p>
          </div>
      </Router>
    </div>
  );
}

export default App;