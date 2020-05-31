// src/components/taskgroup/show-taskgroup/ShowTaskgroup.vue
<template>
  
</template>

<script>
import { deleteTaskgroupApi } from "./../../../services/api";
export default {
  props: ["id"],
  mounted: function() {
    deleteTaskgroupApi(this.id).then(response => {
      //this.$store.commit("taskgroup", response.data.data);
      this.$router.push({name: "listTaskgroup"});
      //console.log(response.data.data);
    });
  }
};
</script>