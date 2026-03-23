const submitButton = document.getElementById('submitButton')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')

let email = 'aaaaaaa'
let password = 'aaa'

function validEmailAndPassword(email, password) {
    if (email.includes('@') && password.length >= 8) return true
    return false
}

submitButton.addEventListener('click',  function() {
    email = emailInput.value
    password = passwordInput.value
    // console.log(email)
    // console.log(password)

    if (email === "" && password === "") {
        console.log("Empty fields")
        return
    }

    if (validEmailAndPassword(email, password)) console.log("Good")
    else console.log("Bad")
})