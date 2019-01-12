<template>
    <grid-form-filter
        id="sires"
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
                        title: 'Lista generală de tauri',
                        actions: require('./../../../Menus/Portlets/GridActions')({
                            insert: true,
                            filter: false,
                            'delete-all': false,
                            download: false,
                            upload: false,
                            refresh: true
                        }),
                        datafetch: {
                            endpoint: 'animals/sires/get-records',
                            searchable: {
                                fields: ['animals.interbull_code'],
                                value: null,
                            }
                        },
                        datatable: require('./datatable'),
                    },
                    form: {
                        title: 'Ferme. Formular',
                        actions: require('./../../../Menus/Portlets/FormActions'),
                        layout: require('./../../../Menus/FormActions/FormActions')({
                            insert: 'animals/sires/actions/insert',
                            update: 'animals/sires/actions/update',
                            delete: 'animals/sires/actions/delete',
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
    
        name: 'content-sires',
    }
</script>
