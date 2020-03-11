const DB_USER=[
    {
        username:"alyya",
        password:"password"
    } 
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitform");


buttonSubmit.addEventListener('click', ()=> {
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueInputUsername = inputUsername.value;
    
    let flag = 0;
    DB_USER.map((data) => {
        if(data.username === valueInputUsername && data.password === valueInputPassword){
            flag = 1;
        }
    })

    const warningMsg = document.querySelector(".warning");
    //console.log(warningMsg.className);

    if(flag === 0){
        warningMsg.className = "text-danger";
    }else{
        alert("Selamat anda masuk ke home");
    }
    // if(flag === 1){
    //     console.log("Success");
    // }else{
    //     console.log("Password & Username Salah!");
    // }
})

