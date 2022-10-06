import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Free Features',
                'Awesome Features',
                'Extra Features',
                'Unnecessary Features',
                'Will Never Feature',
                'Hudai Features',
                'Ajaira Features',
                'Noakhailla Features'
            ]
        },
        {
            id: 2, name: 'Standard', price: 9.99, features: [
                'Standard Features',
                'Awesome Features',
                'Extra Features',
                'Unnecessary Features',
                'Will Never Feature',
                'Hudai Features',
                'Ajaira Features',
                'Noakhailla Features'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Premium Features',
                'Awesome Features',
                'Extra Features',
                'Unnecessary Features',
                'Will Never Feature',
                'Hudai Features',
                'Ajaira Features',
                'Noakhailla Features'
            ]
        }
    ]
    return (
        <div>
            <h2 className='text-4xl font-bold bg-indigo-300 p-12 text-white text-center'>Best Deal of the Town</h2>
            <div className='mx-9 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;