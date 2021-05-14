<template>
    <div class="hello" style="justify-content: center; display: flex ">
        <h1>Oops, it looks like the page you're looking for doesn't exist.</h1>
        
    </div>
    <div style="justify-content: center; display: flex; margin-top:20px;">
    <router-link to="/" >
            <button id="myButton" class="btn">Go back to Main Page!</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'NotFound',
        data () {
            return {
               
            }
        }
    }
</script>

<style scoped>
body {
  
  position: relative;
  width: 1920px;
  height: 880px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: linear-gradient(252.44deg, #5FD2C4 10%, rgba(0, 167, 255, 0.67) 99.99%, rgba(139, 21, 124, 0) 100%, #672991 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 40px;
  color: white;
  max-width: 100%;
  
}

</style>