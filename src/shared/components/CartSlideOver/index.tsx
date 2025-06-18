import TrashICon from '../../../assets/trash';
import type { Product } from '../../../features/store/types/store';
import './CartSlideOver.scss';

interface CartSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  totalPrice: number;
  hanldeClear?: () => void;
  handleDelete: (id: number) => void;
}

const CartSlideOver = ({
  isOpen,
  onClose,
  items,
  totalPrice,
  hanldeClear,
  handleDelete,
}: CartSlideOverProps) => {
  return (
    <div className={`cart-slide-over ${isOpen ? 'open' : ''}`}>
      <div className="cart-slide-over__header">
        <div>
          <h2>Your Cart</h2>
          {items.length > 0 && <span onClick={hanldeClear}>Clean Cart</span>}
        </div>
        <button onClick={onClose} className="cart-slide-over__close">
          ✕
        </button>
      </div>

      <div className="cart-slide-over__body">
        {items.map((item) => (
          <div key={item.id} className="cart-slide-over__item">
            <img src={item.thumbnail} alt={item.title} className="img-slider" />
            <div className="container-price-slider">
              <span className="slider-title">{item.title}</span>
              <div className="container-trash-price">
                <button
                  className="btn-trash-slider"
                  onClick={() => handleDelete(item.id)}
                >
                  <TrashICon />
                </button>
                <span className="slider-title">US$ {item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-slide-over__footer">
        <span>Total</span>
        <span>US$ {totalPrice}</span>
      </div>
    </div>
  );
};

export { CartSlideOver };
