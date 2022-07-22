import BasketItem from "./BasketItem";

const BasketList = (props) => {
    const {order = [], 
            handleBasketShow = Function.prototype,
            removeFromBasket = Function.prototype,
            incQuantity = Function.prototype,
            decQuantity = Function.prototype,
        } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    },0);

    return (
            <ul className="collection basket-list">
                <li className="collection-item active">Basket</li>
                    {
                        order.length ? 
                            order.map((item)=> (
                                <BasketItem 
                                    key={item.id} 
                                    removeFromBasket = {removeFromBasket}
                                    incQuantity = {incQuantity}
                                    decQuantity = {decQuantity}
                                    {...item} 
                                />
                        )) : (
                            <li className="collection-item">Basket Empty</li>
                            )
                    }
                <li className="collection-item active" >Total Price:{'  '}{totalPrice} $
                    <button className="btn btn-small right teal lighten-3 lighten-4 text-darken-4" >Issue</button>
                </li>
                <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
            </ul>
    )
}
export default BasketList;