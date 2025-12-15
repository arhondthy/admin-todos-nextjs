import { Product, products } from '@/app/products/data/products';
import WidgetItem from '@/components/WidgetItem';
import { ItemCard } from '@/shoping-cart/components/itemCard';
import { cookies } from 'next/headers';
import React from 'react'


interface ProductInCart {
    product: Product;
    quantity: number
}
const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
    const productsInCart: ProductInCart[] = []
    for (const id of Object.keys(cart)) {
        const product = products.find(prod => prod.id === id);
        if (product) {
            productsInCart.push({ product: product, quantity: cart[id] })
        }
    }
    return productsInCart;
}
const CartPage = () => {
    const cookieStore = cookies();
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}') as { [id: string]: number }
    const productsIncart = getProductsInCart(cart);
    const totalPay = productsIncart.reduce((prev, current) => current.product.price * current.quantity + prev, 0)
    return (
        <div>
            <h1 className='text-5xl'>Productos en carrito</h1>
            <hr className='mb-2'></hr>
            <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <div className='flex flex-col gap-2 w-full sm:w-8/12'>
                    {
                        productsIncart.map(({ product, quantity }) => (
                            <ItemCard key={product.id} product={product} quantity={quantity} />
                        ))
                    }
                </div>
                <div className='flex flex-col w-full sm:w-4/12'>
                    <WidgetItem title={'Total a pagar'} >
                        <div className='mt-2 flex justify-center gap-4'>
                            <h3 className='text-3xl font-bold text-gray-700'>${(totalPay * 1.15).toFixed(2)}</h3>

                        </div>
                        <span className='font-bold text-center text-gray-500'>Impuesto de 15%: ${(totalPay * 0.15).toFixed(2)}</span>
                    </WidgetItem>
                </div>
            </div>
        </div>
    )
}

export default CartPage
