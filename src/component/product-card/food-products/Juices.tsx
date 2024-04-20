import React from 'react';
import ProductCard from '../ProductCard';
import colaImage from './../../../assets/cola.png';
import pikoImage from './../../../assets/piko.png';
import samalWaterImage from './../../../assets/samalwater.webp';

const Juices = () => {
    const juicesData = [
        { name: "Cola", image: colaImage, price: "2.99" },
        { name: "Piko", image: pikoImage, price: "1.99" },
        { name: "Samal Water", image: samalWaterImage, price: "0.99" }
    ];

    return (
        <div>
            <h3 className='flex justify-center'>Juices</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5 justify-items-center border rounded-xl bg-gray-100">
                {juicesData.map((item, index) => (
                    <ProductCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Juices;
