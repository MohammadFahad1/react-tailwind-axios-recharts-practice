import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Axios = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        /* fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json())
            .then(data => setPhones(data)) */
        axios.get('fakeData/fakeData.json')
            .then(data => {
                const phones = data.data.data;
                const phoneData = phones.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price,
                        y: 10000
                    }
                    return singlePhone
                })
                setPhones(phoneData)
            })
    }, [])

    return (
        <>
            <h1 className='text-3xl font-bold mb-3 underline mt-5 ml-5'>Barchart Data Loaded by Axios</h1>
            <BarChart width={450} height={200} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name' />
                <YAxis dataKey="y" />
                <Tooltip />
            </BarChart>
        </>
    );
};

export default Axios;