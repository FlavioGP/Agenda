const validator = require('validator');

export default class ContatoForm {
    constructor(){
        this.form = document.querySelector('.contato-form');
    }

    init(){
        this.events();
    }

    events(){
        this.form.addEventListener('submit', e => this.handleSubmit(e));
    }

    handleSubmit(e){
        e.preventDefault();
        const el = e.target;
        const validFields = this.validFields(el);
        if(!validFields) return;
        this.form.submit();
    }

    validFields(el){
        const nome = el.querySelector('input[name="nome"]');
        const email = el.querySelector('input[name="email"]');
        const telefone = el.querySelector('input[name="telefone"]');
        let flag = true;

        for(let errorText of el.querySelectorAll('.error-text')){
            errorText.remove();
        }

        if(!nome.value){
            this.errorText(nome, `Nome e um campo obrigatorio!`);
            flag = false;
        }
        if(!email.value && !telefone.value){
            this.errorText(email, `pelo menos um contato deve ser enviado!`);
            this.errorText(telefone, `pelo menos um contato deve ser enviado!`);
            flag = false;
        }
        if(email.value && !validator.isEmail(email.value)){
            this.errorText(email, `e-mail invalido!`);
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