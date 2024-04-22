import ProductCard from '../ProductCard';
import bananaImage from './../../../assets/banana.png';
import appleImage from './../../../assets/apple.png';

const Fruits = () => {
    const fruitsData = [
        { id: 1, name: "Banana", image: bananaImage, price: "0.99" },
        { id: 2, name: "Apple", image: appleImage, price: "1.49" }
    ];

    return (
        <div>
            <h3 className='flex justify-center'>Fruits</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5 justify-items-center border rounded-xl bg-gray-100">
                {fruitsData.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Fruits;

