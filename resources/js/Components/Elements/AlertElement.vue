<template>
    <div 
        :class="alert_class" 
        role="alert"
    >
        <span v-if="icon" class="alert-icon">
            <i :class="icon"></i>
        </span>
        
        <button 
            v-if="closable" 
            type="button" 
            class="close" 
            @click="$emit('close')"
        >
            <span aria-hidden="true">
                <i class="la la-times"></i>
            </span>
        </button>

        <strong v-if="short_caption">
            {{ short_caption}}
        </strong> 

        <span v-html="message">
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            a_class: {default: () => null},

            short_caption: {type: String, default: ''},
            message: {type: String, default: 'Here is an alert'},
            closable: {type: Boolean, default: true},
            icon: {type: String, default: ''}
        },
        
        computed: {
            alert_class() {
                let r = _.extend({}, this.a_class)
                r['alert'] = true
                r['alert-dismissible'] = this.closable
                r['alert-icon-left'] = this.icon
                return r
            }
        },
        
        name: 'alert-element'
    }
</script>
