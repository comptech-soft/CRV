<template>
    <div>
        <!-- Search Form -->
        <div class="m-form m-form--label-align-right m--margin-bottom-10">
            <div class="form-group m-form__group row align-items-center" style="margin-bottom:0px; padding-bottom:0px;">
                <div class="col-md-4">
                    <div class="m-input-icon m-input-icon--left" style="margin-top:0px; margin-bottom:0px; max-width: 160px">
                        <div v-if="total_columns_width != 100" style="background-color: red; color: #fff">
                            {{ total_columns_width }} | {{ 100 - total_columns_width }}
                        </div>
                        <input 
                            type="text" 
                            class="form-control m-input" 
                            placeholder="Search..." 
                            :id="'general-search-' + id"
                            v-model="searched"
                            @input="onGeneralSearch"
                        >
                        <span class="m-input-icon__icon m-input-icon__icon--left">
                            <span>
                                <i class="la la-search"></i>
                            </span>
                        </span>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="m-input-icon m-input-icon--left" style="margin-top:0px; margin-bottom:0px;">
                        <grid-info
                            :current_page="df.current_page"
                            :from="df.from"
                            :to="df.to"
                            :total="df.total"
                            :loading="df.loading"
                        >
                        </grid-info>
                    </div>
                </div>
            </div>
            <div v-if="df.total > 0" class="row">
                <div class="col col-sm-3">
                    <div style="margin-top: 4px; max-width: 160px">
                        <perpage-selector
                            :id="'perpage-selector-top-' + id"
                            :options="datatable.per_page_options"
                            :value="df.per_page"
                            @per_page_selected="onPerPageSelected"
                        >
                        </perpage-selector>
                    </div>
                </div>
                <div class="col col-sm-9">
                    <div class="m_datatable m-datatable m-datatable--default m-datatable--brand m-datatable--subtable m-datatable--loaded">
                        <div class="m-datatable__pager" style="text-align:right; margin-top:6px;">
                            <pagination
                                :id="'pagination-top-' + id"
                                :current_page="df.current_page"
                                :last_page="df.last_page"
                                @change-page="onChangePage"
                            >
                            </pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Datatable -->
		<div 
            class="table-responsive" 
            style=""
            v-if="df.total > 0"
        >
            <table 
                class="table table-bordered table-sm m-table m-table--head-bg-brand cs-table" 
            >

                <table-header
                    :columns="datatable.columns"
                    :current_order="df.current_order"
                    @order_by="onOrderBy"
                >
                </table-header>
                
                <table-body
                    :columns="datatable.columns"
                    :records="records"
                    :current_page="df.current_page"
                    :per_page="df.per_page"
                    @record-action-click="onRecordActionClick"
                >
                </table-body>

            </table>

            <div class="row">
                <div class="col-md-4">
                    <div style="width:160px">
                        <perpage-selector
                            :id="'perpage-selector-bottom-' + id"
                            :options="datatable.per_page_options"
                            :value="df.per_page"
                            @per_page_selected="onPerPageSelected"
                        >
                        </perpage-selector>
                    </div>
                </div>

                <div class="m_datatable m-datatable m-datatable--default m-datatable--brand m-datatable--subtable m-datatable--loaded col-md-8">
                    <div class="m-datatable__pager" style="text-align:right; margin-top:6px;">
                        <pagination
                            :id="'pagination-bottom-' + id"
                            :current_page="df.current_page"
                            :last_page="df.last_page"
                            @change-page="onChangePage"
                        >
                        </pagination>
                    </div>
                </div>>
            </div>
		</div>
    </div>
</template>

<script>
    export default {
        
        props: {
            id: {type: String, required: true},
            datatable: {type: Object, required: true},
            df: {type: Object, required: true},
            records: {type: Array, required: true},
        },

        data() {
            return {
                searched: null,
                timeout: null,
            }
        },

        computed: {

            total_columns_width() {
                let r = 0;
                _.each(this.datatable.columns, (column, key) => {
                    r += column.width
                })
                return r
            }
        },

        methods: {
            onOrderBy(order) {
                this.df.onOrderBy(order)
            },

            onGeneralSearch() {
                if( this.timeout )
                {
                    clearTimeout(this.timeout)
                }
                this.timeout = setTimeout( () => {
                    this.df.onQuickSearch(this.searched)
                }, 200)
            },

            onChangePage(page) {
                this.df.onChangePage(page)
            },

            onPerPageSelected(per_page) {
                this.df.onPerPageSelected(per_page)
            },

            onRecordActionClick(event) {
                this.$emit('record-action-click', event)
            }
        },

        mounted() {
        }
    }
</script>
