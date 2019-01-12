<template>
    <tbody>
        <table-row
            v-for="(record, row) in records"
            :key="'table-row-' + row"
            :record="record"
            :columns="columns"
            :row="row"
            :current_page="current_page"
            :per_page="per_page"
            @record-action-click="onRecordActionClick"
        >
        </table-row>
    </tbody>
</template>

<script>
    export default {
        props: {
            columns: {required: true},
            records: {type: Array, default: () => []},
            current_page: {},
            per_page: {},
        },

         methods: {
            onRecordActionClick(event) {
                this.$emit('record-action-click', event)
            }
        },
    }
</script>