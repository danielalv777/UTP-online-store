import { useEffect, useState } from 'react';
import { getAllProducts } from '../services/getAllProducts';
import { getAllCategories } from '../services/getCategories';
import type {
  Category,
  Product,
  ProductDetail,
  ProductStock,
} from '../types/store';
import { getProductById } from '../services/getProductById';
import { useCartStore } from '../../../store/cartStore';
import { toast } from 'react-toastify';

export function useStore() {
  const productsCart = useCartStore((state) => state.products);

  const [products, setProducts] = useState<ProductStock[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail>();
  const [selectCategory, setSelectCategory] = useState<string | null>(null);

  const [isLoadingDeatil, setLoadingDeatils] = useState(false);
  const [isLoadingCategories, setLoadingCategories] = useState(true);
  const [isLoadingProducts, setLoadingProducts] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const limit = 10;
  // const offset = (currentPage - 1) * limit;
  const totalPages = Math.ceil(totalCount / limit);

  const handleChangeCategory = async (status: boolean, value: string) => {
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        status: cat.category === value ? status : false,
      }))
    );
    setSelectCategory(status ? value : null);
  };

  const handleAddProduct = (product: ProductStock) => {
    useCartStore.getState().addProduct(product);
    const newProducts = products.map((prod: ProductStock) =>
      prod.id === product.id ? { ...prod, stock: 0 } : prod
    );
    setProducts(newProducts);
    toast.success(`Producto "${product.title}" agregado`);
  };

  const handleDeleteProduct = (product: ProductStock) => {
    useCartStore.getState().removeProduct(product.id);
    const newProducts = products.map((prod: ProductStock) =>
      prod.id === product.id ? { ...prod, stock: 1 } : prod
    );
    setProducts(newProducts);
    toast.warning(`Producto "${product.title}" eliminado`);
  };

  const handleOpenModal = async (productId: number) => {
    setLoadingDeatils(true);
    const product: ProductDetail = await getProductById(productId);
    const cartIds = new Set(productsCart.map((prod) => prod.id));
    const newProduct = { ...product, stock: cartIds.has(product.id) ? 0 : 1 };
    setLoadingDeatils(false);
    setSelectedProduct(newProduct);
    setModalOpen(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getAllProducts(currentPage, limit, selectCategory);
      const cartIds = new Set(productsCart.map((prod) => prod.id));

      const newProducts = result.products.map((product: Product) => ({
        ...product,
        stock: cartIds.has(product.id) ? 0 : 1,
      }));
      setTotalCount(result.total);
      setLoadingProducts(false);
      setProducts(newProducts);
    };

    fetchProducts();
  }, [productsCart, currentPage, selectCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesList = await getAllCategories();
      const newCategory = categoriesList.map((category: string) => {
        return {
          status: false,
          category,
        };
      });
      setLoadingCategories(false);
      setCategories(newCategory);
    };

    fetchCategories();
  }, []);

  return {
    products,
    categories,
    handleChangeCategory,
    isModalOpen,
    setModalOpen,
    selectedProduct,
    handleAddProduct,
    handleDeleteProduct,
    handleOpenModal,
    isLoadingDeatil,
    isLoadingCategories,
    isLoadingProducts,
    currentPage,
    totalPages,
    setCurrentPage,
  };
}
