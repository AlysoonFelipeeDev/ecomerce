import { ProductCard } from "./components/ProductCard"
import type { Product } from "./types"


function App() {
  const mockProduct: Product =
    {
      id: '1',
      imageUrl: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2022/8/25/7749784291_1018138/ED5B8C0462F156EE5F56026A044CC797.jpg',
      category: "Moda Masculina",
      name: 'Calça Preta',
      price: 59.90,
    }
    
  return <ProductCard 
  id={mockProduct.id} name={mockProduct.name} category={mockProduct.category} price={mockProduct.price} imageUrl={mockProduct.imageUrl}
  />
}

export default App
