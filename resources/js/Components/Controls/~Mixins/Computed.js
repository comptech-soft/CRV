module.exports = {

    computed: {

        input_class() {
            let r = _.extend({}, this.i_class)
            r['is-invalid'] = this.has_error
            return r
        },

        input_style() {
            let r = _.extend({}, this.i_style)
            if(this.icon) 
            {
                r['padding-left'] = '40px'
            }
            return r
        },

        has_error() {
            return (! this.show_error || (this.errors == null)) 
                ? false 
                : this.errors.has(this.field)
        },

        error_to_string() {
            return (! this.has_error) ? '' : this.errors.collect(this.field).toString() 
        }
        
    }
}