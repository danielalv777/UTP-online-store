import type {
  Category,
  ProductDetail,
} from '../../../features/store/types/store';

export interface ProductDeatilProps {
  product?: ProductDetail;
  categories: Category[];
  handleClick: (product: ProductDetail) => void;
  handleDeleted: (product: ProductDetail) => void;
}
