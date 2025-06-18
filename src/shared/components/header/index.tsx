// Icons
import { useState } from 'react';
import { CartButton } from '../CartButton';
import { CartSlideOver } from '../CartSlideOver';
import Swal from 'sweetalert2';
// Styles
import './Header.scss';
import { useCartStore } from '../../../store/cartStore';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());
  const totalPrice = useCartStore((state) => state.totalPrice());
  const products = useCartStore((state) => state.products);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleClearCart = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro que quieres limpiar tu carrito?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });
    if (result.isConfirmed) {
      useCartStore.getState().clearCart();
    }
  };

  const handleDeleteElement = (id: number) => {
    useCartStore.getState().removeProduct(id);
  };

  return (
    <div className="header">
      <nav>
        <div>
          <span className="span-title-header">Tienda Online</span>
        </div>
        <div className="container-call-info">
          <CartButton
            count={totalItems}
            totalAmount={totalPrice}
            handleClick={toggleCart}
          />
          <CartSlideOver
            isOpen={isCartOpen}
            onClose={() => toggleCart()}
            items={products}
            totalPrice={totalPrice}
            hanldeClear={handleClearCart}
            handleDelete={handleDeleteElement}
          />
        </div>
      </nav>
    </div>
  );
};

export { Header };
