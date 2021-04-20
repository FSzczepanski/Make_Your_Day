
<template>
  <div class="container mx-auto pt-12">
    <h1 class="mh1">Good morning user</h1>

    <div>
      <div class=" element">
        <Weather />
      </div>
      <div class=" element">
       <Notes />
      </div>
      <div class=" element">
        <Notes />
      </div>
    </div>
    <div>
      <div class=" element">
        <Notes />
      </div>
      <div class=" element">
        <Notes />
      </div>
      <div class=" element">
        <Notes />
      </div>
    </div>
  </div>
</template>

<script>
import Weather from './components/Weather.vue'
import Notes from './components/Notes.vue'

export default {
  name: 'App',
  components: {
    Weather,
    Notes
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  font-family: 'Poppins', sans-serif;
}
body {
  
  position: relative;
  width: 1920px;
  height: 1080px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: linear-gradient(252.44deg, #5FD2C4 0%, rgba(0, 167, 255, 0.67) 99.99%, rgba(0, 148, 255, 0) 100%, #0094FF 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 40px;
  color: black;
  max-width: 100%;
  
}
.container {
  max-width: 100%;
  margin: 30px auto;
  overflow: auto;
  height:auto;
  padding: auto;
  position: fixed;
  
}
.element::-webkit-scrollbar {
  display: none;
}
.element {
  margin: 30px auto;
  overflow: auto;
  width: 500px;
  background: rgba(250,250,250,1);
  height: 300px;
  border-radius: 49px;
  font-size: 30px;
  float:left;
  margin: 30px;
}

.mh1{
  text-align: center;
   font-size: 42px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>

