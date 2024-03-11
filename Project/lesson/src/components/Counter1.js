import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ThemeToggle = () => {
    const switcher = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch({type: 'TOGGLE_THEME'});
    };

    return (
        <div style={{background: switcher === true? 'black' : 'white', color: switcher === false? 'black':'white' }}>
            <h1>
                TEXT
            </h1>
            <button onClick={toggleTheme}>press to toggle theme</button>
        </div>
    );

}

export default ThemeToggle;