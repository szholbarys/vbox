import { FaShoppingBasket } from "react-icons/fa";
import Fruits from "../component/product-card/food-products/Fruits";
import Juices from "../component/product-card/food-products/Juices";
import Snacks from "../component/product-card/food-products/Snacks";
import logo from "./../assets/vbox.png"

export const IndexPage = () => {
    return (
        <div>
            <header className="flex justify-evenly p-5 gap-5">
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
                <button type="submit" className="border rounded-2xl p-3 hover:bg-lime-600 hover:text-white transition-colors">
                    <FaShoppingBasket />
                </button>
            </header>

            {/* Render components for fruits, juices, and snacks */}
            <div className="grid gap-5 p-5 justify-items-center border">
                <Fruits />
                <Juices />
                <Snacks />
            </div>
        </div>
    )
}
