import ImageCarousel from '../ImageCarousel';
import type { ProductDeatilProps } from './types';

import './ProductDeatil.scss';
import { StarRating } from '../StarRating';
import { classnames } from '../../utils/classnames';
import { useState } from 'react';
import type { ProductDetail } from '../../../features/store/types/store';
import { Tag } from '../Tag';

const ProductDetailCard: React.FC<ProductDeatilProps> = ({
  product,
  categories,
  handleClick,
  handleDeleted,
}) => {
  const [stock, setStock] = useState(product?.stock ?? 1);

  const handleAddProduct = (product: ProductDetail) => {
    setStock(0);
    handleClick(product);
  };

  const handleDeletedDetail = (product: ProductDetail) => {
    setStock(1);
    handleDeleted(product);
  };

  const tags = product?.tags.map((tag) => ({
    status: false,
    label: tag,
    index: categories?.findIndex((cat) => cat.category === tag),
  }));

  return (
    <div className="product-datail-container">
      <ImageCarousel images={product ? product.images : []} />
      <div className="detail-complete-container">
        <span className="product-detail-title">{product?.title}</span>
        <span className="product-detail-description">
          {product?.description}
        </span>
        <StarRating rating={product?.rating ?? 0} />
        <span className="product-detail-price">US$ {product?.price}</span>
        <span className="product-detail-shipping">
          {product?.shippingInformation}
        </span>
        <span className="product-detail-dimensions">{`Dimension: ${product?.dimensions.height} x ${product?.dimensions.width} x ${product?.dimensions.depth}`}</span>
        <span className="product-detail-policy">{product?.returnPolicy}</span>
        {tags?.map((tag) => (
          <Tag
            key={tag.label}
            status={tag.status}
            label={tag.label}
            index={tag.index}
          />
        ))}
        <div className="container-btn-add">
          {product && (
            <button
              className={classnames([
                'btn-card-product',
                stock > 0 ? '' : 'Deleted',
              ])}
              type="button"
              onClick={() =>
                stock > 0
                  ? handleAddProduct(product)
                  : handleDeletedDetail(product)
              }
            >
              {stock > 0 ? 'Agregar al carrito' : 'Quitar del carrito'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductDetailCard };
