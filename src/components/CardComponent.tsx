import React from 'react';
// import Image from 'next/image';
interface CardComponentProps {
    id: number;
    name: string;
    email: string;
    number: string;
    imageSrc: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ id, name, email, number, imageSrc }) => {
    return (
        <div className="card w-[calc(33.33%-20px)] mx-[10px]">
            <div className='w-[300px] h-[400px]'>
                <img src={imageSrc} alt={name} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>ID: {id}</p>
                <p>Email: {email}</p>
                <p>Number: {number}</p>
            </div>
        </div>
    );
};

export default CardComponent;
