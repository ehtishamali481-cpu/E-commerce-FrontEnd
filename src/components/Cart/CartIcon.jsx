import { useCart } from "../contextApi/CartContext"
import { LuShoppingCart } from "react-icons/lu";

const CartIcon = () => {
    const { cart } = useCart()

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    )

    return (
        <div className="cart-icon-wrapper">
            <LuShoppingCart size={22} />

            {totalItems > 0 && (
                <span className="cart-badge">
                    {totalItems > 99 ? "99+" : totalItems}
                </span>
            )}
        </div>
    )
}

export default CartIcon
