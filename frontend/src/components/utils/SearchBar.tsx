import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import "./SearchBar.css";

export default function SearchBar({ placeholder, data, onFilteredUsers }: any) {
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event: any) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value: any) => {
            return value.username
                .toLowerCase()
                .includes(searchWord.toLowerCase());
        });
        if (wordEntered.length === 0 && searchWord === "") {
            onFilteredUsers([], true);
        } else {
            onFilteredUsers(newFilter, false);
        }
    };

    const clearInput = () => {
        setWordEntered("");
        onFilteredUsers([], true);
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {wordEntered.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
        </div>
    );
}
