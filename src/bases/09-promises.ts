const Promesa = new Promise((resolve, reject) => {
    console.log("Presté plata a Juli");
    console.log("Que hara el malparido");
    
    setTimeout(() => {
        // resolve(2000)
        reject("Que maldito, se perdió el dinero")
    }, 2000)
})
Promesa
    .then((money) => console.log(`Me fue devuelto el dinero: ${money}`))
    .catch((missing) => console.log(`Se perdió con mi dinero: ${missing}`))
    .finally(() => console.log(`Ya que mondá`))

