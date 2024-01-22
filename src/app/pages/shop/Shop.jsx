import React from 'react'
import { seafoods } from '../../app/components/Products'
import { Product } from './Product'

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Dummy Ecommerce Store</h1>
      </div>
      <div className="products">{" "}{seafoods.map((product) => (<Product key={product.id} data={product} />))}</div>
    </div>
  )
}
