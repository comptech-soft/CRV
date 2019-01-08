<template>
    <div :class="c_class">
        
        <label 
            v-if="label" 
            :for="id" 
            v-html="label"
        >
        </label>
        
        <input 
            :type="type"
            :id="id"
            :class="input_class" 
            :style="input_style"
            :placeholder="placeholder" 
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :value="value"

            @input="$emit('input', $event.target.value)"
        />

        <div v-if="icon" class="form-control-position">
            <i :class="icon"></i>
        </div>

        <div v-if="has_error" class="invalid-feedback">
            {{ error_to_string }}
        </div>

    </div>
</template>

<script>
    export default {
        mixins: [
            require('./../~Mixins/Props'),
            require('./../~Mixins/Computed'),
        ]
    }
</script>

<style lang="scss" scoped>
    .form-control.is-invalid {
        padding-right: 2.25rem;
        background-repeat: no-repeat;
        background-position: center right calc(2.25rem / 4);
        background-size: calc(2.25rem / 2) calc(2.25rem / 2);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
    }

    .form-control-position {
        top: 0 !important;
        right: initial;
        left: 12px !important;    
    }
</style>
