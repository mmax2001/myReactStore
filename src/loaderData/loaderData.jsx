import dataStock from '../dataStore/prod.json'
// import dataStock from './dataStore/prod.json'

export const loaderData = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(dataStock)
        }, 2000)
    })
}
