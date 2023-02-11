<template>
  <div class="row task_view">
    <form class="col s6">
      <div class="row">
        <div class="input-field col s12" v-if="Store.state.edit_mode">
          <input
            type="text"
            id="task_name"
            v-model="Store.state.current.name"
          />
          <label for="task_name" class="active">Task Name</label>
        </div>
        <div class="input-field col s12" v-else>
          <input type="text" id="task_name" v-model="name" />
          <label for="task_name">Task Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12" v-if="Store.state.edit_mode">
          <textarea
            id="description"
            class="materialize-textarea"
            v-model="Store.state.current.description"
          ></textarea>
          <label for="description" class="active">Description</label>
        </div>
        <div class="input-field col s12" v-else>
          <textarea
            id="description"
            class="materialize-textarea"
            v-model="description"
          ></textarea>
          <label for="description">Description</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12" v-if="Store.state.edit_mode">
          <input
            type="text"
            class="datepicker"
            ref="date_input"
            id="date"
            v-model="Store.state.current.date"
          />
          <label for="date" class="active">Date</label>
        </div>
        <div class="input-field col s12" v-else>
          <input type="text" class="datepicker" ref="date_input" id="date" />
          <label for="date">Date</label>
        </div>
      </div>
      <div class="row">
        <a
          class="waves-effect waves-light btn"
          @click="update"
          v-if="Store.state.edit_mode"
          >update</a
        >
        <a class="waves-effect waves-light btn" @click="create" v-else
          >Create</a
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import Store from "@/store";
import { onMounted, ref } from "vue";
import M from "materialize-css";
let name;
let description;
const date_input = ref();

function create() {
  var new_task = {
    date: date_input.value.value,
    name: name,
    description: description,
  };
  Store.state.tasks.unshift(new_task);
  Store.state.sortByDate();
  Store.state.create_mode = !Store.state.create_mode;
  Store.state.current = new_task;
  Store.state.current_id = 0;
}

function update() {
  var update_id = Store.state.current_id;
  var updated_task = {
    date: date_input.value.value,
    name: Store.state.current.name,
    description: Store.state.current.description,
  };
  Store.state.tasks[update_id] = updated_task;
  Store.state.sortByDate();
  Store.state.create_mode = !Store.state.create_mode;
  Store.state.edit_mode = !Store.state.edit_mode;
}

onMounted(() => {
  M.Datepicker.init(date_input.value, "autoClose");
});
</script>

<style lang="scss" scoped>
.task_view {
  width: 1000px;
  display: flex;
  height: 500px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  form {
    margin: 0 auto;
  }
}
</style>
