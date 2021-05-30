//import { useState } from 'react';
import './Filter.module.css';


const Filter = ({filterType, setFilterType,productTypes})=>{
    const handleChange = event=>{
        setFilterType(event.target.value);
      }

    return (
        <form>
            <lable>Filter by</lable>&nbsp;&nbsp;&nbsp;
            <select onChange = {handleChange} value={filterType}>
            {productTypes.map((ty)=>{return(<option value={ty} key={ty.index}>{ty}</option>)})}
            </select>
        </form>
    );
}

export default Filter;