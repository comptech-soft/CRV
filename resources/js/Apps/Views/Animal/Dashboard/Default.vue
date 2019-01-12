<template>
    <div v-if="ready">
        {{$brand.record}}
    </div>
</template>

<script>

    import {mapActions} from 'vuex'

    export default {
        
        data() {

            return {
                ready: false,
            }
        },

        methods: {
            ...mapActions([
                'setBrandMenu'
            ]),
        },

        mounted() {
            this.ready = false
            axios.request({
                method: 'post', 
                url: 'animals/animals/get-records', 
                data: {
                    conditions: {
                        id: {
                            where: 'animals.id=[value]',
                            value: this.$route.params.id
                        }
                    }
                },
            })
            .then( r => {
                this.ready = true
                this.setBrandMenu({
                    record: r.data.data[0],
                    type: 'animal',
                });
            })
            .catch( error => {
                console.log('ERROR.Store Mounted()')
                console.log(error)
            })
        },

        destroyed() {
            this.setBrandMenu({type: null});
        },
        
        name: 'content-farm-dashboard',

        
    }
</script>
