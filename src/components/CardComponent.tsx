import React from 'react';
interface CardComponentProps {
    id: number;
    firstName?: string;
    email: string;
    number: string;
    imageSrc: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ id, firstName, email, number, imageSrc }) => {

    return (
        <div className="card col-4 p-1">
            <div className='cardImage overflow-hidden' >
                <img className='w-[300px] h-[400px] bg-cover ' src={imageSrc} alt={firstName} />
            </div>
            <div>
                <h2>{firstName}</h2>
                <p>ID: {id}</p>
                <p>Email: {email}</p>
                <p>Number: {number}</p>
            </div>
        </div>
    );
};

export default CardComponent;
