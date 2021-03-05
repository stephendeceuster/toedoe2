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
    this._listRef.addEventListener("click", (e) => {
      if (e.target.classList.contains("icn--check")) {
        store.dispatch(checkToDo(e.target.parentElement.dataset.index));
      }
      if (e.target.classList.contains("icn--remove")) {
        store.dispatch(deleteToDo(e.target.parentElement.dataset.index));
      }
    });
  };

  render = () => {
    const { todos } = store.getState();
    if (todos) {
      this._listRef.innerHTML = todos
        .map((item, index) => {
          let addClass = "";
          if (item.checked) {
            addClass = "todoApp__list__item--checked";
          }
          return `
                <li class="todoApp__list__item ${addClass}" data-index="${index}">
                    <div class="textwrap"><span class="text">${item.todo}</span></div>
                    <span href="#" class="icn icn--remove"><svg class="icon icon-bin">
                        <use xlink:href="./icons/symbol-defs.svg#icon-bin"></use>
                    </svg></span>
                    <span href="#" class="icn icn--check"><svg class="icon icon-checkmark">
                        <use xlink:href="./icons/symbol-defs.svg#icon-checkmark"></use>
                    </svg></span>
                </li> `;
        })
        .join("");
    }
    this.saveToPersist();
  };

  saveToPersist = () => {
    localStorage.setItem(
        "toedoe2",
        JSON.stringify({
          state: store.getState().todos,
        })
      );
  }
}

export default (holder) => new ToDoList(holder);
