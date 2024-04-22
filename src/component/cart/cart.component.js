import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { VscChromeClose } from "react-icons/vsc";

const Cart = ({ open, setIsOpenCart, items, total }) => {
  const cartClasses = `cart ${open ? 'is-open' : ''}`;

  return (
    <div className={cartClasses}>
      <div className='bg-white rounded-lg shadow-lg p-6 fixed top-0 right-0 bottom-0 z-20 flex flex-col' style={{ width: '360px', transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s' }}>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Cart</h2>
          <VscChromeClose className="w-6 h-6 cursor-pointer" onClick={() => setIsOpenCart(false)} />
        </div>
        <div className='grid gap-4 overflow-y-auto'>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className='flex justify-between mt-4'>
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-semibold">${total}.00</span>
        </div>
        <div className='mt-6'>
          <button type="submit" className="border rounded-2xl p-3 hover:bg-lime-600 hover:text-white transition-colors"
            onClick={() => {
              setIsOpenCart(false);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      {open && <div className='fixed inset-0 bg-black opacity-50 z-18' onClick={() => setIsOpenCart(false)}></div>}
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems }}) => ({
  items: cartItems,
  total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
});

export default connect(mapStateToProps)(Cart);
