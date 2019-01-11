<template>
    <span v-if="has_actions" style="overflow: visible; position: relative;">
        <div class="dropdown">
            <a 
                :id="'btn-' + record.id" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false" 
                class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill">
                <i class="la la-ellipsis-v"></i>
            </a>
            <div 
                :aria-labelledby="'btn-' + record.id" 
                class="dropdown-menu dropdown-menu-right" 
                x-placement="bottom-end" 
                style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(26px, 19px, 0px);"
            >
                <a 
                    href="#" 
                    class="dropdown-item"
                    v-for="(action, key) in actions"
                    :key="'cell-action-' + key + '-' + record.id"
                    @click.prevent="menuOptionClick(action)"
                >
                    <span :class="action.html_class"><i :class="action.icon"></i></span>
                    <span :class="action.html_class">{{ action.caption(record) }}</span>
                </a>
            </div>
        </div>
    </span>    
</template>

<script>
    export default {
        props: {
            control: {required: true},
            record: {required: true},
        },

        computed: {
            actions() {
                return this.control.actions.options
            },

            has_actions() {
                return _.keys(this.actions).length > 0
            },
        },
        
        methods: {
        }
    }
</script>