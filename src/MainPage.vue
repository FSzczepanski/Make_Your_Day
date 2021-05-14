<template>
  <div class="container mx-auto pt-12">

    <!-- dialog add todo -->
    <transition name="slide-fade">
        
    <dialog open v-if="!isHiddenTodos" >
      <img src="./assets/close.png" width="40" height="40" style="margin-left: 610px" v-on:click="isHiddenTodos = true" />
      <h1 style="display: flex; justify-content: center; margin-top:20px">Add new todo</h1>
      <textarea class="myinput" v-model="addTodo" placeholder="edit me"></textarea>
      <br />
      <button class="btnLogout" style="margin-left: 300px; margin-top: 15px; position: absolute;" @click="postTodo(addTodo)">Add </button>
      
    </dialog>
    
    </transition>

    <transition name="slide-fade">
    <!-- dialog add post -->
    <dialog open v-if="!isHiddenPosts">
      <img src="./assets/close.png" width="40" height="40" style="margin-left: 610px" v-on:click="isHiddenPosts = true" />
      <h1 style="display: flex; justify-content: center; margin-top:20px">Add new Post</h1>
      <textarea class="myinput" v-model="addPost" placeholder="edit me"></textarea>
      <br />
      <button class="btnLogout" style="margin-left: 300px; margin-top: 15px; position: absolute;" @click="postPost(addPost)">Add </button>
      
    </dialog>
   </transition>
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
        <transition name="slide-fade">
        <img v-if="isHiddenTodos && isHiddenPosts" src="./assets/add.jpg" width="42" height="42" style="position: absolute; margin-top: 380px; margin-left:500px" @click="isHiddenTodos = !isHiddenTodos" />
        </transition>
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
        <img src="./assets/add.jpg" width="42" height="42" style="position: absolute; margin-top: 330px; margin-left:500px" @click="isHiddenPosts = !isHiddenPosts"/>
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
                isHiddenTodos: true,
                isHiddenPosts: true
                }
            },
            created: function(){
                //sprawdzenie czy użytkownik zalogowany
                //if not then go to welcomePage
            },
            methods: {
              postPost(postDesc) {
                alert('Hello ' + postDesc);
              
              fetch("http://localhost:3000/post", {
                  method: 'post',
                  headers: {
                    "Content-Type": "application/json",
                      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxYmFlZWZhNjAxMzBiZjljZGMyNzQiLCJpYXQiOjE2MTkxNjU4OTR9.fEGJybX62agSG83lFqTNSkc7tm_W0bqXScSge6P5mR8'
                      },
                  body: JSON.stringify({ text: postDesc })
                })
                .then(async response => {
                  const data = await response.json();
                 
                  // check for error response
                  if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                  }else{
                    this.rerender();
                  }

                  
                })
                .catch(error => {
                  this.errorMessage = error;
                  console.error('There was an error!', error);
                })
              
             
              },
              

              postTodo(todoDesc){
                alert('Hello ' + todoDesc);

                const requestOptions = {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxYmFlZWZhNjAxMzBiZjljZGMyNzQiLCJpYXQiOjE2MTkxNjU4OTR9.fEGJybX62agSG83lFqTNSkc7tm_W0bqXScSge6P5mR8'
                    },
                body: JSON.stringify({ text: todoDesc })
              };
              fetch("http://localhost:3000/note", requestOptions)
                .then(async response => {
                const data = await response.json();
                
                // check for error response
                if (!response.ok) {
                  // get error message from body or default to response status
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);

                }else{
                  this.rerender();
                }

              })
              .catch(error => {
                this.errorMessage = error;
                console.error('There was an error!', error);
              });
              },
              rerender(){
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                    console.log('re-render start')
                    this.$nextTick(() => {
                        console.log('re-render end')
                    })
                })
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