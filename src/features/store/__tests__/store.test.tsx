/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from '@testing-library/react';
import { Store } from '../pages/store';
import { useStore } from '../hooks/useStore';
import '@testing-library/jest-dom';

// Mock de componentes secundarios si es necesario
jest.mock('../../../shared/components/CardProduct', () => ({
  CardProduct: ({ product }: any) => (
    <div data-testid="card-product">{product.name}</div>
  ),
}));

jest.mock('../../../shared/components/CheckBoxCustom', () => ({
  CheckBoxCustom: ({ textLabel, onChange, isChecked }: any) => (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {textLabel}
    </label>
  ),
}));

jest.mock('../../../shared/components/Modal', () => ({
  Modal: ({ isOpen, children }: any) =>
    isOpen ? <div data-testid="modal">{children}</div> : null,
}));

jest.mock('../../../shared/components/ProductDetail', () => ({
  ProductDetailCard: ({ product }: any) => (
    <div data-testid="product-detail">{product.name}</div>
  ),
}));

jest.mock('../../../shared/components/Tag', () => ({
  Tag: ({ label }: any) => <span data-testid="tag">{label}</span>,
}));

jest.mock('react-spinners', () => ({
  ClipLoader: () => <div data-testid="loader" />,
}));

// Mock del hook
jest.mock('../hooks/useStore');

const mockUseStore = useStore as jest.Mock;

describe('<Store />', () => {
  beforeEach(() => {
    mockUseStore.mockReturnValue({
      products: [{ id: 1, name: 'Producto 1' }],
      categories: [
        { category: 'Cat A', status: true },
        { category: 'Cat B', status: false },
      ],
      handleChangeCategory: jest.fn(),
      isModalOpen: false,
      setModalOpen: jest.fn(),
      selectedProduct: { id: 1, name: 'Producto 1' },
      handleAddProduct: jest.fn(),
      handleDeleteProduct: jest.fn(),
      handleOpenModal: jest.fn(),
      isLoadingDeatil: false,
      isLoadingCategories: false,
      isLoadingProducts: false,
      currentPage: 1,
      setCurrentPage: jest.fn(),
      totalPages: 3,
    });
  });

  it('renders categories and products', () => {
    render(<Store />);

    const tags = screen.getAllByTestId('tag');
    expect(tags.map((el) => el.textContent)).toEqual(['Cat A', 'Cat B']);
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    expect(screen.getByTestId('card-product')).toHaveTextContent('Producto 1');
  });

  it('renders loader when categories are loading', () => {
    mockUseStore.mockReturnValueOnce({
      ...mockUseStore(),
      isLoadingCategories: true,
    });
    render(<Store />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('opens modal when isModalOpen is true', () => {
    mockUseStore.mockReturnValueOnce({
      ...mockUseStore(),
      isModalOpen: true,
    });
    render(<Store />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('product-detail')).toHaveTextContent(
      'Producto 1'
    );
  });

  it('calls setCurrentPage on pagination buttons', () => {
    const setCurrentPage = jest.fn();
    mockUseStore.mockReturnValueOnce({
      ...mockUseStore(),
      currentPage: 1,
      totalPages: 2,
      isLoadingProducts: false,
      setCurrentPage,
    });
    render(<Store />);
    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);
    expect(setCurrentPage).toHaveBeenCalled();
  });
});
