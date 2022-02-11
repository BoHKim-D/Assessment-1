alert("Welcome dear user! This is your password validation tool!");

let password = prompt('Give me your password.');

if(password.length >= 10 && password == password.toUpperCase()) {
    alert('Looks like your password is valid.');
} else if (!isNaN(password*1)){
    alert('put some english in there!');
} else {
    alert('Your password sucks!')
}
