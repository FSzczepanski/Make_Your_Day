<template>
    <ul id="list-rendering">
            <li v-for="item in notes" v-bind:key="item" class="weather">
            <div class="card" style="width: 18rem; " >
                <div class="card-body weather">
                <h5 class="card-title text-center">{{item.name}}</h5>
                <p class="card-text">{{item.text}}</p>
                <p class="card-text">{{item.date}}</p>
                </div>
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
        background: rgba(250,250,250,1);
    }
</style>
