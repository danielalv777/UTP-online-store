import React from 'react';
import EyeOpen from '../../../assets/eye-open';
import { StarRating } from '../StarRating';
import './CardProduct.scss';
import type { CardProductProps } from './types';
import { classnames } from '../../utils/classnames';

const CardProduct: React.FC<CardProductProps> = ({
  product,
  handleClick,
  handleDetail,
  handleDeleted,
}) => {
  return (
    <div className="card-product-container">
      <img
        src={product.thumbnail}
        alt=""
        className="img-card-product"
        onClick={handleDetail}
      />
      <div className="card-product-information">
        <span className="card-product-title" onClick={handleDetail}>
          {product.title}
        </span>
        <span className="card-product-description" onClick={handleDetail}>
          {product.description}
        </span>
        <StarRating rating={product.rating} />
        <span className="card-product-price">US$ {product.price}</span>
        <span className="card-product-shipping">
          {product.shippingInformation}
        </span>
        <div className="container-card-btn">
          <button
            className={classnames([
              'btn-card-product',
              product.stock > 0 ? '' : 'Deleted',
            ])}
            type="button"
            onClick={product.stock > 0 ? handleClick : handleDeleted}
          >
            <span className="span-btn-card-product-window">
              {product.stock > 0
                ? 'Agregar al carrito'
                : 'Eliminar del carrito'}
            </span>
            <span className="span-btn-card-product">
              {product.stock > 0 ? 'Agregar' : 'Eliminar'}
            </span>
          </button>
          <div className="container-previous-view">
            <EyeOpen />
            <span className="span-view-information" onClick={handleDetail}>
              Ver información detallada
            </span>
            <span
              className="span-view-information-mobile"
              onClick={handleDetail}
            >
              Detalles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardProduct };
