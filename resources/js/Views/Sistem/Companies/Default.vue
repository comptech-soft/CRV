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
                        actions: require('./../../../Menus/Portlets/GridActions')({
                            insert: true,
                            filter: false,
                            'delete-all': false,
                            download: false,
                            upload: false,
                            refresh: true
                        }),
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
                        layout: require('./../../../Menus/FormActions/FormActions')({
                            insert: 'system/companies/actions/insert',
                            update: 'system/companies/actions/update',
                            delete: 'system/companies/actions/delete',
                        }),
                        component: 'company-controls',
                    },
                    filter: {
                        title: 'Firme. Filtrare',
                        actions: require('./../../../Menus/Portlets/FilterActions'),
                    }
                }
            }
        },
    
        name: 'content-companies',
    }
</script>
