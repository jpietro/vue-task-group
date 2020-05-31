<template>
  
</template>

<script>
import { deleteTaskitemApi } from "./../../../services/api";
export default {
  props: ["id"],
  mounted: function() {
    deleteTaskitemApi(this.id).then(response => {
      //this.$store.commit("taskgroup", response.data.data);
      this.$router.push({name: "listTaskgroup"});
      //console.log(response.data.data);
    });
  }
};
</script>
