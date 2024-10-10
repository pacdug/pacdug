let username = prompt('Enter your username ','');

if (username == 'admin') {
    let password = prompt('Enter your password','');
    if(password == 'themaster') {
        alert('welcome');
    }else if(password == null) {
        alert('canceled');
    }else {
        alert('wrong password');
    }
} else if (username == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}