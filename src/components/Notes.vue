<template>
<div>
    <!-- dialog add todo -->
    <transition name="slide-fade">
        
    <dialog open v-if="!dialogClosed" style="margin-top: -240px">
      <img src="../assets/close.png" width="40" height="40" style="margin-left: 610px" v-on:click="dialogClosed = true" />
      <h1 style="display: flex; justify-content: center; margin-top:20px">Edit todo</h1>
      <textarea class="myinput" v-model="editTodo" ></textarea>
      <br />
      <button class="btnLogout" style="margin-left: 300px; margin-top: 15px; position: absolute;" @click="editTodo(item.id, editTodo)">Edit </button>
      
    </dialog>
    
    </transition>


    <div style="display: flex; justify-content: center;">
        <h2 style="margin-top: 20px; float: left;">Wall</h2>
        <img src="../assets/note.png" width="40" height="40" style=" margin-top:14px;margin-left:10px">
        
    </div>
    <div>
    <ul id="list-rendering">
         <div v-for="item in notes" v-bind:key="item" >
            <div class="card-body newElement element" @click="dialogClosed = !dialogClosed">
                <div style="maring-left: 190px; ">
                    <p class="card-text" >{{item.text}}</p>
                </div>
                <div style="margin-left:150px">
                    <img src="../assets/bin.png" width="40" height="40" style="" @click="deleteTodo(item._id)" />
                </div>
                 
                 
             </div>
         </div>
    </ul>
    </div>
</div>
</template>

<script>


export default({
            name:'Notes',
            data() {
                return {
                notes: null,
                dialogClosed: true,
                }
            },
            created: function(){

               fetch("http://localhost:3000/post", {
                method: 'get',
                headers: {
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxYmFlZWZhNjAxMzBiZjljZGMyNzQiLCJpYXQiOjE2MTkxNjU4OTR9.fEGJybX62agSG83lFqTNSkc7tm_W0bqXScSge6P5mR8'
                    }
                })
                .then(response => response.json())
                .then(notes => this.notes = notes);
            }, methods: {
              deleteTodo(id) {
                  alert(id)
                  fetch("http://localhost:3000/post/"+id, {
                  method: 'DELETE',
                  headers: {
                      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxYmFlZWZhNjAxMzBiZjljZGMyNzQiLCJpYXQiOjE2MTkxNjU4OTR9.fEGJybX62agSG83lFqTNSkc7tm_W0bqXScSge6P5mR8'
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
              },editTodo(id, todoDesc){
                alert(id + todoDesc);

                const requestOptions = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxYmFlZWZhNjAxMzBiZjljZGMyNzQiLCJpYXQiOjE2MTkxNjU4OTR9.fEGJybX62agSG83lFqTNSkc7tm_W0bqXScSge6P5mR8'
                    },
                body: JSON.stringify({ text: todoDesc })
              };
              fetch("http://localhost:3000/note/"+id, requestOptions)
                .then(async response => {
                const data = await response.json();
                
                // check for error response
                if (!response.ok) {
                  // get error message from body or default to response status
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
        justify-content: center;
        margin-right: 110px;

         background: rgba(235, 235, 235, 0.4);
    }

   
</style>
