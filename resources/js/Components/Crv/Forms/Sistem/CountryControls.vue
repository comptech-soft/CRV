<template>
    <div v-if="ready">
        <div class="row">

            <div class="col-12 col-sm-2">
                <text-box
					id="countries-code"
					field="code"
					placeholder="Cod"
                    label="Cod"
					:disabled="is_disabled"
                    maxlength="2"
					v-model="record.code"
					:errors="errors"
				>
				</text-box>
            </div>

            <div class="col-12 col-sm-10">
                <text-box
					id="countries-name"
					field="name"
					placeholder="Denumire"
                    label="Denumire"
					:disabled="is_disabled"
                    maxlength="128"
					v-model="record.name"
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
                    name: null,
                    code: null,
                    icon: null,
                }
            }
        },

        mixins: [
            require('./../~Mixins/Controls')
        ]
    }
</script>