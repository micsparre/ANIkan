import React from 'react';
import useLocalStorage from 'use-local-storage'
import AsyncExample from './components/search'
import ThemeButton from './components/theme'

import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';


function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className="App" data-theme={theme}>
      <ThemeButton setTheme={setTheme} theme={theme}/>
      <AsyncExample />
    </div>
  );
}

export default App;
