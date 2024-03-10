import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const PageDetail = ({pages}) => {
    const {id} = useParams();    
    const page = pages.find(page => page.id === parseInt(id));

    if(!page) {
        return <div> Page's not found </div>;
    }
        return (
            <div>
                <h1>{page.title}</h1>
                
                <li key={page.id}>
                    <Link to={`/pages/${page.linkId}`}>{page.linkTitle}</Link>
                </li>
            
            </div>
        );
    };

export default PageDetail;