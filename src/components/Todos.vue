<template>
  <section>
    <navigation></navigation>
    <br />

    <form >
      <div class="form-group">
        <div class="input-group mb-3">
          <input type="text" id="new_todo" class="form-control validate" v-model="todo.title" />
          <div class="input-group-append">
            <button
              class="btn "  style="background-color: #33b5e5; color:white;"
              type="button"
              id="button-addon"
              @click="addTodo"
            >Button</button>
          </div>
        </div>
      </div>


      <ul class="list-group card">
        <li
          class="list-group-item"  style=" height: 60px;"
          v-for="todo in todos"
          :key="todo.id"
          :class="{ fade: todo.isCompleted }"
        >
          <span class="deleteIcon" @click="deleteToDo(todo.id)">&#10005;</span>
          {{todo.title}}
          <span class="secondary-content">
            <label>
              <input
                type="checkbox"
                id="blankCheckbox"
                class="filled-in"
                :checked="todo.isCompleted"
                @change="updateTodoItem(todo.id, $event)"
              />
            </label>
          </span>
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase";

export default {
  data() {
    return {
      todos: [],
      todo: {
        title: ""
      }
    };
  },
  created() {
    this.getTodos();
  },
  components: { navigation },
  methods: {
    addTodo() {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .add({
          title: this.todo.title,
          createdAt: new Date(),
          isCompleted: false
        });
    },
    async getTodos() {
      var todosRef = await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos");
      todosRef.onSnapshot(snap => {
        this.todos = [];
        snap.forEach(doc => {
          var todo = doc.data();
          todo.id = doc.id;
          this.todos.push(todo);
        });
      });
    },
    updateTodoItem(docId, e) {
      var isChecked = e.target.checked;
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .doc(docId)
        .update({
          isCompleted: isChecked
        });
    },
    deleteToDo(docId) {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .doc(docId)
        .delete();
    }
  }
};
</script>

<style>
.fade {
  opacity: 0.4 !important;
}
li {
  font-size: 1.1em;
}
.collection.with-header {
  max-width: 500px;
  margin: 0 auto;
}
.deleteIcon {
  margin-right: 10px;
  cursor: pointer;
 
}
.deleteIcon:hover {
  opacity: 0.5;
}

/* input[type="checkbox"]{
  float: right;
} */

form {
  width:80%;
  margin: 0 auto;
 
}


</style>

