import React from 'react';
import './Category.css'

const Category = (props) => {
    return (
        <div >
           
            
            <div className='category-card p-5'>
                
                <img src={props.category.icon} alt="" className='icon' /><br></br>
                <h1 className='text-3xl'>{props.category.title}</h1><br></br>
                <p className='text-xl'>{props.category.jobs}</p>
                
            </div>
        </div>
    );
};

export default Category;