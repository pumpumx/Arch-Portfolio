
export function setToLocalStorage(setName:string , data:object){
    const parsedData = JSON.stringify(data)
    const setItem = localStorage.setItem(`${setName}`,parsedData)

    console.log("Setting item",setItem)
}

export function getItemFromStorage(itemName:string){
    const data = localStorage.getItem(`${itemName}`)
    if(!data) throw new Error(`No such item ${itemName} in localStorage`)
    const jsonData = JSON.parse(data)

    return jsonData;
}