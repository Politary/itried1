'use strict'

//let value = prompt('ecma?','10xxx0')


let login = prompt('name?','admin')
    if (login == null) {
    alert('Canceled')
}   if (login == 'admin') {
    let password = prompt('password?','type password here')
        if (password == null) {alert('cancel')}
        else if (password == 'master') {alert('wb')}
        else {alert('wrong password')}
}   else {alert('idk who you areeeee')}

