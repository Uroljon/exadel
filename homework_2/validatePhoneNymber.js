function validatePhoneNymber(num) {
    num = num.split(" ").join("")
    return Boolean(Number(num))
}
console.log(validatePhoneNymber("067 734 4343"))
