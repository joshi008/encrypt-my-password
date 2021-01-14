function encrypt() {
    let password = document.getElementById("password")
    let key = document.getElementById("key1")

    let encrypted = CryptoJS.AES.encrypt(password, key);
    document.getElementById("result1").innerHTML = encrypted;
}