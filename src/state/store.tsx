import { makeAutoObservable } from 'mobx';

interface Todo {
    id: number;
    text: string;
    done: boolean;
  }

class ToDos{
  todos:Todo[] = [];
  copyTodos:Todo[] = [];
  constructor(){
    makeAutoObservable(this);
  }

  loadToDos(){
    fetch('https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json')
    .then((response)=>response.json())
    .then((toDos)=>{
      this.todos = toDos;
      this.copyTodos = toDos;
    });
  }

  getToDosByText(toDoText:string){
    this.todos = this.todos.filter( todo => todo.text.toLowerCase().includes(toDoText.toLowerCase()))
  }
  removeToDoById(toDoId:number){
    this.todos = this.todos.filter( todo => todo.id !== toDoId);
  }
  addNewToDo(toDoText:string){
    this.todos.push({
      "id":this.todos.length+1,
      "text":toDoText,
      "done":false
    });
  }
  setAllToDos(){
    this.todos = this.copyTodos;
  }
}
const store = new ToDos();

export default store;