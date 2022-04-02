import React from 'react'
import Button  from 'react-bootstrap/Button';

export default function ThemeButton(props : any) {

    const switchTheme  = () => {
      const newTheme = props.theme === 'light' ? 'dark' : 'light';
      props.setTheme(newTheme);
    }
    const oppTheme = props.theme === 'light' ? 'dark' : 'light'

    return (
        <Button className="theme-button" variant={oppTheme} onClick={switchTheme}> {props.theme === 'light' ? 'Dark Mode' : 'Light Mode'} </Button>
    );
};