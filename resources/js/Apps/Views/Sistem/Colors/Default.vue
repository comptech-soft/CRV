<template>
    <grid-form-filter
        id="colors"
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
                        title: 'Culori',
                        actions: require('./../../../Menus/Portlets/GridActions'),
                    },
                    form: {
                        title: 'Culori. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                    },
                    filter: {
                        title: 'Culori. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-colors',
    }
</script>