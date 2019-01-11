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
                        actions: require('./../../../Menus/Portlets/GridActions')({
                            insert: true,
                            filter: false,
                            'delete-all': false,
                            download: false,
                            upload: false,
                            refresh: true
                        }),
                        datafetch: {
                            endpoint: 'system/countries/get-records',
                            searchable: {
                                fields: ['geo_countries.name', 'geo_countries.code'],
                                value: null,
                            }
                        },
                        datatable: require('./datatable'),
                    },
                    form: {
                        title: 'Țări. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                        layout: require('./../../../Menus/FormActions/FormActions')({
                            insert: 'system/countries/actions/insert',
                            update: 'system/countries/actions/update',
                            delete: 'system/countries/actions/delete',
                        }),
                        component: 'country-controls',
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