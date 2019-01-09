<template>
    <label class="m-checkbox m-checkbox--focus">
        <input 
            type="checkbox" 
            :id="id" 
            :checked="value"
            class="form-check-input"
            :style="input_style"
            @click="$emit('input', $event.target.checked)"
        />
        {{ label }}
        <span></span>
    </label>
</template>

<script>
    export default {
        mixins: [
            require('./../~Mixins/Props'),
            require('./../~Mixins/Computed'),
        ]
    }
</script>