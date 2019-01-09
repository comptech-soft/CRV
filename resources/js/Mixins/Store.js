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

    $datetime() {
        return ComptechApp.Datetime
    },

    $footer() {
        return this.$store.getters.footer
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
        console.log(option.clicktype)
        try
        {
            switch(option.clicktype)
            {
                case 'nothing':
                    break
                case 'click': 
                    option.onClick(this)
                    break
                case 'event':
                    this.$emit(option.event, option)
                    break
                case 'both': 
                    option.onClick(this)
                    this.$emit(option.event, option)
            }
        }
        catch(error)
        {
            console.log(error)
        }
    }
}

module.exports = {computed, methods}