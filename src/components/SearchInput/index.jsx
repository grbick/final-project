import React,{useContext} from "react";
import "./searchInput.scss";
import { applicationContext } from "../../context";


const SearchInput = (e) => {
  const { inputValue, setInputValue} = useContext(applicationContext);
  return (
    <div className="searchInput">
        <input type="text" name="" id="" placeholder="Search something..."
        onInput={(e)=>{setInputValue(e.target.value)}}
        value={inputValue}/>
    </div>
  );
};

export default SearchInput;
