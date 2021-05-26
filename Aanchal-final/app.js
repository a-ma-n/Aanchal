function run(){
  window.open('https://youtu.be/mYt7NwunB7o')
}
const autha = firebase.auth()
const db =firebase.firestore()
const content=document.querySelector("#content");
 function abc(){
          window.location.href="main.html"
      }
autha.onAuthStateChanged(user=>{


  if(user){
     
        content.innerHTML=`
        <button id ="abc" onclick="abc()">USE THE APP</button>
        <button id="logout">Logout</button>`;


        //logout
        const logout = document.querySelector("#logout");

   logout.addEventListener('click', (event) => {
   event.preventDefault();
   autha.signOut().then(cred=>{
   //console.log(cred);
   });
   });
    }else{
        content.innerHTML=`
    
    <form id="signup-form">
    <input  type="email" id="signup-email" placeholder="Email"/>
    <input  type="password" id="signup-password" placeholder="Password"/>
    <button>Sign Up</button>
</form>

   <hr>
   <form id="login-form">
   <input  type="email" id="login-email" placeholder="Email" required/>
   <input  type="password" id="login-password" placeholder="Password" required/>
   <button>Log In </button>
</form>
  
   
  
   <button id="google">Sign in with google</button>
   <button id="fb">Sign in with facebook</button>

    `;
   
   
    
  
  

//signup using email
const signup =document.querySelector("#signup-form");

signup.addEventListener('submit',(event)=>{
event.preventDefault();

const email =signup['signup-email'].value;
const password =signup['signup-password'].value;

autha.createUserWithEmailAndPassword(email,password).then(cred=>{
  //console.log(cred);
  signup.reset();
  
}).catch(event=>{
 alert(event.message);
});
});


//login with email
const login=document.querySelector("#login-form");

login.addEventListener('submit',(event)=>{
event.preventDefault();

const email =login['login-email'].value;
const password =login['login-password'].value;

autha.signInWithEmailAndPassword(email,password).then(cred=>{
  //console.log(cred);
  login.reset();
}).catch(event=>{
  alert(event.message);
});
}); 
 //Sign in with Facebook
const facebook =document.querySelector("#fb");

facebook.addEventListener('click' , event => {
    event.preventDefault();


    let provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider).then( cred =>{
        alert('logged in with Facebook');
    }).catch(e=>{
        alert(e.message);
    });
    });

//sign in with google
const google= document.querySelector('#google');

    google.addEventListener('click', (e) => {
      let provider = new firebase.auth.GoogleAuthProvider();

      auth.signInWithPopup(provider).then(cred =>{     
             console.log(cred.user);
      });
    });

    }
});
