import { connect, useSelector } from "react-redux"


const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log('cart', cart)
    return (
        <>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </>
    )
}

// const mapStateToProps = (state) => ({
//     cart: state.cart
// })

// export default connect(mapStateToProps)(Cart)
export default Cart