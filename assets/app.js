function encrypt() {
    let password = document.getElementById("password").value
    let key = document.getElementById("key1").value
    console.log(password + "  " + key)

    let encrypted = CryptoJS.AES.encrypt(password, key);
    document.getElementById("result1").innerHTML = encrypted;
}

function decrypt() {
    let password = document.getElementById("password2").value
    let key = document.getElementById("key2").value

    let decrypted = CryptoJS.AES.decrypt(password, key);
    let de = decrypted.toString(CryptoJS.enc.Utf8);
    console.log("Decrypted = " + de + "  " + password + "   " + key)
    document.getElementById("result2").innerHTML = de;
}