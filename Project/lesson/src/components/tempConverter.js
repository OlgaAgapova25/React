import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react';
import MenuItem from '@mui/material/MenuItem';




const TemperatureConverter = () => {
        const [inputValue, setInputValue] = useState('');
        const [submittedValue, setSubmittedValue] = useState([]);
        const [inputDeg, setInputDeg] = useState('');
            
        const handleSubmit = (e) => {
            e.preventDefault();
            setSubmittedValue(inputValue);
            setInputDeg(inputDeg);
            setInputValue('');
        };

        const degrees = [
            {
              value: 'Celcius',
              label: 'C',
            },
            {
              value: 'Farrengheit',
              label: 'F',
            },
          ];

        return (
           
        <div>
            <form onSubmit={handleSubmit}>

            <TextField id="outlined-basic" label="Enter temp value" variant="outlined" type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                
        <TextField
          id="outlined-select-degrees"
          select
          label="Select"
          helperText="Please select your degrees"
          onChange={(e) => setInputDeg(e.target.value)}
        >
          {degrees.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
              
            </MenuItem>
          ))}
        </TextField>


                <button type="submit">Submit</button>
            </form>
            {submittedValue && <p>Submitted value: {inputDeg == 'Celcius' ? (submittedValue*9/5)+32 : (submittedValue-32)*5/9}  </p>}
        </div>
        );
    };

    export default TemperatureConverter;