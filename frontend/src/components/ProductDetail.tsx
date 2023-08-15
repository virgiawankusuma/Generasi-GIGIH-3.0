import { useEffect, useState } from 'react';

import getProductByID from '../helpers/getProductById';

import NavDetail from './NavDetail';

import { IProductProps } from '../types/productProps';
import ProductView from './ProductView';

export default function ProductDetail({ productId }: { productId: string | undefined }) {
  const [product, setProduct] = useState<IProductProps>();

  useEffect(() => {
    async function fetchData() {
      const response = await getProductByID(productId);
      setProduct(response);
    }

    fetchData();
  }, [productId]);

  return (
    <>
      <NavDetail 
        title={product?.Title}
        store={product?.Store}
      />
      <ProductView
        product={product}
      />
    </>
  );
}