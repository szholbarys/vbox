import Fruits from "../component/product-card/food-products/Fruits";
import Juices from "../component/product-card/food-products/Juices";
import Snacks from "../component/product-card/food-products/Snacks";
import logo from "./../assets/vbox.png";
import CartButton from "./../component/cart-button/cart-button.component";
import React from "react";
import Cart from "./../component/cart/cart.component"

interface IndexPageProps {
  setIsOpenCart: (open: boolean) => void;
}

export const IndexPage: React.FC<IndexPageProps> = ({ setIsOpenCart }) => {
    const [isCartOpen, setIsCartOpen] = React.useState(false);
   
    const handleCartButtonClick = () => {
      setIsCartOpen(!isCartOpen); // Toggle the cart state
      setIsOpenCart(!isCartOpen); // Optionally, notify parent component about cart state change
    };
  
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10  flex justify-evenly p-5 gap-5 backdrop-blur">
        <div className="w-10">
          <img src={logo} alt="logo" />
        </div>
        <div className="border rounded-2xl p-3 hover:bg-lime-600 hover:text-white transition-colors">
          <ul className="flex gap-3 ">
            <a href="#"><li className="hover:text-yellow-300">Juices</li></a>|
            <a href="#"><li className="hover:text-yellow-300">Snaks</li></a>|
            <a href="#"><li className="hover:text-yellow-300">Friuts</li></a>
          </ul>
        </div>
        <button type="submit" className="border rounded-2xl p-3 hover:bg-lime-600 hover:text-white transition-colors" onClick={handleCartButtonClick}>
          <CartButton onClick={handleCartButtonClick} />
        </button>
      </header>
      <div className="grid gap-5 mt-20 p-5 justify-items-center">
        <Fruits />
        <Juices />
        <Snacks />
      </div>
      {isCartOpen && <Cart setIsOpenCart={setIsCartOpen} open={isCartOpen}/>}
    </div>
  );
};
