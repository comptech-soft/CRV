<template>
    <div v-if="ready">
        <portlet
            :id="id + '-form'"
            v-if="form.visible"
            :caption="{
                title: portlets.form.title
            }"
            :actions="form.actions"
            @form-action="onClickAction"
        >
        </portlet>

        <portlet
            :id="id + '-filter'"
            v-if="filter.visible"
            :caption="{
                title: portlets.filter.title
            }"
            :actions="filter.actions"
            @filter-action="onClickAction"
        >
        </portlet>

        <portlet
            :id="id + '-grid'"
            v-if="grid.visible"
            :caption="{
                title: portlets.grid.title
            }"
            :actions="grid.actions"
            @grid-action="onClickAction"
        >
            <grid
                :id="'datatable-' + id"
                :datatable="portlets.grid.datatable"
                :df="df"
                :records="records"
            >
            </grid>
        </portlet> 
    </div>
</template>

<script>
    export default {

        props: {
            id: {type: String, required: true},
            portlets: {type: Object, required: true}
        },

        data() {
            return {
                ready: false,

                grid: {
                    visible: true,
                    actions: null,
                },

                form: {
                    visible: false,
                    actions: null,
                },

                filter: {
                    visible: false,
                    actions: null,
                },

                /** Data Fetch */
                df: null,
                records: [],
            }
        },

        methods: {
            onClickAction(option) {
                option.onClick(this)
            }
        },

        mounted() {
            this.grid.actions = this.portlets.grid.actions(this)
            this.form.actions = this.portlets.form.actions(this)
            this.filter.actions = this.portlets.filter.actions(this)

            this.df = new ComptechApp.DataFetch(this, this.portlets.grid.datafetch)
            this.df.current_order = this.portlets.grid.datatable.default_order
            this.df.populate()

            this.ready = true
        },
        
        name: 'page-grid-form-filter'
    }
</script>
