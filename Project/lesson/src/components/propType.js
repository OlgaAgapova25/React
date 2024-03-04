import React from 'react';
import PropTypes from 'prop-types';

const Student = ({name, age, isStudent}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Возраст: {age}</p>
            <h3>{isStudent ? 'Student' : 'Not a student'}</h3>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        isStudent: PropTypes.bool
    };
    
export default Student;