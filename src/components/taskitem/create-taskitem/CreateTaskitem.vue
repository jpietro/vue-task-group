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
        <button @click="createTaskitem(name, description)">Create</button>
    </div>
</template>

<script>
import {createTaskitemApi} from "./../../../services/api";
export default {
    props: ["id"],
    data(){
        return{
            name: "",
            description: ""
        };
    },
    methods:{
            createTaskitem(name, description){
                createTaskitemApi(name, description, this.id).then( 
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
