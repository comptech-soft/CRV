const computed = {

    $app() {
        let user = this.$store.getters.user
        let role = this.$store.getters.role
        // if( user && user.hasOwnProperty('my_roles') && (user.my_roles.length > 0) )
        // {
        //     role = user.my_roles[0]
        // }
        return {
            url: this.$store.getters.url,
            mounted: this.$store.getters.mounted,
            user,
            role,
            config:  this.$store.getters.config,
        }
    }

}

module.exports = {computed}