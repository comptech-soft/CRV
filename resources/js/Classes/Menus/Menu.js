class Menu {

    constructor(name = null, vue = null) {

        /** Numele meniului */
        this.name = name

        /** Componenta vue */
        this.vue = vue

        /** Textul afisat */
        this.caption = null

        /** Tooltip */
        this.title = null

        /** Icon */
        this.icon = null

        /** Visibilitate */
        this.visible = null

        /** Activ sau nu */
        this.enabled = null

        /**
         * clicktype: string
         * Ce se intampla cand se face click pe optiune
         *     nothing: nimic
         *     click : se apeleaza functia onClick
         *     event : se emite evenimentul emmitedevent
         *     both : se apeleaza functia onClick si se emite evenimentul emmitedevent
         */
        this.clicktype = 'nothing'

        /** onClick: function */
        this.onClick = null

        /** event: string */
        this.event = 'click'

        /** Clasa Html */
        this.html_class = null

        /** Style-ul Html */
        this.html_style = null

        /** Suboptiunile: recursiv */
        this.options = {}
    }

    /**
     * Adauga o optiune
     * Optiunea poate fi 
     *     - un obiect de tip <Menu>
     *     - o functie care returneaza un obiect de tip <Menu>
     */
    AddOption(key, option){
        let opt = _.isFunction(option) ? option() : option
        if(! (opt instanceof Menu) )
        {
            throw 'Menu::AddOption. [' + opt.toString() + '] is not a menu object'
        }
        this.options[key] = opt
        return this
    }

    Caption(caption) {
        this.caption = caption 
        return this
    }

    Title(title) {
        this.title = title 
        return this
    }

    Icon(icon) {
        this.icon = icon 
        return this
    }

    Visible(visible) {
        this.visible = visible
        return this
    }

    Enabled(enabled) {
        this.enabled = enabled
        return this
    }

    ClickType(type) {
        this.clicktype = type
        return this
    }

    OnClick(click) {
        this.onClick = click
        return this
    }

    Event(event) {
        this.event = event
        return this
    }

    HtmlClass(html_class) {
        this.html_class = html_class
        return this
    }

    HtmlStyle(html_style) {
        this.html_class = html_style
        return this
    }

}

module.exports = Menu