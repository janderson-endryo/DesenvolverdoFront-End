type produtor = {
    title:string
    preco:number
}

 const data: produtor[] = [
    { title: "produtor x", preco: 10 },
    { title: "produtor y", preco: 20 },
    { title: "produtor z", preco: 30 }
]

export const produtor = {
    getALL: (): produtor[] => {
        return data
    }
}