import { collection, writeBatch, getDocs, addDoc, Timestamp, query, where, documentId } from "firebase/firestore"
import { databaseStore } from "./config.js"


export const createOrder = async (formBuyer, cartBuy, totalItemsPrice, setOrderId, clearCart) => {
    const order = {
        buyerInfo: formBuyer,
        items: cartBuy,
        total: totalItemsPrice(),
        orderTime: Timestamp.fromDate(new Date())
    } 

    const batch = writeBatch(databaseStore)
    const ordersRef = collection(databaseStore, "orders")
    const productosRef = collection(databaseStore, "stockItems")
    
    const q = query(productosRef, where(documentId(), 'in', cartBuy.map((el) => el.id)))
    const productos = await getDocs(q)
    const outOfStock = []
    
    productos.docs.forEach((doc) => {
        const item = cartBuy.find((el) => el.id === doc.id)

        if (doc.data().stock >= item.cantidad) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.cantidad
            })
        } else {
            outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0) {
        addDoc(ordersRef, order)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                clearCart()
            })
    } else {
        alert("Hay items sin stock")
    }
}