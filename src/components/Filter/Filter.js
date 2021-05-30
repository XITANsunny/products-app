//import { useState } from 'react';
import './Filter.css';


const Filter = ({filterType, setFilterType,productTypes})=>{
    const handleChange = event=>{
        setFilterType(event.target.value);
      }

    return (
        <form>
            <lable>Filter by</lable>
            <select onChange = {handleChange} value={filterType}>
            {productTypes.map((ty)=>{return(<option value={ty} key={ty.index}>{ty}</option>)})}
            </select>
        </form>
    );
}

export default Filter;