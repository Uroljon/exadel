function pinCodeGenerator(length) {
    let rand = ""
    for (let i = 0; i < length; i++) {
        rand += rand ? Math.floor(Math.random()*10) : Math.ceil(Math.random()*9)
    }
    return Number(rand)
}
console.log(pinCodeGenerator(5))