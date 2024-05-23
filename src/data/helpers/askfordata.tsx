import data from "../data.json"

export const askfordata = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500);
    })
}
