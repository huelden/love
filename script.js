document.getElementById('login').addEventListener('submit',function(event) {
    event.preventDefault();

    const username=

    document.getElementById('username').value;

    const password=

    document.getElementById('password').value;

    //Aqui voce pode definir um usuario e senhe especificos 

    if(username==='Lindos' && password==='olhos' ) {
        document.getElementById('login-form').classList.add('hidden');

        document.getElementById('surpresa').classList.remove('hidden');
    } else {
        alert('Usuário ou senha incorretos!');
    }

});