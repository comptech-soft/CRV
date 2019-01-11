<template>
    <div v-if="ready">
        <div class="row">

            <div class="col-12 col-sm-4">
                <text-box
					id="breed-code"
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
					id="breed-breed"
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
        props: {
            errors: {required: true, default: null},
            action: {required: true, default: null},
            old: {required: true, default: null},
        },

        data() {
            return {
                ready: false,
                timeout: null,
                record: {
                    id: null,
                    breed: null,
                    code: null,
                }
            }
        },

        computed: {
            is_disabled() {
                return this.action === 'delete'
            }
        },

        watch: {
            'record': {
                handler: function(newRecord, oldRecord) {
                    if(this.timeout)
                    {
                        clearTimeout(this.timeout)
                    }
                    this.timeout = setTimeout( () => {
                        this.$emit('current-record', this.record)
                    }, 200)
                },
                deep: true
            }
        },

        methods: {

            getRecord() {
                _.each(this.record, (value, field) => {
                    if( this.old.hasOwnProperty(field) )
                    {
                        this.record[field] = this.old[field]
                    }
                })
            },

            init() {
                if( ! (this.old === null ) )
                {
                    this.getRecord()
                }
                this.ready = true
                this.$emit('current-record', this.record)
            }
        },

        mounted() {
            this.ready = false
            let i = setInterval( () => {
                if( ! (this.action === null) )
                {
                    clearInterval(i)
                    this.init()
                }
            }, 50)
        }
    }
</script>