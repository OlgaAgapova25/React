import React from 'react';
import {Link} from 'react-router-dom';

const PagesList = ({pages}) => (
    
    <div>
        <ul>
            {pages.map(page => (
                <li key={page.id}>
                    <Link to={`/pages/${page.id}`}>{page.title}</Link>
                </li>
            ))}
        </ul>
    </div>
    
);
export default PagesList;