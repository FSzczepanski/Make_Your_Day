<template>
     <div class="hello" style="justify-content: center; display: flex">
        <h1>Welcome to Your Day</h1>
     </div>
        <div class="hello" style="justify-content: center; display: flex; font-size:45px; ">
            <router-link to="/register/check" >
            <button id="myButton" class="btn" >Register</button>
        </router-link>
        <router-link to="/login" >
            <button id="myButton" class="btn">Login</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Welcome',
        data () {
            return {
               
            }
        }
    }
</script>

<style scoped>


</style>