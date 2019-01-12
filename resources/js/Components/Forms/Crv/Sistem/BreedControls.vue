<template>
    <div v-if="ready">
        <div class="row">

            <div class="col-12 col-sm-4">
                <text-box
					id="breeds-code"
					field="code"
					placeholder="Cod"
                    label="Cod rasă"
					:disabled="is_disabled"
                    maxlength="16"
					v-model="record.code"
					:errors="errors"
				>
				</text-box>
            </div>

            <div class="col-12 col-sm-8">
                <text-box
					id="breeds-breed"
					field="breed"
					placeholder="Denumire"
                    label="Denumire rasă"
					:disabled="is_disabled"
                    maxlength="128"
					v-model="record.breed"
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
                    breed: null,
                    code: null,
                }
            }
        },

        mixins: [
            require('./../../~Mixins/Controls')
        ]
    }
</script>