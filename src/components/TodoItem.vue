<template>
  <li class="todo-item">
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox"
             v-on:change="todo.completed = !todo.completed">
      <strong>{{index + 1}}</strong>
      {{todo.title | uppercase}}
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    uppercase(value) {
      console.log(value)
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
.todo-item{
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
} 
  .done {
    text-decoration: line-through;
  }

  .rm {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }

  input {
    margin-right: 1rem;
  }
</style>