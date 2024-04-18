import { Component } from '../core/Component';

export class Form extends Component {
   setup(props) {
      this.state = {
         amount: '',
      };

      this.$rootElement = document.createElement('form');
      this.$rootElement.className = 'donate-form';

      const label = document.createElement('label');
      label.className = 'donate-form__input-label';
      label.textContent = 'Введите сумму в $';
      this.$rootElement.appendChild(label);

      const input = document.createElement('input');
      input.className = 'donate-form__donate-input';
      input.name = 'amount';
      input.type = 'number';
      input.max = '100';
      input.min = '1';
      input.required;
      label.appendChild(input);

      this.$input = input;

      const button = document.createElement('button');
      button.disabled = 'donate-form__submit-button';
      button.type = 'submit';
      button.textContent = 'Задонатить';
      this.$rootElement.appendChild(button);

      this.$button = button;

      this.$input.addEventListener('input', this.handleInput.bind(this));
      this.$rootElement.addEventListener(
         'submit',
         this.handleSubmit.bind(this)
      );
   }

   get isValid() {
      return this.state.amount >= 1 && this.state.amount <= 100;
   }

   handleInput(event) {
      this.state.amount = event.target.value;

      if (this.isValid) {
         this.$button.disabled = false;
      } else this.$button.disabled = true;
   }

   handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(parseInt(this.state.amount));
      this.$input.value = '';
      this.state.amount = '';

      if (this.isValid) {
         this.$button.disabled = false;
      } else this.$button.disabled = true;
   }
}
