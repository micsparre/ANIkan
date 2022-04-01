import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage'
import AsyncSearch from './components/search'
import ThemeButton from './components/theme'
import AnimeDisplay from './components/anime';
import { Anime } from '@mattplays/aniapi'

import 'bootstrap/dist/css/bootstrap.min.css';

// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';
import './components.css'


function App() {

  const defaultDark = window.matchMedia('(-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('themeprefers', defaultDark ? 'dark' : 'light');
  const [data, setData] = useState({} as Anime);

  const handleUpdate = (selected : any) => {
    // console.log("data:", selected);
    setData(selected[0]);
  }

  return (
    <div className="App" data-theme={theme}>
      <div className="search-bar">
      <AsyncSearch data={data} onChange={handleUpdate} />
      <ThemeButton setTheme={setTheme} theme={theme}/>
      </div>
      <div className="search-data">
        <AnimeDisplay data={data} />
      </div>
    </div>
  );
}

export default App;
