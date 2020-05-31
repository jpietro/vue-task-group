<template>
    <div>
    <h1>Alter</h1>
        <div>
            <label>Name:</label>
            <input type="text" v-model="name" />
        </div>
        <button @click="alterTaskitem(name)">Alter</button>
    </div>
</template>

<script>
import {alterTaskitemApi} from "./../../../services/api";
export default {
    props: ["id"],
    data(){
        return{
            name: ""
        };
    },
    methods:{
            alterTaskitem(name){
                alterTaskitemApi(name, this.id).then( 
                    result => {
                        //localStorage.token = result.data.token;
                        //console.log(result.data.data);
                        this.$router.push({name: "listTaskgroup"});
                    },
                    error => console.log(error.response.data.error_message)
                );
            }
        }
}
</script>
