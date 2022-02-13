import { productStock } from "../dataStore/prod.js"
// import dataStock from '../dataStore/prod.json'


export const loaderData = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productStock)
            // resolve(dataStock)
        }, 2000)
    })
}
