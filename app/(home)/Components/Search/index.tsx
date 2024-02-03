"use client"

import { LuSearch } from "react-icons/lu";
import { ButtonSearch, SearchContainer, InputSearch } from "./style";

const Search = () => {
    return (  
        <SearchContainer>
            <InputSearch />
            <ButtonSearch>
                <LuSearch size={18}/>
            </ButtonSearch>
        </SearchContainer>
    );
}
 
export default Search;