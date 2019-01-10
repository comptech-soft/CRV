<template>
    <tbody class="m-datatable__body">
        <table-row
            v-for="(record, row) in records"
            :key="'table-row-' + row"
            :record="record"
            :columns="columns"
            :row="row"
            @cell-action-click="onCellActionClick"
        >
        </table-row>
    </tbody>
</template>

<script>
    export default {
        props: {
            columns: {required: true},
            records: {type: Array, default: () => []}
        },

         methods: {
            onCellActionClick(event) {
                this.$emit('cell-action-click', event)
            }
        },
    }
</script>