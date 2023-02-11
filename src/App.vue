<template>
  <main>
    <CurrentTask v-if="!Store.state.create_mode" />
    <CreateTask v-if="Store.state.create_mode" />
    <TaskList />
  </main>
</template>

<script setup>
import TaskList from "@/components/TaskList.vue";
import CurrentTask from "./components/CurrentTask.vue";
import CreateTask from "./components/CreateTask.vue";
import Store from "@/store";
</script>

<style lang="scss" scoped>
main {
  height: 620px;
  width: 100%;
  display: flex;
}
</style>
