import React,{useContext} from "react";
import "./searchInput.scss";
import { applicationContext } from "../../context";


const SearchInput = () => {
  const { inputValue, setInputValue} = useContext(applicationContext);
  return (
    <div className="searchInput">
      SearchInput
      
        <input type="text" name="" id="" placeholder="search something..."
        onInput={(e)=>{setInputValue(e.target.value)}}
        value={inputValue}/>
    </div>
  );
};

export default SearchInput;
