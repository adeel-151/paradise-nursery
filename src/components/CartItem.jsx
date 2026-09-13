import { useDispatch } from "react-redux";
import { 
  increaseQuantity, 
  decreaseQuantity, 
  removeFromCart 
} from "../features/cart/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const subtotal = item.price * item.quantity;

  return (
    <article className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />
      
      <div className="cart-item-info">
        <span className="product-category">
          {item.category}
        </span>
        <h3>{item.name}</h3>
        <p>
          Unit Price: ${item.price.toFixed(2)}
        </p>
        
        <div className="quantity-controls">
          <button 
            onClick={() => 
              dispatch(decreaseQuantity(item.id))
            }
            aria-label={`Decrease ${item.name}`}
          >
            -
          </button>
          
          <span>{item.quantity}</span>
          
          <button 
            onClick={() => 
              dispatch(increaseQuantity(item.id))
            }
            aria-label={`Increase ${item.name}`}
          >
            +
          </button>
        </div>
      </div>
      
      <div className="cart-item-right">
        <strong>
          ${subtotal.toFixed(2)}
        </strong>
        
        <button 
          className="delete-btn"
          onClick={() => 
            dispatch(removeFromCart(item.id))
          }
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default CartItem;
