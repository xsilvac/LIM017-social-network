/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
import { onNavigate } from '../main.js';
import { signIn, signInWithGoogle, signInWithFacebook } from '../controllers/auth.js';

export const login = () => {
  const sectionLogin = document.createElement('section');
  sectionLogin.setAttribute('class', 'sectionsForms');
  sectionLogin.innerHTML = `<section id="formLogin">
  
  <h1 >Ingresa</h1>
    <p>
   <input type = "email" id="mail" class='classInput' placeholder ="Email" required/>
  
   </p>
    <p>
   <input type = "password" id="password" pattern=".{6,}" class='classInput' placeholder ="Contraseña" required/><i id="iconEye3" class="fa-solid fa-eye-slash"></i>
   <p id="wrongEmail"  class="error"></p>
   </p>
   <button id="btnLogin" class ="button">Ingresar</button>
   <button type="button" id="signInGoogle" class ="button" ><img src="../img/google.png" alt="icono de google" class="logosSignIn"> Continua con Google</button>
   <button type="button" id="signInFacebook" class ="button"><img src="../img/facebook.png" alt="icono de facebook" class="logosSignIn">Continua con Facebook</button>
   <button type="button" id="btnRedirectsRegister" class="redirect">¿No tienes cuenta?, Registrate </button>
   </section>
  `;
  sectionLogin.querySelector('#btnLogin').addEventListener('click', () => {
    const email = sectionLogin.querySelector('#mail').value;
    const password = sectionLogin.querySelector('#password').value;
    const wrongEmail = sectionLogin.querySelector('#wrongEmail');

    signIn(email, password, wrongEmail);
  });
  sectionLogin.querySelector('#signInGoogle').addEventListener('click', () => signInWithGoogle());
  sectionLogin.querySelector('#signInFacebook').addEventListener('click', () => signInWithFacebook());
  sectionLogin.querySelector('#btnRedirectsRegister').addEventListener('click', () => onNavigate('/register'));
  sectionLogin.querySelector('#iconEye3').addEventListener('click', () => {
    const password = sectionLogin.querySelector('#password');
    const iconEye3 = sectionLogin.querySelector('#iconEye3');
    if (password.type === 'password') {
      password.type = 'text';
      iconEye3.classList.remove('fa-eye-slash');
      iconEye3.classList.add('fa-eye');
    } else {
      password.type = 'password';
      iconEye3.classList.add('fa-eye-slash');
      iconEye3.classList.remove('fa-eye');
    }
  });
  return sectionLogin;
};
