import '../App.css';
function HeadingOne() {
    return (<h3>This is Heading One</h3>);
  }
function ProductList({ product,addToCart }) {
    
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <img src={productItem.url} height="170px"  />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList