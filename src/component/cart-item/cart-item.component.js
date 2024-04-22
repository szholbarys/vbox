import { VscChromeClose } from "react-icons/vsc";

const CartItem = ({ item, counter }) => {
  const { price, quantity, name } = item;
  
  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex items-center mt-1">
          <span className="mr-1">{quantity}</span>
          <span className="mr-1">x</span>
          <span className="mr-1">${price}.00</span>
        </div>
        {
          counter && (
            <div className="flex items-center mt-1">
              <button className="mr-1">-</button>
              <span className="mr-1">{quantity}</span>
              <button className="mr-1">+</button>
            </div>
          )
        }
      </div>
      <button className="ml-auto">
        <VscChromeClose className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CartItem;