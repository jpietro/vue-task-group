// src/components/taskgroup/show-taskgroup/ShowTaskgroup.vue
<template>
  <div>
    <h1>Show Taskgroup - id: {{id}}</h1>

    <label for="id">Id: {{taskgroup.id}}</label>
    <br />

    <label for="name">Name: {{taskgroup.name}}</label>
    <br />

    <label for="description">Description: {{taskgroup.description}}</label>
    <br />

    <label for="frequence_type">Frequence Type: {{taskgroup.frequence_type}}</label>
    <br />

    <router-link
          :to = "{ name: 'createTaskitem', params: {id: taskgroup.id}}"
          >Create Task Item</router-link>
    <list-taskitem></list-taskitem>
  </div>
</template>

<script>
import { getTaskgroupApi } from "./../../../services/api";
import ListTaskitem from "./../../taskitem/list-taskitem/ListTaskitem.vue";
export default {
  props: ["id"],
  components: {
    "list-taskitem": ListTaskitem
  },
  computed:{
      taskgroup(){
          return this.$store.state.taskgroup;
      }
  },
  mounted: function() {
    getTaskgroupApi(this.id).then(response => {
      this.$store.commit("taskgroup", response.data.data);
    });
  }
};
</script>