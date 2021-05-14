<template>
    <div>
        
        <div>
            <div style="position: absolute; margin-left:250px;margin-top:80px; font-size: 22px; ">
                        <p  class="card-text" >Temperature</p>
                        <p  class="card-text" >Wind</p>
                 </div>
        <ul id="list-rendering" style="width: 549px">
            <div v-for="(item, index) in weather" :key="item">
                
                <div v-if="index=='name'" style="position: absolute; margin-left:200px; font-size:44px">
                        <p  class="card-text" >{{item}}</p>
                 </div>
                 <div v-else-if="index=='temperature'" style="position: absolute; margin-left:350px; margin-top:80px;font-size: 22px; ">
                        <p  class="card-text" >{{item}} °C</p>
                 </div>
                  <div v-else-if="index=='wind'" style="position: absolute; margin-left:350px; margin-top:130px;font-size: 22px; ">
                        <p  class="card-text" >{{item}} km/h</p>
                 </div>
                 <div v-else-if="index=='weather'" style="position: absolute; margin-top:130px; margin-left:8px; ">
                        <p  class="card-text" >{{item}}</p>
                 </div>

                 

                <div v-if="index=='name' || index=='temperature' || index=='weather' " >
                    <div v-if="index=='weather'" style="">
                        <img v-if="item=='clear sky'" src="../assets/sun.png"  class="photo">
                        <img v-else-if="item=='rainy' || item=='shower rain'" src="../assets/rainy.png"  class="photo">
                        <img v-else-if="item=='thunderstorm'" src="../assets/storm.png"  class="photo">
                        <img v-else src="../assets/cloudy.png"  class="photo">

                    </div>
                        
                    
                </div>
            </div>
        </ul>
        </div>
    </div>
</template>

<script>


export default({
            name:'Weather',
            data() {
                return {
                weather: null
                }
            },
            created: function(){
                fetch("http://localhost:3000/weather/gdansk", {
                method: 'get',
                headers: {
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxYmFlZWZhNjAxMzBiZjljZGMyNzQiLCJpYXQiOjE2MTkxNjU4OTR9.fEGJybX62agSG83lFqTNSkc7tm_W0bqXScSge6P5mR8'
                    }
                })
                .then(response => response.json())
                .then(weather => this.weather = weather);
            }
        });



</script>


<style scoped>
    .newElement{
        font-size: 17px;
        width: 460px;
        margin-top: 20px;
        margin-right: 35px;
        border-radius: 49px;
         background: rgba(235, 235, 235, 0.4);
    }

    .photo{
        width: 130px;
        height: 130px;
        padding: 20px;
        margin-bottom: 50px;
        position: absolute;
        margin-right: 150px;
        border-radius: 49px;
         background: rgba(235, 235, 235, 0.4);
    }
</style>
