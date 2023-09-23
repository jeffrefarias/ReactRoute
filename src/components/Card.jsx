import React from 'react';

const MyCard = ({ image, title, description,titleStrong }) => {
    return (
        <div className='mt-5' style={{ width: "500px"}}>
            <div className='text-center'>
                <h1>{title}<strong>{titleStrong}</strong> </h1>
                <p className='fs-4'>{description}</p>
            </div>
            <div>
                <img src={image} alt={title} style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
    );
};

export default MyCard;
