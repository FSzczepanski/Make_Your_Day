<template>
<div>
      <div>
    <ul id="list-rendering">
         <div v-for="item in articles" v-bind:key="item" >
            <div class="card-body newElement ">
             
                    <p class="card-text" >{{item.title}}</p>
                    <p class="card-text" >{{item.description}}</p>
             </div>
         </div>
    </ul>
    </div>

</div>
</template>

<script>


export default({
            name:'Articles',
            data() {
                return {
                articles: null
                }
            },
            created: function(){
                fetch("http://localhost:3000/article", {
                method: 'get',
                headers: {
                    'auth-token': localStorage.getItem('token')
                    }
                })
                .then(response => response.json())
                .then(articles => this.articles = articles.articles);
            }
        });



</script>


<style scoped>
    .newElement{
        font-size: 18px;
        
        display: flex;
        justify-content: center;
        

         background: rgba(235, 235, 235, 0.4);
    }
</style>
