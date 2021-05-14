<template>
    <div class="hello" style="display: flex; justify-content: center; margin-top: 50px; ">
        <h1>Register check in Your Day</h1>
    </div>
    <div class="hello" style="display: flex; justify-content: center; margin-top: 130px;">
        <h2>Check code from your organization</h2>
    </div>
    <textarea class="myinput" style="height:60px; margin-bottom: 20px; margin-top: 10px;" v-model="editpost" ></textarea>
    <div class="hello" style="display: flex; justify-content: center;">
        <router-link to="/Register" >
            <button id="myButton" class="btn">Check code</button>
        </router-link>
    </div>
    <div v-if="checked" class="hello" style="display: flex; justify-content: center;">
        <router-link to="/Register" >
            <button id="myButton" class="btn">Check code</button>
        </router-link>
    </div>
    
</template>

<script>
    export default {
        name: 'RegisterCheck',
        data () {
            return {
               
            }
        }
    }
</script>

<style scoped>
    
</style>