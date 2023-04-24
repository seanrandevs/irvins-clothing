import Header from "./Header";
import MainDisplay from "./MainDisplay";
import Products from "./Products";
import Footer from "./Footer";


const Home = ({ products, totalQuantity, onAdd }) => {

  return (
    <>
    <Header
    totalQuantity={totalQuantity}
    />
    <MainDisplay />
    <div className="product-content">
    {products.map((product) => (
    <Products 
    key={product.id}
    product={product}
    onAdd={onAdd}
    />
    ))}
    </div>
    <Footer />
    </>
  )
}

export default Home