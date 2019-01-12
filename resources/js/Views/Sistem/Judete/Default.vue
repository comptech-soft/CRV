<template>
    <grid-form-filter
        id="judete"
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
                        title: 'Judete',
                        actions: require('./../../../Menus/Portlets/GridActions')({
                            insert: false,
                            filter: true,
                            'delete-all': false,
                            download: false,
                            upload: false,
                            refresh: true
                        }),
                        datafetch: {
                            endpoint: 'system/judete/get-records',
                            searchable: {
                                fields: ['geo_judete.name'],
                                value: null,
                            }
                        },
                        datatable: require('./datatable'),
                    },
                    form: {
                        title: 'Regiuni. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                        layout: require('./../../../Menus/FormActions/FormActions')({
                            insert: 'system/judete/actions/insert',
                            update: 'system/judete/actions/update',
                            delete: 'system/judete/actions/delete',
                        }),
                        component: 'judet-controls',
                    },
                    filter: {
                        title: 'Judete. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-judete',
    }
</script>