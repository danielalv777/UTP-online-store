import type { ProductStock } from '../../../features/store/types/store';

export interface CardProductProps {
  product: ProductStock;
  handleClick?: () => void;
  handleDetail?: () => void;
  handleDeleted?: () => void;
}
