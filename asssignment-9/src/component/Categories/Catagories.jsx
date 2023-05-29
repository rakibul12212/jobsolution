import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Category from '../Category/Category';
import './Categories.css'

const Catagories = () => {

  
    const[Categories,setCategories]=useState([]);
    useEffect( ()=>{

        fetch('card.json')
        .then(res=>res.json())
        .then(card=>setCategories(card))

    },[])

    return (
        <div>
          
            <div className='category'>
                <h1 className='category-title text-5xl p-10'>Job Category List</h1>
                <p className='category-description text-xl'>Explore thousands of job opportunities with all the information you need.Its your future</p>
            </div>
             
                 <div className='card'>
                 {
                   Categories.map(category=> <Category
                   key={category.id}
                   category={category}
                   ></Category>)
                 }
                 </div>
          
            
        </div>
    );
};

export default Catagories;