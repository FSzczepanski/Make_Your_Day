<template>
<div>
      <div>
    <ul id="list-rendering">
         <div v-for="item in quotes" v-bind:key="item" >
            <div class="card-body newElement " style="font-size: 15px">
             
                    <p class="card-text" >{{item.text}}</p>
                    <p class="card-text" >{{item.author}}</p>
             </div>
         </div>
    </ul>
    </div>

</div>
</template>

<script>


export default({
            name:'Quotes',
            data() {
                return {
                quotes: null
                }
            },
            created: function(){
                fetch("http://localhost:3000/quote", {
                method: 'get',
                headers: {
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxYmFlZWZhNjAxMzBiZjljZGMyNzQiLCJpYXQiOjE2MTkxNjU4OTR9.fEGJybX62agSG83lFqTNSkc7tm_W0bqXScSge6P5mR8'
                    }
                })
                .then(response => response.json())
                .then(quotes => this.quotes = quotes.quotes);
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
</style>
