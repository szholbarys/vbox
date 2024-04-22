import ProductCard from '../ProductCard';
import snickersImage from './../../../assets/snichers.png'; // Corrected the file name
import crispsImage from './../../../assets/crisps.png';

const Snacks = () => {
    const snacksData = [
        { id: 1, name: "Snickers", image: snickersImage, price: "1.49" }, // Added unique id
        { id: 2, name: "Crisps", image: crispsImage, price: "0.99" }
    ];

    return (
        <div>
            <h3 className='flex justify-center'>Snacks</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5 justify-items-center border rounded-xl bg-gray-100">
                {snacksData.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Snacks;
