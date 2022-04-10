import React from 'react'
import { useSelector } from 'react-redux'
import './ProductComponent.css'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    console.log(typeof(products))
    console.log(products)

    const decorationNone = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className='content'>
            {products.map((product) =>
                <div className='semi' key={product.id}>
                    <div className='card'>
                        <div className='image'><img src={product.image} alt={product.name} /></div>
                        <div className='price'>R$ {product.price} | 10% OFF</div>
                        <div className='name'>{product.title}</div>
                        <div className='sep'>
                            <div className='buy'><a href="/" style={decorationNone}>Comprar</a></div>
                            <div className='cart'><a href="/" style={decorationNone}>Carrinho</a></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductComponent