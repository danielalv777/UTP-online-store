import { urlProduct } from './constants';

const getAllCategories = async () => {
  try {
    const url = `${urlProduct}/category-list`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const allCategories = await response.json();

    return allCategories;
  } catch (error) {
    console.error('Error get Categories:', error);
    return [];
  }
};

export { getAllCategories };
