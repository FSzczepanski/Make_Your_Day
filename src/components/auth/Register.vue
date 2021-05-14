<template>
<!-- checking code -->
    <div class="hello" style="display: flex; justify-content: center; margin-top: 50px; ">
            <h1>Sign up for Your Day!</h1>
        </div>
    <div v-if="!checked">
        
        <div class="hello" style="display: flex; justify-content: center; margin-top: 130px;">
            <h2>Check code from your organization</h2>
        </div>
        <textarea class="myinput" style="height:60px; margin-bottom: 20px; margin-top: 10px;" v-model="check" ></textarea>
        <div class="hello" style="display: flex; justify-content: center;">
                <button id="myButton" class="btn" @click="checkInv(check)">Check code</button>
        </div>
    </div>

    <!-- register -->

    <div v-if="checked && !registered" >
        
        <div class="hello" style="display: flex; justify-content: center; margin-top: 130px;">
            <h2>Register</h2>
        </div>
        
    

        <div class="settings" style="margin-right: 150px; margin-top: 50px;">
            <label style="margin-top:25px;">Name</label>
            <textarea class="myinput" style="height:60px; margin-bottom: 20px; margin-top: 10px;" v-model="name" ></textarea>

            <label style="margin-top:25px;">Email</label>
            <textarea class="myinput" style="height:60px; margin-bottom: 20px; margin-top: 10px;" v-model="email" ></textarea>


            <label style="margin-top:25px;">Password</label>
            <textarea class="myinput" style="height:60px; margin-bottom: 20px; margin-top: 10px;" v-model="password" ></textarea>

            <label style="margin-top:25px;">Confirm password</label>
            <textarea class="myinput" style="height:60px; margin-bottom: 20px; margin-top: 10px;" v-model="confirmPassword" ></textarea>
         </div>

        <div class="hello" style="display: flex; justify-content: center;">
            <router-link to="/Register" >
                <button id="myButton" class="btn" @click="register(name, email, password, confirmPassword)">Register</button>
            </router-link>
        </div>
    </div>

    <!-- regisered confirmation -->
    
    <div v-if="registered">
        
        <div class="hello" style="display: flex; justify-content: center; margin-top: 130px;">
            <h2>Thank you for registering on your day!</h2>
        </div>
        
        <div class="hello" style="display: flex; justify-content: center;">
            <router-link to="/login" >
                <button id="myButton" class="btn">Go to login page</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
               checked: false,
               invitationToken: "",
               registered: false
            }
        },
            created: function(){

            
            }, methods: {
              checkInv(invitation) {
                    fetch("http://localhost:3000/auth/register/check", {
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json",
                            },
                        body: JSON.stringify({ inv: invitation })
                    })
                    .then(async response => {
                        const data = await response.json();

                        if (!response.ok) {
                            const error = (data && data.message) || response.statusText;
                            alert("nieprawidlowy kod");
                            return Promise.reject(error);
                        }else{
                            this.invitationToken = data.inv;
                            this.checked=true;
                        }
                        })
                        .catch(error => {
                            this.errorMessage = error;
                            alert("nieprawidlowy kod");
                            console.error("There was an error!", error);
                        });
                    
              },
              register(name, email, password, confirmPassword) {
                  var valid = false;
                //    validation
                   if(name!= null && email!=null && password != null && password == confirmPassword){
                       if(email.length<4){
                            alert("login powinien składać się z minimum 4 znaków")
                       }else if(password.length<6){
                           alert("haslo powino składać się z minimum 6 znaków")
                       }
                       else{
                            valid = true;
                       }
                   }else{
                       if(password == confirmPassword){
                           alert('Pola nie mogą być puste!')
                       }else{
                           alert('hasła różnią się!')
                       }
                       
                   }

                if(valid){
                     fetch("http://localhost:3000/auth/register", {
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json",
                            'inv-token': this.invitationToken
                            },
                        body: JSON.stringify({ name: name, email: email, password: password })
                    })
                    .then(async response => {
                        const data = await response.json();

                        if (!response.ok) {
                            const error = (data && data.message) || response.statusText;
                            alert("cos poszlo nie tak");
                            return Promise.reject(error);
                        }else{
                            this.registered = true;
                        }
                        })
                        .catch(error => {
                            this.errorMessage = error;
                            alert("cos poszlo nie tak");
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