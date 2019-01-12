<template>
    <div v-if="ready">

        <div class="row">

            <div class="col-12">
                <text-box
					id="companies-name"
					field="name"
					placeholder="Denumire"
                    label="Denumire companie"
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
                    :label="'Logoul firmei'"
                    id="firm-logo"
                    field="logo"
                    :after_upload="{action: 'resize', width: 128, height: 128}"
                    maxsize="5"
                    maxheight="128"
                    url_field="file_url"
                    folder="firme"
                    endpoint="upload-image"
                    :extensions="['png', 'jpg', 'jpeg']"
                    :errors="errors"
                    :initial_image="action != 'insert' ? {file_url: record.logo, width: record.width, height: record.height} : null"
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
                    logo: null,
                    width: null,
                    height: null,
                }
            }
        },

        methods: {
            onLogoValidationFail(e)
            {
                this.record.logo = null
                this.record.width = null
                this.record.height = null
            },

            onLogoUploadSuccess(e)
            {
                this.record.logo = e.file_url
                this.record.width = e.width
                this.record.height = e.height
            },
        },

        mixins: [
            require('./../../~Mixins/Controls')
        ]

    }
</script>