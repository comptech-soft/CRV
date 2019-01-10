<template>
    <grid-form-filter
        id="breeds"
        :portlets="portlets"
    >
    </grid-form-filter>
</template>

<script>
    
    export default {
    
        computed: {
            portlets() {
                return {
                    grid: {
                        title: 'Rase de vaci',
                        actions: require('./../../../Menus/Portlets/GridActions'),
                    },
                    form: {
                        title: 'Rase de vaci. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                    },
                    filter: {
                        title: 'Rase de animale. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-breeds',
    }
</script>
