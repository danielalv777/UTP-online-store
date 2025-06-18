import { CardProduct } from '../../../shared/components/CardProduct';
import { CheckBoxCustom } from '../../../shared/components/CheckBoxCustom';
import { useStore } from '../hooks/useStore';
import { Modal } from '../../../shared/components/Modal';
import { ProductDetailCard } from '../../../shared/components/ProductDetail';
import { ClipLoader } from 'react-spinners';
import { Tag } from '../../../shared/components/Tag';

import '../styles/Store.scss';

const Store = () => {
  const {
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
    setCurrentPage,
    totalPages,
  } = useStore();
  return (
    <div className="store-container">
      <div className="filter-store">
        <h3>Filtros</h3>
        <span className="span-categorias">Categorias</span>
        {isLoadingCategories ? (
          <div className="categories-laoder">
            <ClipLoader />
          </div>
        ) : (
          <>
            <div className="container-checkbox-store">
              {categories.map((cat) => (
                <CheckBoxCustom
                  key={cat.category}
                  textLabel={cat.category}
                  onChange={(value) =>
                    handleChangeCategory(value, cat.category)
                  }
                  isChecked={cat.status}
                  containerCheckboxClassName="check-box-container"
                />
              ))}
            </div>
            <div className="container-checkbox-store-mobile">
              {categories.map((cat, index) => (
                <Tag
                  key={cat.category}
                  label={cat.category}
                  status={cat.status}
                  index={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="body-store">
        {isLoadingProducts ? (
          <div className="product-loader">
            <ClipLoader />
          </div>
        ) : (
          <>
            {products.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
                handleDetail={() => handleOpenModal(product.id)}
                handleClick={() => handleAddProduct(product)}
                handleDeleted={() => handleDeleteProduct(product)}
              />
            ))}

            <div className="footer-dashboard">
              <div className="pagination">
                <button
                  disabled={currentPage === 1 || isLoadingProducts}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Anterior
                </button>

                <span>
                  Página {currentPage} de {totalPages}
                </span>

                <button
                  disabled={currentPage === totalPages || isLoadingProducts}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </>
        )}

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          {isLoadingDeatil ? (
            <div>
              <ClipLoader />
            </div>
          ) : (
            <ProductDetailCard
              product={selectedProduct}
              categories={categories}
              handleClick={(product) => handleAddProduct(product)}
              handleDeleted={(product) => handleDeleteProduct(product)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export { Store };
