<template>
    <th
        class="m-datatable__cell table-header-cell"
        :style="cellStyle"
    >
        <div>
            {{column.caption}}
        </div>

        <div v-if="has_orderable">
            <span :class="{current: is_current_order('asc')}">
                <i :class="icon_asc" @click="onClickOrderBy(id, 'asc')"></i>
            </span>
            <span :class="{current: is_current_order('desc') }">
                <i :class="icon_desc" @click="onClickOrderBy(id, 'desc')"></i>
            </span>
        </div>
    </th>
</template>

<script>
    export default {
        props: {
            column: {required: true},
            index: {required: true},
            id: {required: true},
            current_order: {required: true},
            icon_asc: {type: String, default: 'la la-sort-amount-asc'},
            icon_desc: {type: String, default: 'la la-sort-amount-desc'}
        },

        computed: {


            has_orderable() {
                return (this.column.orderable != null) 
                    && (this.column.orderable.fields.length > 0) 
                    && (this.column.orderable.direction != null)
            },

            cellStyle() {
                let r = {}
                r['width'] = this.column.width + '%'
                r['vertical-align'] = 'middle'
                return r
            }
            
        },

        methods: {
            is_current_order(direction) {
                return (this.id == this.current_order.key) && (direction == this.current_order.direction)
            },

            onClickOrderBy(key, direction) {
                this.$emit('order_by', {key, direction, fields: this.column.orderable.fields})
            }
        }
    }
</script>

<style lang="scss" scoped>
    th.table-header-cell {
        
        padding: 3px 5px !important;
        font-size: 12px !important;
        border:1px solid #bdc3d4;
        border-collapse: collapse;

        span.current {
            color: #535be2 !important;
            font-weight: bold;
            
        }
        span {
            cursor:pointer;
        }
    }
</style>
