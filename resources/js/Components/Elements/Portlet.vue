<template>
    <div :id="id" class="m-portlet m-portlet--mobile m-portlet--body-progress-">
        <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                        {{ caption.title }}
                        <small v-if="caption.subtitle">
                            {{ caption.subtitle }}
                        </small>
                    </h3>
                </div>
            </div>

            <div v-if="actions" class="m-portlet__head-tools">
                <ul class="m-portlet__nav">
                    <li
                        v-for="item in visible_options"
                        :key="'portlet-head-actions-' + item.name"
                        class="m-portlet__nav-item"
                        data-toggle="m-tooltip"
                        :title="item.title"
                        :id="'portlet-head-actions-' + item.name"
                    >
                        <a 
                            href="#" 
                            class="m-portlet__nav-link btn btn-secondary m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill"
                            @click="onClickToolbar(item)"
                            :disabled="item.disabled"
                        >
                            <i :class="item.icon"></i>
                        </a>
                    </li>                    
                </ul>
            </div>
        </div>

        <div class="m-portlet__body">
            <slot>
            </slot>
        </div>

        <div v-if="has_footer" class="m-portlet__foot">
            <slot name="portlet-footer">
            </slot>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            id: {type: String, required: true},
            caption: {type: Object, default: () => {
                return {
                    title: 'My header title',
                    subtitle: ''
                }
            }},
            actions: {default: null},
            has_footer: {type: Boolean, default: false}
        },

        computed: {
            visible_options() {
                return _.filter(this.actions.options, action => {
                    return action.visible
                })
            }
        },

        methods: {
            onClickToolbar(item) {
                let element = $('#portlet-head-actions-' + item.name)
                element.tooltip('hide')
                this.menuOptionClick(item)
            }
        },
        
        mounted() {
            if( this.actions ) {
                let i = setInterval( () => {
                    if( $('#' + this.id + ' .m-portlet__head-tools') ) 
                    {
                        // console.log('OK...')
                        clearInterval(i);
                        mApp.initTooltips()
                    }
                }, 250)
            }
        }
    }
</script>
