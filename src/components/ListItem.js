import { Component } from '../core/Component';

export class ListItem extends Component {
   setup(props) {
      this.state = {
         id: Date.now(),
         date: new Date(),
         amount: props.amount,
      };

      this.$rootElement = document.createElement('div');
      this.$rootElement.className = 'donate-item';
      this.$rootElement.textContent = `${this.state.date.toLocaleDateString()} ${this.state.date.toLocaleTimeString()}`;

      const b = document.createElement('b');
      b.textContent = ` - ${this.state.amount}$`;
      this.$rootElement.appendChild(b);

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.textContent = 'Удалить';
      this.$rootElement.appendChild(deleteButton);
      this.$deleteButton = deleteButton;

      this.$deleteButton.addEventListener(
         'click',
         this.deleteDonate.bind(this)
      );
   }

   deleteDonate(event) {
      this.$rootElement.remove();
      this.props.onDelete(this.state.amount);
   }
}
