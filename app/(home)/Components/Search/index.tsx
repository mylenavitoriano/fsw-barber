"use client"

import { LuSearch } from "react-icons/lu";
import { SearchContainer } from "./style";
import { Button, Input } from "@mantine/core";

const Search = () => {
    return (  
        <SearchContainer>
            <Input radius="md" placeholder="Buscar"/>
            <Button>
                <LuSearch size={18}/>
            </Button>
        </SearchContainer>
    );
}
 
export default Search;