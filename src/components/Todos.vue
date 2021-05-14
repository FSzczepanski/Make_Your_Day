<template>
<div>

    <transition name="slide-fade">
        
    <dialog open v-if="!dialogClosed" style="margin-top: 10px">
      <img src="../assets/close.png" width="40" height="40" style="margin-left: 610px" v-on:click="dialogClosed = true" />
      <h1 style="display: flex; justify-content: center; margin-top:20px">Edit post</h1>
      <textarea class="myinput" v-model="editpost" ></textarea>
      <br />
      <button class="btnLogout" style="margin-left: 300px; margin-top: 15px; position: absolute;" @click="editpost(item.id, editpost)">Edit </button>
      
    </dialog>
    
    </transition>

 <div style="display: flex; justify-content: center;">
     <img src="../assets/todo.png" width="34" height="34" style="float: left; margin-top:25px;margin-right:10px">
        <h2 style="margin-top: 20px; font-size: 40px">Todos</h2>
         
    </div>
   

    <ul id="list-rendering">
         <div v-for="item in todos" v-bind:key="item" >
            <div class="card-body newElement element" @click="dialogClosed = !dialogClosed">
                <div style="margin-left: 50px ">
                    <p class="card-text" >{{item.text}}</p>
                </div>
                <div style="margin-left:150px">
                    <img src="../assets/bin.png" width="40" height="40" style="margin-right: 10px" v-on:click="deleteTodo(item._id)" />
                </div>
             </div>
         </div>
    </ul>
    <div>
        
    </div>
    
    
</div>
</template>

<script>


export default({
            name:'Notes',
            data() {
                return {
                todos: null,
                dialogClosed: true,
                }
            },
            created: function(){
               // const headers = { "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxYmFlZWZhNjAxMzBiZjljZGMyNzQiLCJpYXQiOjE2MTkxNjU4OTR9.fEGJybX62agSG83lFqTNSkc7tm_W0bqXScSge6P5mR8" };

                fetch("http://localhost:3000/note", {
                method: 'get',
                headers: {
                    'auth-token': localStorage.getItem('token')
                    }
                })
                .then(response => response.json())
                .then(todos => this.todos = todos);
            }, methods: {
              deleteTodo(id) {
                  alert(id)
                  fetch("http://localhost:3000/note/"+id, {
                  method: 'DELETE',
                  headers: {
                      'auth-token': localStorage.getItem('token')
                      },
                })
                .then(async response => {
                  const data = await response.json();
                 
                  if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                  }

                  
                })
                .catch(error => {
                  this.errorMessage = error;
                  console.error('There was an error!', error);
                })
              },editPost(id, postDesc){
                alert(id + postDesc);

                const requestOptions = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.getItem('token')
                    },
                body: JSON.stringify({ text: postDesc })
              };
              fetch("http://localhost:3000/post/"+id, requestOptions)
                .then(async response => {
                const data = await response.json();
                
                if (!response.ok) {
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);

                }

              })
              .catch(error => {
                this.errorMessage = error;
                console.error('There was an error!', error);
              });
              }
        }});
        



</script>


<style scoped>
    .newElement{
        font-size: 18px;
        width: 460px;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 100px;
        
         background: rgba(235, 235, 235, 0.4);
    }
</style>
