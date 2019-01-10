<template>
    <div v-if="loading" class="alert alert-warning" role="alert">
        <i class="la la-refresh spinner"></i>
        Se actualizează...
    </div>
    <div v-else-if="total > 0" class="alert alert-secondary" role="alert">
        Se afișează pagina {{ current_page}}. De la #{{from}} la #{{to}} din {{total}} înregistrări.
    </div>
    <div v-else class="alert alert-info" role="alert">
        <i class="la la-exclamation-circle"></i>
        {{ message }}
    </div>
</template>

<script>
    export default {
        props: {
            current_page: {default: null},
            from: {default: null},
            to: {default: null},
            total: {default: null},
            loading: {type: Boolean, default: false},
            message: {type: String, default: 'Nu sunt înregistrări.'}
        }        
    }
</script>

<style lang="scss" scoped>
    .alert {
       margin-bottom: 0px;
       text-align: right;
    }
</style>
