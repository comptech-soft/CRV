<template>
    <td
        :class="cellClass"
        :style="cellStyle"
        @click="onRecordCellClick"
    >
        <component
            :is="'cell-' + column.component"
            :control="column"
            :record="record"
            :current_page="current_page"
            :per_page="per_page"
            :row="row"
            :html_class="column.hasOwnProperty('html_class') ? column.html_class : null"
            @record-action-click="onRecordActionClick"
        >
        </component>
    </td>
</template>

<script>
    export default {
        props: {
            column: {required: true},
            index: {required: true},
            id: {required: true},
            row: {required: true},
            record: {required: true},
            current_page: {},
            per_page: {},
        },

        computed: {
            cellStyle() {
                let r = {}
                r['width'] = this.column.width + '%'
                if( this.column.hasOwnProperty('html_style') ) 
                {
                    _.each(this.column.html_style, (value, key) => {
                        r[key] = value
                    })
                }
                return r
            },

            cellClass() {
                let r = {
                    'm-datatable__cell': true, 
                    'table-cell': true
                }
                return r
            }
            
        },

        methods: {
            onRecordActionClick(event) {
                this.$emit('record-action-click', {
                    event,
                    record: this.record,
                })
            },

            onRecordCellClick() {
                if( _.isFunction(this.column.click) )
                {
                    this.column.click(this)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    td.table-cell {
        padding: 6px 1px !important;
        font-size: 12px !important;
        border-left:1px solid #ebedf2;
        border-right:1px solid #ebedf2;
        border-bottom:1px solid #ebedf2;
        border-collapse: collapse;
        white-space: nowrap;
    }
</style>
