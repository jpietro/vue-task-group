<template>
    <div>
    <h1>Create</h1>
        <div>
            <label>Name:</label>
            <input type="text" v-model="name" />
        </div>
        <div>
            <label>Description:</label>
            <input type="text" v-model="description"/>
        </div>
        <div>
            <label>FrequenceType:</label>
            <input type="text" v-model="frequence_type"/>
        </div>
        <button @click="createTaskgroup(name, description, frequence_type)">Create</button>
    </div>
</template>

<script>
import {createTaskgroupsApi} from "./../../../services/api";
export default {
    data(){
        return{
            name: "",
            description: "",
            frequence_type: ""
        };
    },
    methods:{
            createTaskgroup(name, description, frequence_type){
                createTaskgroupsApi(name, description, frequence_type).then( 
                    result => {
                        //localStorage.token = result.data.token;
                        this.$router.push({name: "listTaskgroup"});
                    },
                    error => console.log(error.response.data.error_message)
                );
            }
        }
}
</script>
