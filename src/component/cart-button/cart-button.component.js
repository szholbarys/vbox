import { connect } from 'react-redux';
import { FaShoppingBasket } from "react-icons/fa";

const CartButton = ({ onClick, itemsCount }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <FaShoppingBasket className="w-6 h-6" />
      <span className="ml-2">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
});

export default connect(mapStateToProps)(CartButton);
