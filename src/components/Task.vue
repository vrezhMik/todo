<template>
  <div class="task">
    <div class="info">
      <h6>{{ props.task.name }}</h6>
      <p>{{ props.task.date }}</p>
    </div>
    <div class="view" @click="setCurrent">View</div>
  </div>
</template>
<script setup>
import Store from "@/store";

import { defineProps } from "vue";

const props = defineProps({
  task: Object,
});

function setCurrent() {
  Store.state.current = props.task;
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
