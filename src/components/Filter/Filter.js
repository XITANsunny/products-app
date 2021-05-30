//import { useState } from 'react';
import './Filter.module.css';


const Filter = ({filterType, setFilterType,productTypes})=>{
    const handleChange = event=>{
        setFilterType(event.target.value);
      }

    return (
        <form>
            <label>Filter by</label>&nbsp;&nbsp;&nbsp;
            <select onChange = {handleChange} value={filterType}>
            {productTypes.map((ty, i)=>{return(<option value={ty} key={i}>{ty}</option>)})}
            </select>
        </form>
    );
}

export default Filter;