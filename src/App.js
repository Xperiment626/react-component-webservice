import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Character from './components/Character';
import Pagination from './components/Pagination';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const urlAPI = "https://rickandmortyapi.com/api/character"; // URL to get all caracters from the API
  const allCaracters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setInfo(data.info);
        setCharacters(data.results);
      })
      .catch(err => console.log(err));
  };

  const onPrev = () => {
    allCaracters(info.prev);
  }

  const onNext = () => {
    allCaracters(info.next);
  }

  useEffect(() => {
    allCaracters(urlAPI);
  }, []);

  return (
    <>
      <Navbar brand="Iñaki Manosalvas - React Components and WebService"/>
      <div className='container mt-5'>
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>
        <Character characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;
