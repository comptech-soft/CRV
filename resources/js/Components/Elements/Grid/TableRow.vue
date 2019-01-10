<template>
    <tr class="m-datatable__row">
        <data-cell
            v-for="(column, key, index) in columns"
            :key="'data-cell-' + key"
            :column="column"
            :id="key"
            :index="index"
            :row="row"
            :record="record"
            @cell-action-click="onCellActionClick"
        >     
        </data-cell>
    </tr>
</template>

<script>
    export default {
        props: {
            columns: {required: true},
            row: {required: true},
            record: {required: true}
        },

        methods: {
            onCellActionClick(event) {
                this.$emit('cell-action-click', event)
            }
        },
        
    }
</script>
