import React from 'react';
import CartIcon from '../../../assets/cart';
import { classnames } from '../../utils/classnames';

import './CartButton.scss';

interface CartProps {
  count: number;
  totalAmount: number;
  className?: string;
  handleClick?: () => void;
}

const CartButton: React.FC<CartProps> = ({
  count,
  totalAmount,
  className,
  handleClick,
}) => {
  return (
    <button
      className={classnames([className, 'cart-container'])}
      onClick={handleClick}
    >
      {totalAmount && totalAmount > 0 ? (
        <p>US$ {totalAmount.toFixed(2)}</p>
      ) : null}

      <CartIcon />

      {count > 0 && <span>{count}</span>}
    </button>
  );
};

export { CartButton };
