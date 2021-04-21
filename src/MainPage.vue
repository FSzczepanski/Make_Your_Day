<template>
  <div class="container mx-auto pt-12">
   
        <h1 class="mh1">Good morning user</h1>
        <router-link to="/welcome" style="float: right; margin-top:-90px; margin-right: 20px;" >
                <button id="LogoutBtn" class="btn" >Logout</button>
            </router-link>
    

    <div style="float: left">
      <div class=" element" style="height:200px">
        <Weather />
      </div>
      <div class="element" style="height:420px">
       <Articles />
      </div>
    </div>

    <div style="float: left">
      <div class=" element" style="height:450px" >
        <Todos />
      </div>
      <div class=" element " style="height:170px">
        <Quotes />
      </div>
    </div>

    <div style="float: left">
      <div class=" element" style="height:220px; ">
        <Date />
      </div>
      <div class=" element" style="height:400px; ">
        <Notes />
      </div>
    </div>

        
    </div>
  
</template>

<script>
import Weather from './components/Weather.vue'
import Notes from './components/Notes.vue'
import Quotes from './components/Quotes.vue'
import Todos from './components/Todos.vue'
import Date from './components/Date.vue'
import Articles from './components/Articles.vue'


export default {
  name: 'App',
  components: {
    Weather,
    Notes,
    Articles,
    Quotes,
    Todos,
    Date
  },
  data() {
                return {
                competencies: null
                }
            },
            created: function(){
                //sprawdzenie czy użytkownik zalogowany
                //if not then go to welcomePage
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
.btnLogout{
  display: inline-block;
  background: rgb(143, 118, 204);
  color: rgb(238, 234, 238);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
}


</style>