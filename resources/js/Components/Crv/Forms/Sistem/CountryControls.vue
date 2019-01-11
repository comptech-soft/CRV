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

        <div class="row">
            <div class="col-12">
                <image-uploader
                    :label="'Iconiță pentru drapel'"
                    id="countries-icon"
                    field="icon"
                    :after_upload="{action: 'resize', width: 64, height: 64}"
                    maxsize="5"
                    maxheight="128"
                    url_field="file_url"
                    folder="countries"
                    endpoint="upload-image"
                    :extensions="['png', 'jpg', 'jpeg']"
                    :errors="errors"
                    :initial_image="action != 'insert' ? {file_url: record.icon, width: 128, height:128} : null"
                    :disabled="action == 'delete'"

                    @upload-validation-fail="onLogoValidationFail"
                    @uploading-process-end-success="onLogoUploadSuccess"
                >
                </image-uploader>
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

        methods: {
            onLogoValidationFail(e)
            {
                this.record.icon = null
                // this.record.width = null
                // this.record.height = null
            },

            onLogoUploadSuccess(e)
            {
                this.record.icon = e.file_url
                // this.record.width = e.width
                // this.record.height = e.height
            },
        },

        mixins: [
            require('./../~Mixins/Controls')
        ]
    }
</script>