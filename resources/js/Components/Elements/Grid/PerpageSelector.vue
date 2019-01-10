<template>
    <div class="dataTables_length" :id="id + '_length'">
        <select 
            :id="id + 'per-pege-select'" 
            class="custom-select form-control"
            v-model="selected"
            @change="onChange"
        >
            <option 
                v-for="option in options" 
                :key="'per-page-option-' + option"
                :value="option"
            >
                {{ option }}
            </option>
        </select> 
    </div>
</template>

<script>
    export default {
        props: {
            id: {type: String, default: 'dataTables'},
            options: {type: Array, default: () => []},
            value: {default: 10}
        },

        data() {
            return {
                selected: 10,
            }
        },

        watch: {
            'value': function(newValue, oldValue) {
                if(this.selected != newValue)
                {
                    this.selected = newValue
                }
            }
        },
        
        methods: {
            onChange(e) {
                this.$emit('per_page_selected', this.selected)
            }
        },

        mounted() {
            let t = setTimeout( () => {
                this.selected = this.value
            }, 100)
        }
    }
</script>

<style lang="scss" scoped>
    
</style>
