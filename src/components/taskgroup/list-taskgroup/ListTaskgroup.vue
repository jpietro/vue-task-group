// src/components/taskgroup/list-taskegroup/ListTaskgroup.vue
<template>
  <div>
    <h1>List Taskgroup</h1>
    <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
        <router-link
          :to = "{ name: 'showTaskgroup', params: {id: taskgroup.id}}"
          >{{taskgroup.name}}</router-link>
          <router-link
          :to = "{ name: 'deleteTaskgroup', params: {id: taskgroup.id}}"
          >Delete</router-link>
      </li>
    </ul>
    <button @click="goCreate()">Create Taskgroup</button>
    <button @click="doLogout()">Logout</button>
  </div>
</template>

<script>
import { getTaskgroupsApi } from "./../../../services/api";
export default {
  data(){
    return {
      taskgroups: []
    };
  },
  mounted: function() {
    getTaskgroupsApi().then(
      result => (this.taskgroups = result.data.data),
      error => console.log(error.response.data.error_message)
    );
  },
  methods:{
      doLogout(){
        localStorage.removeItem("token");
        this.$router.push({name: "login"});
                
      },
      goCreate(){
        this.$router.push({name: "createTaskgroup"});
                
      },
  }
}
</script>
