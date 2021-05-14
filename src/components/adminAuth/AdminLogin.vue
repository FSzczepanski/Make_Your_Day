<template>
    <div v-if="!logged">
        
        <div class="hello" style="display: flex; justify-content: center; margin-top: 130px;">
            <h2>Login to Your Day</h2>
        </div>
        <div class="settings">
            <label style="margin-top:25px;">Email</label>
            <textarea class="myinput" style="height:60px; margin-bottom: 20px; margin-top: 10px;" v-model="email" ></textarea>


            <label style="margin-top:25px;">Password</label>
            <textarea class="myinput" style="height:60px; margin-bottom: 20px; margin-top: 10px;" v-model="password" ></textarea>
         </div>
        <div v-if="wrongData" class="hello" style="display: flex; justify-content: center;">
                <p style=" color: #cc0000;"> incorrect email or password</p>
        </div>
        <div class="hello" style="display: flex; justify-content: center;">
                <button id="myButton" class="btn" @click="login(email,password)">Login </button>
        </div>
    </div>

    <div v-if="logged">
        <div class="hello" style="display: flex; justify-content: center; margin-top: 130px;">
            <h2>Succesfully logged in!</h2>
        </div>
        <div class="hello" style="display: flex; justify-content: center; margin-top: 30px;">
        <router-link to="/" >
                <button id="myButton" class="btn" >Go to main Page </button>
        </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Welcome',
        data () {
            return {
               logged: false,
               wrongData: false
            }
        },
            created: function(){

            
            }, methods: {
                
                login(email, password) {

                    var valid = false;
                //    validation
                   if(email!=null && password != null ){
                       valid=true;
                   }else{
                       alert("podaj prawidłowe dane");
                   }
                      
                  if(valid){
                     fetch("http://localhost:3000/auth/login", {
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json"
                            },
                        body: JSON.stringify({ email: email, password: password })
                    })
                    .then(async response => {
                        const data = await response.json();

                        if (!response.ok) {
                            const error = (data && data.message) || response.statusText;
                            //alert(response);
                            this.wrongData =true;
                            return Promise.reject(error);
                        }else{
                            this.authToken = data.token;
                            this.logged=true;
                            localStorage.setItem('token',this.authToken);
                            //alert(this.authToken);
                        }
                        })
                        .catch(error => {
                            this.errorMessage = error;
                            //alert(error);
                            this.wrongData =true;
                            console.error("There was an error!", error);
                        });
                  }
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