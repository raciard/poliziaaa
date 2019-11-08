if(localStorage.getItem('jwt') != null){
    refresh()
    setInterval(refresh,
    
    5000)
}
else{
    document.getElementById('id01').style.display = "block"
}


function refresh(){
    
        let body = {jwt: localStorage.getItem('jwt')}

        fetch('/fetch', {
        method: 'post',
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response) => {
        response.json()
        .then((res) => {
            if(res.ok == true){
                criminals = res.criminals

                document.getElementById('mytable').innerHTML = " "
                criminals.forEach((criminal) => {
                    $("#mytable").append("<tr><td>" + criminal.name + 
                                     "</td><td>" + criminal.surname + "</td>" +
                                     "</td><td>" + criminal.birth + "</td>" +
                                     "</td><td>" + criminal.date + "</td>" +
                                     "</td><td>" + criminal.crimes + "</td>" +
                                     "</td><td>" + criminal.sanction + "</td>" +
                                     '<td class="p-0"> <button class="btn btn-danger"  style="width: 100% "onclick="deleteCrim(\'' + criminal._id + '\')"> Cancella </button> </td></tr>' );
                });

                
            }
        })

    }).catch((err) => {
        console.error(err)  
    })}


document.getElementById('id01').addEventListener('submit', login)

function login(e){
    e.preventDefault
    let userField = document.getElementById('username')
    let pswField = document.getElementById('password')
    
    let body = {
        user: userField.value,
        password: pswField.value
    }

    fetch('/login', {
        method: 'post',
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response) => {
        response.json()
        .then((res) => {
            if(res.authenticated == true){
                
                localStorage.setItem('jwt', res.jwt)

                document.getElementById('id01').style.display = 'none'
            }
        })

    })
    .catch((err) => {
        console.error(err)  
    })
    
    return false
}


document.getElementById('id02').addEventListener('submit', add)

function openAdd(){
    document.getElementById('id02').style.display = "block"
}


function add(e){
    e.preventDefault
    let nameField = document.getElementById('name')
    let surnameField = document.getElementById('surname')
    let dateField = document.getElementById('date')
    let birthField = document.getElementById('birth')
    let sanctionField = document.getElementById('sanction')
    let crimesField   = document.getElementById('crimes')

    let body = {
        jwt: localStorage.getItem('jwt'),
        name: nameField.value,
        surname: surnameField.value,
        date: dateField.value,
        birth: birthField.value,
        sanction: sanctionField.value,
        crimes: crimesField.value
    }

    fetch('/add', {
        method: 'post',
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response) => {
        response.json()
        .then((res) => {
            if(res.done == true){
                console.log('ok')
                refresh()
            }
            else {
                console.log('not ok')
            }
        })

    })
    .catch((err) => {
        console.error(err)  
    })
    
    document.getElementById('id02').style.display = ""
    return false
}


function deleteCrim(id){
    let body = {
        jwt: localStorage.getItem('jwt')

    }
    fetch('/delete/' + id, {
        method: 'post',
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response) => {
        response.json()
        .then((res) => {
            if(res.done == true){
                console.log('ok')
                refresh()
            }
            else {
                console.log('not ok')
            }
            refresh()
        })
    })
        
}
