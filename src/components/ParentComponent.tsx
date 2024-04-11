import React, { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent';
import CardComponent from './CardComponent';

interface Card {
    id: number;
    firstName: string;
    email: string;
    number: string;
    imageSrc: string;
}

const ParentComponent: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [searchResults, setSearchResults] = useState<Card[]>([]);
    console.log("searchResults");
    console.log(cards);
    console.log(searchResults);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('../src/data.json');
            const data = await response.json();
            setCards(data.cards);
        }
        fetchData();
    }, []);

    const handleSearch = (query: string) => {
        const filteredResults = cards.filter((card) =>
            card.firstName.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div>
            <SearchComponent onSearch={handleSearch} />
            <div className="card-container row">
                {searchResults.length !== 0 ? searchResults.map((result) => (
                    <CardComponent
                        key={result.id}
                        id={result.id}
                        name={result.firstName}
                        email={result.email}
                        number={result.number}
                        imageSrc={result.imageSrc}
                    />
                )) : cards.map((result) => (
                    <CardComponent
                        key={result.id}
                        id={result.id}
                        name={result.firstName}
                        email={result.email}
                        number={result.number}
                        imageSrc={result.imageSrc}
                    />
                ))

                }
                { }
            </div>
        </div>
    );
};

export default ParentComponent;
