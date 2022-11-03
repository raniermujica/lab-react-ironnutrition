import { useState } from "react";
import { Divider, Input } from 'antd';

function Search(props) {
    const [searchInput, setSearchInput] = useState("")
    
    const handleChange = (event) => {
        setSearchInput(event.target.value)


        props.filterSearch(event.target.value)
    }

    return (
        <>
          <Divider>Search</Divider>
    
          <label>Search</label>
          <Input value={searchInput} type="text" name="search" onChange={handleChange} />
        </>
      );
}



export default Search;