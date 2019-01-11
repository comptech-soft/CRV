<template>
    <grid-form-filter
        id="localities"
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
                        title: 'Localități',
                        actions: require('./../../../Menus/Portlets/GridActions')({
                            insert: false,
                            filter: true,
                            'delete-all': false,
                            download: false,
                            upload: false,
                            refresh: true
                        }),
                        datafetch: {
                            endpoint: 'system/localities/get-records',
                            searchable: {
                                fields: ['geo_localities.name'],
                                value: null,
                            }
                        },
                        datatable: require('./datatable'),
                    },
                    form: {
                        title: 'Regiuni. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                        layout: require('./../../../Menus/FormActions/FormActions')({
                            insert: 'system/localities/actions/insert',
                            update: 'system/localities/actions/update',
                            delete: 'system/localities/actions/delete',
                        }),
                        component: 'locality-controls',
                    },
                    filter: {
                        title: 'Localitati. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-localities',
    }
</script>