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
        <div className="card col-3">
            <div className=' overflow-hidden' >
                <img className='w-[300px] h-[400px] bg-cover ' src={imageSrc} alt={name} />
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
