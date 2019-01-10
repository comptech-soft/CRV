const computed = {

    $app() {
        let user = this.$store.getters.user, role = this.$store.getters.role
        return {
            url: this.$store.getters.url,
            mounted: this.$store.getters.mounted,
            user,
            role,
            config:  this.$store.getters.config,
        }
    },

    $brand() {
        return this.$store.getters.brand
    },

    $quick_actions() {
        return this.$store.getters.quick_actions
    },

    $horizontal_menu() {
        return this.$store.getters.horizontal_menu
    },

    $footer() {
        return this.$store.getters.footer
    },

    $datetime() {
        return ComptechApp.Datetime
    },
    
}

const methods = {
    menuOptionVisible(option) {
        if(option.visible === null)
        {
            return true;
        }
        if( _.isFunction(option.visible) )
        {
            return option.visible(this)
        }
        return option.visible;
    },

    menuOptionEnabled(option) {
        if(option.enabled === null)
        {
            return true;
        }
        if( _.isFunction(option.enabled) )
        {
            return option.enabled(this)
        }
        return option.enabled;
    },

    menuOptionClick(option) {
        if( option.enabled === false)
        {
            return null
        }
        try
        {
            switch(option.clicktype)
            {
                case 'nothing':
                    break
                case 'click': 
                    if( _.isFunction(option.onClick) )
                    {
                        option.onClick(this)
                    }
                    break
                case 'event':
                    this.$emit(option.event, option)
                    break
                case 'both': 
                    if( _.isFunction(option.onClick) )
                    {
                        option.onClick(this)
                    }
                    this.$emit(option.event, option)
            }
        }
        catch(error)
        {
            console.log(error)
        }
    },

    menuOptionHasSubmenu(option) {
        return ! _.isEmpty(option.options)
    }
}

module.exports = {computed, methods}