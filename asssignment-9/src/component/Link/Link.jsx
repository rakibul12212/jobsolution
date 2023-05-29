import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-8 ml-20 p-5 '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;