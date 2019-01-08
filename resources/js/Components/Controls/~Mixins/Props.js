module.exports = {
    props: {

        type: {type: String, default: 'text'},
        id: {type: String, required: true},
        placeholder: {type: String, required: ''},
        label: {type: String, default: ''},
        disabled: {type: Boolean, default: false},
        readonly: {type: Boolean, default: false},
        required: {type: Boolean, default: false},
        icon: {type: String, default: ''}, 
        
        value: {},

        /**
         * Style props
         */
        c_class: {default: () => {
            return {
                'form-group': true
            }
        }},
        i_class: {default: () => {
            return {
                'form-control': true
            }
        }},
        c_style: {default: () => null},

        /**
         * Errors management props
         */
        field: {type: String, required: true},
        errors: {default: null},
        show_error: {type: Boolean, default: true},

    }
}