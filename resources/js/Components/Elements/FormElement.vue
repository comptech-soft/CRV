<template>
    <form :class="f_class" novalidate>
        
        <alert-element
            v-if="result"
            :a_class="alert_class"
            :bk_color="result.type"
            :message="result.message"
            :icon="icon"
            @close="$emit('close')"
        >
        </alert-element>

        <slot name="form-controls">
        </slot>

        <slot name="form-actions">
        </slot>
    </form>
</template>

<script>
    
    export default {
        
        props: {
            f_class: {default: () => null},
            icon_success: {type: String, default: 'la la-thumbs-o-up'},
            icon_error: {type: String, default: 'la la-thumbs-o-down'},
            result: {default: null}
        },

        computed: {
            icon() {
                return this.result.type === 'success' ? this.icon_success : this.icon_error
            },

            alert_class() {
                return this.result.type === 'success' 
                    ? {
                        'alert-success': true,
                        'bg-success': true
                    } 
                    : {
                        'alert-danger': true,
                        'bg-danger': true
                    }
            }
        },

        name: 'form-element'
    }
</script>
