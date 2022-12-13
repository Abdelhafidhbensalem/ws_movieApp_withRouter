import './App.css';
import React, { useState } from "react"
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';
import data from './data.js'
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add/Add';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [newList, setNewList] = useState(data)
const addMovie =(newMovie)=>{
  setNewList([...newList, {...newMovie, id:newList.length}])
console.log(newMovie)
}

  return (<>

    <Routes>
      <Route path='/' element={<div>
        <NavBar />
        <CardList data={newList} />
      </div >} />
      <Route path='/add' element={<><NavBar /><Add addMovie={addMovie}/></>} />
    <Route path='/details/:x' element={<MovieDetails data={newList}/>}/>
    </Routes>
  </>
  );
}

export default App;



