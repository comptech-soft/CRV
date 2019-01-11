<template>
    <div v-if="ready">
        <div class="row">

            <div class="col-12">
                <text-box
					id="colors-color"
					field="color"
					placeholder="Denumire"
                    label="Denumire culoare"
					:disabled="is_disabled"
                    maxlength="128"
					v-model="record.color"
					:errors="errors"
				>
				</text-box>
            </div>

        </div>
    </div>
</template>

<script>
     export default {

        data() {
            return {
                record: {
                    id: null,
                    color: null,
                }
            }
        },

        mixins: [
            require('./../~Mixins/Controls')
        ]

    }
</script>