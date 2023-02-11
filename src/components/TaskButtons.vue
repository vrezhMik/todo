<template>
  <div class="empty" v-if="Store.state.tasks.length === 0">No tasks</div>
  <div class="task_container">
    <Task
      v-for="(task, id) in Store.state.tasks"
      :key="id"
      :task="task"
      :id="id"
    />
  </div>
</template>

<script setup>
import Task from "@/components/Task.vue";
import Store from "@/store";
</script>

<style lang="scss" scoped>
.task_container {
  height: 400px;
  overflow-y: scroll;
}
</style>
