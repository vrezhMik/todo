<template>
  <div class="empty task_view" v-if="!Store.state.current">
    <p class="flow-text">empty</p>
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
</script>
<style lang="scss" scoped>
.task_view {
  width: 70%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  padding: 100px 50px;
  p {
    margin-left: 100px;
  }
}
</style>
