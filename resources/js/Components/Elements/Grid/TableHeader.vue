<template>
    <thead class="m-datatable__head">
        <tr class="m-datatable__row">
            <header-cell
                v-for="(column, key, index) in columns"
                :key="'header-cell-' + key"
                :column="column"
                :id="key"
                :index="index"
                :current_order="current_order"
                @order_by="onOrderBy"
            >     
            </header-cell>
        </tr>
    </thead>
</template>

<script>
    export default {
        props: {
            columns: {required: true},
            current_order: {required: true},
        },

        methods: {
            onOrderBy(order) {
                this.$emit('order_by', order)
            }
        },

        
    }
</script>
