import store from "../redux/store";
import { addToDo, checkToDo, deleteToDo } from "../redux/todoList";

class ToDoList {
  constructor(holder) {
    this._holder = holder;
    this._formRef = null;
    this._inputRef = null;
    this._listRef = null;
    this.init();
    this.render();
    this.setupEvents();
    store.subscribe(this.render.bind(this));
  }

  init = () => {
    this._holder.innerHTML = `
            <h1 class=logo>Toedoe2</h1>
            <form action="" class="todoApp__form  /*todoApp__form--error*/">
                <input type="text" class="todoApp__form__input todoApp__form__input--error" autofocus placeholder="Enter an activity.." />
                <button type="submit" class="todoApp__form__button">
                    <svg class="icon icon-bin">
                        <use xlink:href="./icons/symbol-defs.svg#icon-plus"></use>
                    </svg>
                </button>
            </form>
            <div class="todoApp__list-holder">
                <ul class="todoApp__list">
                    NO TODO'S!
                </ul>
            </div>
        `;
    this._formRef = this._holder.querySelector(".todoApp__form");
    this._inputRef = this._formRef.querySelector("input");
    this._listRef = this._holder.querySelector(".todoApp__list");
  };

  setupEvents = () => {
    this._formRef.addEventListener("submit", (e) => {
      e.preventDefault();
      store.dispatch(addToDo(this._inputRef.value));
      this._inputRef.value = "";
    });
    this._listRef.querySelectorAll(".icn--check").forEach((todo, index) => {
      const check = (e) => {
        e.preventDefault();
        store.dispatch(checkToDo(index));
      };
      todo.addEventListener("click", check);
    });
    this._listRef.querySelectorAll(".icn--remove").forEach((todo, index) => {
      const deleting = (e) => {
        e.preventDefault();
        store.dispatch(deleteToDo(index));
      };
      todo.addEventListener("click", deleting);
    });
  };

  render = () => {
    const { todos } = store.getState();
    if ( todos ) {
      this._listRef.innerHTML = todos.map((item) => {
        let addClass = "";
        if (item.checked) {
          addClass = "todoApp__list__item--checked";
        }
        return `
                <li class="todoApp__list__item ${addClass}">
                    <div class="textwrap"><span class="text">${item.todo}</span></div>
                    <a href="#" class="icn icn--remove"><svg class="icon icon-bin">
                        <use xlink:href="./icons/symbol-defs.svg#icon-bin"></use>
                    </svg></a>
                    <a href="#" class="icn icn--check"><svg class="icon icon-checkmark">
                        <use xlink:href="./icons/symbol-defs.svg#icon-checkmark"></use>
                    </svg></a>
                </li> `
      }).join('');
    }
    this.setupEvents();
  };
}

export default (holder) => new ToDoList(holder);
