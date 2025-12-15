import { ProductCard } from '@/app/products/components/ProductCard'
import { products } from '@/app/products/data/products'
import React from 'react'

export default function ProductsPage() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>

            {
                products.map((pro) => (
                    <ProductCard key={pro.id} {...pro} />
                ))
            }


        </div>
    )
}
