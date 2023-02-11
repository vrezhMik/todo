<template>
    <div class="tasks container">
        <div class="task_header">
            <h3>Tasks</h3>
            <TaskButtons/>
        </div>
    </div>
</template>

<script setup>
import TaskButtons from "@/components/TaskButtons.vue"

</script>

<style lang="scss" scoped>
.tasks{
    width: 30%;
    height: 100vh;
    border-left: 2px solid #efefef;
    padding:10px;
    .task_header{
        h3{
        text-align: center;

        }
    }
}
</style>