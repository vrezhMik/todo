<template>
  <div class="x">
    <p class="flow-text">Sort by</p>
    <NameSort />
    <DateSort />
  </div>
  <div class="empty" v-if="Store.state.tasks.length === 0">No tasks</div>
  <div class="task_container">
    <Task v-for="(task, id) in Store.state.tasks" :key="id" :task="task" />
  </div>
</template>

<script setup>
import NameSort from "@/components/NameSort.vue";
import DateSort from "./DateSort.vue";
import Task from "@/components/Task.vue";
import Store from "@/store";
</script>

<style lang="scss" scoped>
.x {
  margin: 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.task_container {
  height: 400px;
  overflow-y: scroll;
}
</style>
