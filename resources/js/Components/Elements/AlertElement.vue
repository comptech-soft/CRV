<template>
    <div 
        :class="alert_class" 
        role="alert"
    >
        <div v-if="icon" class="m-alert__icon">
            <i :class="icon"></i>
        </div>
        
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

        <div class="m-alert__text" v-html="message">
        </div>
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
                r['m-alert--icon'] = this.icon
                return r
            }
        },
        
        name: 'alert-element'
    }
</script>
