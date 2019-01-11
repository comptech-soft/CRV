<template>
    <td
        class="m-datatable__cell table-cell"
        :style="cellStyle"
    >
        <component
            :is="'cell-' + column.component"
            :control="column"
            :record="record"
            :current_page="current_page"
            :per_page="per_page"
            :row="row"
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
            }
            
        },

        methods: {
            onRecordActionClick(event) {
                this.$emit('record-action-click', {
                    event,
                    record: this.record,
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    td.table-cell {
        padding: 3px 5px !important;
        font-size: 12px !important;
        border-left:1px solid #ebedf2;
        border-right:1px solid #ebedf2;
        border-bottom:1px solid #ebedf2;
        border-collapse: collapse;
    }
</style>
