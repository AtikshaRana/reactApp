import React, { useState } from 'react';

interface SearchComponentProps {
    onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            onSearch(searchQuery);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        handleSearch();
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};


export default SearchComponent;
