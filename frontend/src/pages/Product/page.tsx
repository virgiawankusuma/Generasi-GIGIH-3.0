import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail';

export default function Products() {
  const params = useParams();
  const { ProductId } = params;

  return (
    <ProductDetail productId={ProductId}/>
  )
}