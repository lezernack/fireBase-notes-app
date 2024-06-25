import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// toggle complete
const toggleTodoStatus = async ({ docId, status }) => {
  try {
    const todoRef = doc(db, "todo", docId);
    await updateDoc(todoRef, {
      status,
    });
  } catch (error) {
    console.log(err);
  }
};
// add a todo
const addTodo = async ({ userId, title, description, status }) => {
  try {
    await addDoc(collection(db, "todo"), {
      user: userId,
      title: title,
      description: description,
      status: status,
      createdAt: new Date().getTime(),
    });
  } catch (err) {}
};
// update a todo
const updateTodo = async ({ docId, title, description }) => {
  try {
    const todoRef = doc(db, "todo", docId);
    await updateDoc(todoRef, {
      title,
      description,
    });
  } catch (err) {
    console.log(err);
  }
};
// delete a todo
const deleteTodo = async (docId) => {
  try {
    const todoRef = doc(db, "todo", docId);
    await deleteDoc(todoRef);
  } catch (err) {
    console.log(err);
  }
};

export { addTodo, toggleTodoStatus, deleteTodo, updateTodo };
