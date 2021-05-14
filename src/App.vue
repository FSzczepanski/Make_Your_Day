
<template>


  <div class="container mx-auto pt-12">
    

    
    
  <router-view />
  
  </div>
</template>

<script>



export default {
  name: 'App',
  data() {
           return {
               
              }
            }, postNote: function(){
                console.log('callback inside Vue is called');
                
            }
}



</script>

<style>
@import url('https://fnts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  font-family: 'Poppins', sans-serif;
}
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
.container {
  
  max-width: 100%;
  margin: 30px auto;
  overflow: auto;
  height:auto;
  align-content: center;
  padding: auto;
  position: fixed;
  
}
.element::-webkit-scrollbar {
  display: none;
}
.element {
  display: flex;
justify-content: center;
  margin: 30px auto;
  overflow: auto;
  width: 560px;
  background: rgba(250,250,250,0.5);
  height: 300px;
  border-radius: 49px;
  font-size: 30px;
  
  margin: 30px;
}
.elementFloat{
  float:left;
}


.mh1{
  text-align: left;
  margin-left: 40px;
  margin-bottom: 30px;
  margin-top: 0px;
   font-size: 52px;
}
.btn {
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

dialog {
  position: absolute;
  color: white;
  width: 700px;
  height: 480px;
  margin-top: 130px;
  background: rgba(215, 208, 219, 0.94);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: solid gray 2px;
  border-radius: 40px;
}

.myinput{
  text-align: center;
  display: block;
    margin-left: auto;
    margin-right: auto;
  margin-top: 60px;
  height: 100px;
  width: 400px;
  border: 2px solid rgb(195, 166, 223);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: none;
  font-size: 20px;
  border-radius: 4px;
  padding: 10px;
}


.slide-fade-enter-active {
  transition: all .2s ease-out;
}

.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
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

div.settings {
    display:grid;
    grid-template-columns: max-content max-content;
    grid-gap:5px;
    justify-content: center;
    margin-right: 75px;
}
div.settings label       {
     text-align:right;
      }
div.settings label:after {
     content: ":";
      }
</style>

