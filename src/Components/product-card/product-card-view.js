import React from 'react'
import ProductCardWrapper from './product-card-wrapper'
import ProductCard from './product-card'
import ProductCardTitle from './product-card-title'
import ProductCardText from './product-card-text'
import ProductCardFooter from './product-card-footer'

const ProductCardView = ({products}) => {
  return (
    <div>
        <ProductCardWrapper>
            {products.map(product => 
                <ProductCard key={product.id}>
                    <ProductCardTitle>{product.title}</ProductCardTitle>
                     <ProductCardText>{product.description}</ProductCardText>
                     <ProductCardText>قیمت: {product.price}{" "}</ProductCardText>
                     <ProductCardFooter>
                        <button>
                            <span>خرید</span>
                        </button>
                     </ProductCardFooter>
                </ProductCard>)}
        </ProductCardWrapper>
    </div>
  )
}

export default ProductCardView