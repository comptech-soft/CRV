<template>
    <div v-if="ready">
        <portlet
            :id="id + '-form'"
            v-if="form.visible"
            :caption="{
                title: form_layout.caption
            }"
            :has_footer="true"
            :actions="form.actions"
            @form-action="onClickAction"
        >
            <form-element
                :f_class="{
                    'm-form': true,
                }"
                :result="fm ? fm.result : null"
                @close="fm.result = null"
            >
                <template slot="form-controls">
                    <alert-element 
                        v-if="form.action === 'delete'"
                        message="Sunteți sigur că doriți ștergerea înregistrării?"
                        :a_class="{
                            'alert-danger' : true, 
                            'm-alert': true, 
                            'm-alert--air': true
                        }"
                        :closable="false"
                        icon="la la-question"
                    >
                    </alert-element>
                    <component 
                        :is="form.component"
                        :action="form.action"
                        :old="form.record"
                        :errors="fm ? fm.getErrors() : null"
                        @current-record="getCurrentRecord"
                    >
                    </component>
                </template>
            </form-element>

            <template slot="portlet-footer">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <button type="button" :class="'btn ' + form_layout.btn_color" @click="onSubmit">
                            <i :class="form_layout.btn_icon"></i>
                            {{ form_layout.btn_caption }}
                            <i v-if="fm && fm.processing" class="fa fa-spinner fa-spin"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" @click="onCancelForm">
                            <i class="la la-times"></i>
                            Renunță
                        </button>
                    </div>
				</div>
            </template>
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
                @record-action-click="onRecordActionClick"
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

                /** Inregistrarea editata */
                record: null,

                grid: {
                    visible: true,
                    actions: null,
                },

                form: {
                    visible: false,
                    actions: null,
                    layout: null,
                    action: null,
                    /** Inregistrarea originala */
                    record: null,
                    /** componenta "controls" */
                    component: null,
                },

                /** Form manager */
                fm: null,

                filter: {
                    visible: false,
                    actions: null,
                },

                /** Data Fetch */
                df: null,
                records: [],
            }
        },

        computed: {
            form_layout() {
                return {
                    caption: this.portlets.grid.title + '. ' + this.form.layout[this.form.action].header.caption,
                    btn_caption: this.form.layout[this.form.action].button.caption,
                    btn_icon: this.form.layout[this.form.action].button.icon,
                    btn_color: this.form.layout[this.form.action].button.color,
                }
            }
        },

        methods: {
            /**
             * Click pe un button de pe toolbarul unui portlet
             * Actiunea este definita in button
             */
            onClickAction(option) {
                option.onClick(this)
            },

            /**
             * Click pe un action de la Actiuni specifice recordului
             */
            onRecordActionClick(event) {
                event.event.onClick(this, event.record)
            },

            /**
             * Click pe butonul Cancel de la form
             */
            onCancelForm() {
                this.form.actions.options.close.onClick(this)
            },

            /**
             * La editarea inregistrarii curente
             */
            getCurrentRecord(current) {
                this.record = current
            },

            /**
             * La click pe submit
             */
            onSubmit() {
                this.fm.setEndpoint(this.form.layout[this.form.action].endpoint).onSubmit()
            }
        },

        mounted() {
            this.grid.actions = this.portlets.grid.actions(this)
            this.form.actions = this.portlets.form.actions(this)
            this.filter.actions = this.portlets.filter.actions(this)

            /** Form */
            this.form.layout = this.portlets.form.layout
            this.form.component = this.portlets.form.component
            this.fm = new ComptechApp.FormManager(
				this, 
				null, 
				data => {
                   let i = setTimeout( () => {
                       this.onCancelForm()
                       this.df.populate() 
                   }, 1000)
                }, 
				data => {
                    console.log('Fail...')
                    console.log(data)
                }
			)

            /** Grid */
            this.df = new ComptechApp.DataFetch(this, this.portlets.grid.datafetch)
            this.df.current_order = this.portlets.grid.datatable.default_order
            this.df.populate()

            this.ready = true
        },
        
        name: 'page-grid-form-filter'
    }
</script>
