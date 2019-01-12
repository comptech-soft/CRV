<template>
    <tr>
        <data-cell
            v-for="(column, key, index) in columns"
            :key="'data-cell-' + key"
            :column="column"
            :id="key"
            :index="index"
            :row="row"
            :record="record"
            :current_page="current_page"
            :per_page="per_page"
            @record-action-click="onRecordActionClick"
        >     
        </data-cell>
    </tr>
</template>

<script>
    export default {
        props: {
            columns: {required: true},
            row: {required: true},
            record: {required: true},
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
