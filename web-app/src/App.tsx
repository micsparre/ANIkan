import React, { Fragment, useState } from 'react';
import useLocalStorage from 'use-local-storage'
import AsyncSearch from './components/search'
import ThemeButton from './components/theme'

import { Anime } from '@mattplays/aniapi'

import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';
import AnimeDisplay from './components/anime';


function App() {

  const defaultDark = window.matchMedia('(-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('themeprefers', defaultDark ? 'dark' : 'light');

  const [data, setData] = useState({} as Anime)

  const handleUpdate = (selected : any) => {
    console.log("data:", selected)
    setData(selected[0]);
  }

  return (
    <div className="App" data-theme={theme}>
      <div className="search-bar">
      <AsyncSearch data={data} onChange={handleUpdate} />
      <ThemeButton setTheme={setTheme} theme={theme}/>
      </div>
      <div className="search-data">
        {/* { data && Object.keys(data).length !== 0 && <span> description: {data?.descriptions?.en} </span> } */}
        <AnimeDisplay data={data} />
      </div>
    </div>
  );
}

export default App;
