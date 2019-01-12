<template>
    <grid-form-filter
        id="regions"
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
                        title: 'Regiuni',
                        actions: require('./../../../Menus/Portlets/GridActions')({
                            insert: false,
                            filter: true,
                            'delete-all': false,
                            download: false,
                            upload: false,
                            refresh: true
                        }),
                        datafetch: {
                            endpoint: 'system/regions/get-records',
                            searchable: {
                                fields: ['geo_regions.name'],
                                value: null,
                            }
                        },
                        datatable: require('./datatable'),
                    },
                    form: {
                        title: 'Regiuni. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                        layout: require('./../../../Menus/FormActions/FormActions')({
                            insert: 'system/regions/actions/insert',
                            update: 'system/regions/actions/update',
                            delete: 'system/regions/actions/delete',
                        }),
                        component: 'region-controls',
                    },
                    filter: {
                        title: 'Regiuni. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-regions',
    }
</script>