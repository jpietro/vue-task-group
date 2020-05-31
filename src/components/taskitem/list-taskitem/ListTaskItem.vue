// src/components/taskitem/list-taskitem/ListTaskitem.vue
<template>
  <div>
    <h1>List Taskitem</h1>
    <br />
    <label for="taskItemsOverview">{{taskItemsOverview}}</label>

    <ul>
      <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">
        <div>
          <label>checked:</label>
          <input type="checkbox" v-model="taskitem.checked" @click="updateTaskItem(taskitem)" />
        </div>
        <div>
          <label>name: {{ taskitem.name}}</label>
        </div>
        <div>
          <label>description: {{ taskitem.description}}</label>
        </div>

        <router-link
          :to = "{ name: 'deleteTaskitem', params: {id: taskitem.id}}"
          >Delete Task Item</router-link>
        <router-link
          :to = "{ name: 'alterTaskitem', params: {id: taskitem.idTask}}"
          >Alter Name Task Item</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { updateTaskItemApi } from "./../../../services/api";
export default {
  computed: {
    taskitems(){
        return this.$store.state.taskitems;
    },
    formattedTaskitems: function() {
      return this.taskitems.map(this.formatTaskitem);
    },
    taskItemsOverview: function() {
      const { formattedTaskitems, isTaskitemChecked } = this;
      const totalCount = formattedTaskitems.length;
      const checkedCount = formattedTaskitems.filter(isTaskitemChecked).length;
      return `${checkedCount} of ${totalCount} task items are checked`;
    }
  },
  methods: {
    formatTaskitem(taskitem) {
      return {
        id: taskitem.id,
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description,
        idTask: taskitem.task.id
      };
    },
    isTaskitemChecked(taskitem) {
      return !!taskitem.checked;
    },
    updateTaskItem(taskitem) {
      taskitem.checked = !taskitem.checked;
      updateTaskItemApi(taskitem).then(response => {
        //console.log(response.data.data);
        this.$store.commit("taskitem", taskitem);
      });
    }
  }
};
</script>