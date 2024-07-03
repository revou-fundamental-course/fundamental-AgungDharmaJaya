function replaceName() {
    let nama = prompt("Siapakah Nama Anda", "")
    document.getElementById("nama").innerHTML = nama;
}
 replaceName();
function validateform() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name  == "" || birthdate =="" || gender =="" || messages == ""){
        alert("Tidak ada yang boleh kosong");
        return false;
    }
    setSenderUI(name,birthdate,gender,messages);
     return false;
}
function setSenderUI(name, birthdate, gender, messages){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}
