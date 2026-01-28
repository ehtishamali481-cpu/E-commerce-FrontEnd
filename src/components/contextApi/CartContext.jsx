import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const DeliveryFee = 15;
    const DiscountPercent = 20;

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(storedCart)
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart(prev => {
            const index = prev.findIndex(
                item => item.id === product.id && item.size === product.size && item.color === product.color
            )

            if (index !== -1) {
                const updated = [...prev]
                updated[index].quantity += product.quantity
                return updated
            }

            return [...prev, product]
        })
    }

    const increaseQty = (id, size) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }

    const decreaseQty = (id, size) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id && item.size === size && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        )
    }

    const removeFromCart = (id, size) => {
        setCart(prev =>
            prev.filter(item => !(item.id === id && item.size === size))
        )
    }


    const totalPrice = cart.reduce(
        (total, item) =>
            total + Number(item.price.replace("$", "")) * item.quantity,
        0
    )
    const discountAmount = (totalPrice * DiscountPercent) / 100;
    const afterDiscount = (totalPrice - discountAmount);
    const finalTotal = cart.length > 0 ? afterDiscount + DeliveryFee : 0

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQty,
                decreaseQty,
                removeFromCart,
                totalPrice,
                DeliveryFee,
                discountAmount,
                afterDiscount,
                finalTotal

            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
