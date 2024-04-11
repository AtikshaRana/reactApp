import React, { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent';
import CardComponent from './CardComponent';
import Pagination from './PaginationComponent';

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
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);
    const pageSize = 10;
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('./data.json');
            const data = await response.json();
            console.log(data);
            setCards(data.cards);
            setTotalPages(Math.ceil(data.cards.length / pageSize));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const displayedCards = cards.slice(startIndex, endIndex);


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearch = (query: string) => {
        console.log(query);
        if (query.trim() === '') {
            setSearchResults(cards);
        } else {
            const filteredResults = cards.filter((card) =>
                card.firstName.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    };

    console.log(searchResults.length);

    return (
        <section>
            <div className="container">
                <SearchComponent onSearch={handleSearch} />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="card-container row">
                        {searchResults.length !== 0
                            ? searchResults.map((result) => <CardComponent key={result.id} {...result} />)
                            : displayedCards.map((result) => <CardComponent key={result.id} {...result} />)
                        }
                    </div>
                )}
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </section>
    );
};

export default ParentComponent;

