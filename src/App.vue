<template>
  <main>
    <CurrentTask />
    <TaskList />
  </main>
</template>

<script setup>
import TaskList from "@/components/TaskList.vue";
import CurrentTask from "./components/CurrentTask.vue";
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  width: 100%;
  display: flex !important;
}
</style>
