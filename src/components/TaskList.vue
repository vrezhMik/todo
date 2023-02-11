<template>
  <div class="tasks container">
    <div class="task_header">
      <h3>Tasks</h3>
      <TaskButtons />
      <a
        class="btn-large waves-effect waves-light btn"
        @click="changeCreatMode"
        v-if="!Store.state.create_mode"
        >+</a
      >
    </div>
  </div>
</template>

<script setup>
import TaskButtons from "@/components/TaskButtons.vue";
import Store from "@/store";
function changeCreatMode() {
  Store.state.create_mode = !Store.state.create_mode;
}
</script>

<style lang="scss" scoped>
.tasks {
  width: 30%;
  height: 100vh;
  border-left: 2px solid #efefef;
  padding: 10px;
  .task_header {
    h3,
    a {
      text-align: center;
    }
    a {
      display: block;
    }
  }
}
</style>
