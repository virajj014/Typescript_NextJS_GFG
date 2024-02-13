"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { todo } from "node:test";

interface TodoType {
  text: string;
  status: boolean;
  id: number;
}

export default function Home() {

  const [todos, setTodos] = useState<TodoType[]>([]);
  const getTodos = () => {
    let temptodos = localStorage.getItem("todos");

    console.log(temptodos);
    if (temptodos == null) {
      setTodos([]);
    }
    else {
      setTodos(JSON.parse(temptodos));
    }
  }
  useEffect(() => {
    getTodos();
  }, [])
  const [newTodoText, setNewTodoText] = useState("");
  const addTodo = () => {
    // console.log(newTodoText);
    if (newTodoText.length == 0) {
      return toast.error("Todo text is required");
    }
    let localStorageTodos = localStorage.getItem("todos");
    let newTodoObj = {
      text: newTodoText,
      status: false,
      id: new Date().getTime()
    }
    if (localStorageTodos == null) {
      localStorage.setItem('todos', JSON.stringify([newTodoObj]))
    }
    else {
      let todos = JSON.parse(localStorageTodos);
      todos.push(newTodoObj)
      localStorage.setItem('todos', JSON.stringify(todos))
    }

    setNewTodoText("");
    getTodos();
    setShowModal(false);
  }
  const updateTodo = (id: number) => {
    let temptodos = localStorage.getItem('todos');
    if (temptodos) {
      let jsonparsedtodo = JSON.parse(temptodos);

      let curentTodo = jsonparsedtodo.find((todo: TodoType) => todo.id == id)
      // console.log(curentTodo);
      let index = jsonparsedtodo.indexOf(curentTodo);
      jsonparsedtodo[index].status = !jsonparsedtodo[index].status;
      localStorage.setItem('todos', JSON.stringify(jsonparsedtodo));
    }

    getTodos();
  }
  const deleteTodo = (id: number) => {
    let temptodos = localStorage.getItem('todos');
    if (temptodos) {
      let jsonparsedtodo = JSON.parse(temptodos);
      let curentTodo = jsonparsedtodo.find((todo: TodoType) => todo.id == id)
      let index = jsonparsedtodo.indexOf(curentTodo);

      jsonparsedtodo.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(jsonparsedtodo));

    }
    getTodos();

  }


  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.outerPage}>
      <div className={styles.todoOut}>
        <div className={styles.section1}>
          <h1>Todo App</h1>
        </div>
        <div className={styles.todos}>
          {
            todos.length > 0 ? todos.map((todo) => {
              return (
                <div className={styles.todocard}>
                  {
                    todo.status == false ?
                      <h2 className={styles.taskpending}>{todo.text}</h2>
                      :
                      <h2 className={styles.taskdone}>{todo.text}</h2>
                  }
                  <div className={styles.icons}>
                    <svg
                      onClick={() => {
                        deleteTodo(todo.id)
                      }}

                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>


                    <svg
                      onClick={() => {
                        updateTodo(todo.id)
                      }}

                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </div>
                </div>
              )
            })
              :
              <div className={styles.noTodos}>
                <h3>No todos yet</h3>
              </div>
          }
        </div>
        <button
          className={styles.openModalBtn}
          onClick={() => {
            setShowModal(true);
          }}
        >+</button>



      </div>


      {
        showModal &&
        <div className={styles.createTodoModal}>
          <div className={styles.createTodoModalIn}>
            <input type="text" placeholder="Todo Text"
              value={newTodoText}
              onChange={(e) => {
                setNewTodoText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                addTodo();
              }}
            >+</button>
          </div>
        </div>
      }
    </div>
  );
}
