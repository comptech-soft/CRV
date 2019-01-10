<template>
    <grid-form-filter
        id="countries"
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
                        title: 'Țări',
                        actions: require('./../../../Menus/Portlets/GridActions'),
                    },
                    form: {
                        title: 'Țări. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                    },
                    filter: {
                        title: 'Țări. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-countries',
    }
</script>