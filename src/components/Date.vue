<template>
<h2 style="margin-top: 20px;">13:30 </h2>
<h3 style="margin-top: 20px;"> 13 Czerwca 2021</h3>
    <ul id="list-rendering">
            <li v-for="item in notes" v-bind:key="item" class="weather">
                <div class="card-body weather">
                <h5 class="card-title text-center">{{item.name}}</h5>
                <p class="card-text">{{item.text}}</p>
                <p class="card-text">{{item.date}}</p>
                </div>
            
         </li>
    </ul>
</template>

<script>


export default({
            name:'Notes',
            data() {
                return {
                notes: null
                }
            },
            created: function(){
                fetch('http://localhost:3000/admin/invitations')
                .then(response => response.json())
                .then(notes => this.notes = notes);
            }
        });



</script>


<style scoped>
    .weather{
        font-size: 15px;
    }
</style>
