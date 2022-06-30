const validator = require('validator');

export default class LoginForm {
    constructor(classForm){
        this.form = document.querySelector(classForm);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const el = e.target;
        const validate = this.validate(el);
        if(!validate) return;
        this.form.submit();
    }

    validate(el){
        let flag = true;
        const inputEmail = el.querySelector('input[name="email"]');
        const inputPassword = el.querySelector('input[name="password"]');

        for(let error of el.querySelectorAll('.error-text')){
            error.remove();
        }

        if(!inputEmail.value) {
            this.errorText(inputEmail, `Campo e-mail obrigatorio!`);
            flag = false;
        };
        if(!inputPassword.value) {
            this.errorText(inputPassword, `Campo senha obrigatorio!`);
            flag = false;
        };
        if(inputEmail.value && !validator.isEmail(inputEmail.value)){
            this.errorText(inputEmail, `digite um e-mail valido!`);
            flag = false;  
        }
        if(inputPassword.value && inputPassword.value.length < 3 || inputPassword.value.length > 50){
            this.errorText(inputPassword, `A senha deve conter entre 3 e 50 caracteres!`);
            flag = false;

        }

        return flag;

    }

    errorText(field, msg){
        const p = document.createElement('p');
        p.classList.add('error-text');
        p.innerText = msg;
        p.style.color = '#f00';
        field.insertAdjacentElement('afterend', p);
    }
}