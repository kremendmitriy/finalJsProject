import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
   setup(props) {
      this.state = {
         total: 0,
         donates: [],
      };

      this.$rootElement = document.createElement('div');
      this.$rootElement.className = 'app';

      const $heading = document.createElement('h1');
      $heading.className = 'total-amount';
      $heading.textContent = 'Итого: $';
      this.$rootElement.prepend($heading);

      const span = document.createElement('span');
      span.textContent = this.state.total;
      $heading.appendChild(span);

      this.$total = span;

      const donateForm = new Form({
         onSubmit: this.onItemCreate.bind(this),
      });

      const donateList = new List();
      this.donateList = donateList;

      this.$rootElement.appendChild(donateForm.$rootElement);
      this.$rootElement.appendChild(donateList.$rootElement);
   }

   onItemCreate(amount) {
      const item = new ListItem({
         amount,
         onDelete: this.deleteItem.bind(this),
      });
      item.date = new Date();
      this.state.donates.push(item);
      this.donateList.addItem(item);

      this.$total.textContent = this.state.total += amount;
   }

   deleteItem(amount) {
      this.$total.textContent = this.state.total -= amount;
   }
}
