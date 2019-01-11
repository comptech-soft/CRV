<template>
    <grid-form-filter
        id="companies"
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
                        title: 'Firme',
                        actions: require('./../../../Menus/Portlets/GridActions'),
                        datafetch: {
                            endpoint: 'system/companies/get-records',
                            searchable: {
                                fields: ['companies.name'],
                                value: null,
                            }
                        },
                        datatable: require('./datatable'),
                    },
                    form: {
                        title: 'Firme. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                    },
                    filter: {
                        title: 'Firme. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-breeds',
    }
</script>
