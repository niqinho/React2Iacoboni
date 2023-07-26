const list = [
    {id:'01',categoria:'tortas', nombre: 'Torta Chocolate1', precio: 1500, stock: 10, descripcion: 'Torta de chocolate xd', img: '../img/torta1.jpg'},
    {id:'02',categoria:'postres', nombre: 'Torta Chocolate2', precio: 1500, stock: 10, descripcion: 'Torta de chocolate xd', img: '../img/torta2.jpg'},
    {id:'03',categoria:'finas', nombre: 'Torta Chocolate3', precio: 1500, stock: 10, descripcion: 'Torta de chocolate xd', img: '../img/torta3.jpg'},
    {id:'04',categoria:'tortas', nombre: 'Torta Chocolate4', precio: 1500, stock: 10, descripcion: 'Torta de chocolate xd', img: '../img/torta4.jpg'},
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false 
        setTimeout (() => {
    if (error){
        reject('salio error')
    } else {
        resolve(list)
    }
        },2000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
    
}