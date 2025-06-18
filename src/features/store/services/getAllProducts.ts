import { urlProduct, selectProductColums } from './constants';

const getAllProducts = async (
  page = 1,
  limit = 10,
  category: string | null
) => {
  try {
    const skip = (page - 1) * limit;

    const url = `${urlProduct}${
      category ? '/category/' + category : ''
    }?limit=${limit}&skip=${skip}&select=${selectProductColums}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const allProducts = await response.json();

    return {
      products: allProducts.products,
      total: allProducts.total,
      skip: allProducts.skip,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      products: [],
      total: 0,
      skip: 0,
    };
  }
};

export { getAllProducts };
