<template>
    <div class="element">
        {{city}}
        {{description}}
    </div>
</template>

<script>

    export default{
        name: 'Weather',
        props: {
            city: {
                type: String,
                default: 'Gdańsk'
            },
            description: {
                type: String,
                default: 'Sunny'
            }
        },
        components: {
            
        }
    }
</script>

<style scoped>
    .weather{
        background: rgba(250,250,250,0.5);
    }
</style>