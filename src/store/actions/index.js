/*
We need to add this layer of exporting because in our
action creator, we have separate export statements, this
allows us to centralize them and export. The exports are functions.
*/

export {
    addIngredient,
    removeIngredient,
    initIngredients
} from './burgerBuilder';

export {
    purchaseBurger,
    purchaseInit,
    fetchOrders
} from './order';