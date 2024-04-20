import React from 'react';
import { TCard } from "../../model/Card";
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { Dispatch } from 'redux';

interface ProductCardProps {
    item: TCard;
    addItem: (item: TCard) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, addItem }) => {
    const { name, image, price } = item;

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <div className="flex flex-col items-center">
                <div className="w-48 h-48 bg-cover bg-center mb-4 relative">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <button className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-lg" onClick={() => addItem(item)}>+ Add to cart</button>
            </div>
            <div className="text-center mt-4">
                <p className="font-semibold">{name}</p>
                <p className="text-gray-600">${price}.00</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: TCard) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ProductCard);
