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
                        title: 'Rase',
                        actions: require('./../../../Menus/Portlets/GridActions')({
                            insert: true,
                            filter: false,
                            'delete-all': false,
                            download: false,
                            upload: false,
                            refresh: true
                        }),
                        datafetch: {
                            endpoint: 'system/breeds/get-records',
                            searchable: {
                                fields: ['breeds.breed', 'breeds.code'],
                                value: null,
                            }
                        },
                        datatable: require('./datatable'),
                    },
                    form: {
                        title: 'Rase. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                        layout: require('./../../../Menus/FormActions/FormActions')({
                            insert: 'system/breeds/actions/insert',
                            update: 'system/breeds/actions/update',
                            delete: 'system/breeds/actions/delete',
                        }),
                        component: 'breed-controls',
                    },
                    filter: {
                        title: 'Rase. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-breeds',
    }
</script>
