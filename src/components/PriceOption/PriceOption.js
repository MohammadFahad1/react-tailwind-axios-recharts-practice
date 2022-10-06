import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className='bg-indigo-300 p-5 my-4 rounded-md'>
            <h1 className='text-center'>
                <span className='text-6xl font-bold text-white'>{price}</span>
                <span className='font-semibold text-gray-300'>
                    /Month
                </span>
            </h1>
            <p className='text-center text-3xl my-4'>{name}</p>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            <button className='bg-green-500 font-bold w-full p-3 mt-4 rounded-lg hover:bg-orange-400'>Buy Now</button>
        </div>
    );
};

export default PriceOption;