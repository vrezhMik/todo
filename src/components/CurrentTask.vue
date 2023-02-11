<template>
  <div class="empty task_view" v-if="!Store.state.current">
    <p class="flow-text">No task choosed</p>
    <p class="flow-text">Choose one from list or create a new task</p>
    <a
      class="btn-floating btn-large waves-effect waves-light btn"
      @click="changeCreatMode"
      >+
    </a>
  </div>
  <div class="task_view" v-else>
    <h1>{{ Store.state.current.name }}</h1>
    <p class="flow-text">
      {{ Store.state.current.description }}
    </p>

    <blockquote>{{ Store.state.current.date }}</blockquote>
  </div>
</template>
<script setup>
import Store from "@/store";
function changeCreatMode() {
  Store.state.create_mode = !Store.state.create_mode;
}
</script>
<style lang="scss" scoped>
.task_view {
  width: 1000px;
  display: flex;
  height: auto;
  justify-content: center;
  row-gap: 100px;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
