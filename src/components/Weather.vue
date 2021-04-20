<template>
    <div>
    <ul id="list-rendering">
            <li v-for="item in competencies" v-bind:key="item">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title text-center">{{item.Name}}</h5>
                <img class="card-img-top" v-bind:src="'/assets/' + item.Picture" alt="Card image cap">
                <p class="card-text"><b>Poziom: </b> {{item.Level}}</p>
                <p class="card-text"><b>Opis: </b> {{item.Description}}</p>
                </div>
            </div>
         </li>
    </ul>
    </div>
</template>

<script>


export default({
            name:'Weather',
            data() {
                return {
                competencies: null
                }
            },
            created: function(){
                fetch('https://competenciesdevelopmentfs.azurewebsites.net/api/Competencies/list')
                .then(response => response.json())
                .then(competencies => this.competencies = competencies);
            }
        });

    // export default{
    //     name: 'Weather',
    //     props: {
    //         city: {
    //             type: String,
    //             default: 'Gdańsk'
    //         },
    //         description: {
    //             type: String,
    //             default: 'Sunny'
    //         }
    //     },
    //     components: {
            
    //     }
    // }

</script>


<style scoped>
    .weather{
        background: rgba(250,250,250,0.5)
    }
</style>
