import { urlProduct } from './constants';

const getProductById = async (productId: number) => {
  try {
    const url = `${urlProduct}/${productId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const product = await response.json();

    return product;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Error: ${error}`);
  }
};

export { getProductById };
