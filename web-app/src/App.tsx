import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage'
import AsyncExample from './components/search'
import ThemeButton from './components/theme'

import { Anime } from '@mattplays/aniapi'

import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';


function App() {

  const defaultDark = window.matchMedia('(-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('themeprefers', defaultDark ? 'dark' : 'light');

  const [data, setData] = useState({} as Anime)

  const handleUpdate = (selected : any) => {
    setData(selected[0]);
  }

  return (
    <div className="App" data-theme={theme}>
      <ThemeButton setTheme={setTheme} theme={theme}/>
      <AsyncExample data={data} onChange={handleUpdate} />
      {data && Object.keys(data).length !== 0 && <span> description: {data?.descriptions?.en} </span> } {/* make a component */}
    </div>
  );
}

export default App;
