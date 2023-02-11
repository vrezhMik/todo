<template>
  <div class="task">
    <div class="info">
      <h6>{{ props.task.name }}</h6>
      <p>{{ props.task.date }}</p>
    </div>
    <a class="view" @click="remove">Remove</a>
    <a class="view" @click="edit">Edit</a>
    <a class="view" @click="setCurrent">View</a>
  </div>
</template>
<script setup>
import Store from "@/store";

import { defineProps } from "vue";

const props = defineProps({
  task: Object,
  id: Number,
});

function edit() {
  setCurrent();
  Store.state.edit_mode = true;
  Store.state.create_mode = true;
  Store.state.current_id = props.id;
}

function remove() {
  if (Store.state.current_id === props.id) {
    Store.state.current_id = null;
    Store.state.current = null;
  }
  Store.state.tasks = Store.state.tasks
    .slice(0, props.id)
    .concat(Store.state.tasks.slice(props.id + 1));
}

function setCurrent() {
  if (Store.state.create_mode)
    Store.state.create_mode = !Store.state.create_mode;
  Store.state.current = props.task;
  Store.state.current_id = props.id;
}
</script>
<style lang="scss" scoped>
.task {
  height: 65px;
  border: 1px solid #efefef;
  display: flex;
  padding-left: 20px;
  margin-bottom: 10px;

  .info {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
  }

  .view {
    width: 30%;
    height: 100%;
    background-color: #26a69a;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }
}
</style>
