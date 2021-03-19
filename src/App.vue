<template>
  <div class="container">
    <h1 class="mh1">Good moring user</h1>
    <div>
      <div class="elementPositioner">
        <Weather />
      </div>
      <div class="elementPositioner">
       <Weather />
      </div>
      <div class="elementPositioner">
        <Weather />
      </div>
    </div>
    <div>
      <div class="elementPositioner">
        <Weather />
      </div>
      <div class="elementPositioner">
       <Weather />
      </div>
      <div class="elementPositioner">
        <Weather />
      </div>
    </div>
  </div>
</template>

<script>
import Weather from './components/Weather.vue'

export default {
  name: 'App',
  components: {
    Weather
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #87CEFA;
  color: white;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 100%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: auto;
  position: fixed;
  
}
.element {
  margin: 30px auto;
  background: rgba(250,250,250,0.5);
  overflow: auto;
  min-height: 300px;
  padding: 40px;
  border-radius: 49px;
}
.elementPositioner{
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

