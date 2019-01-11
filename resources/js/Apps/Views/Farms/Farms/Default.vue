<template>
    <grid-form-filter
        id="farms"
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
                        title: 'Ferme',
                        actions: require('./../../../Menus/Portlets/GridActions')({
                            insert: true,
                            filter: false,
                            'delete-all': false,
                            download: false,
                            upload: false,
                            refresh: true
                        }),
                        datafetch: {
                            endpoint: 'system/farms/get-records',
                            searchable: {
                                fields: ['farms.farm'],
                                value: null,
                            }
                        },
                        datatable: require('./datatable'),
                    },
                    form: {
                        title: 'Ferme. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                        layout: require('./../../../Menus/FormActions/FormActions')({
                            insert: 'system/breeds/actions/insert',
                            update: 'system/breeds/actions/update',
                            delete: 'system/breeds/actions/delete',
                        }),
                        component: 'farm-controls',
                    },
                    filter: {
                        title: 'Ferme. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-farms',
    }
</script>
