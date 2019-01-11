class FormAction {

    constructor(name) {
        this.name = name
        this.endpoint = null
        this.header = {
            title: null,
            caption: null,
            icon: null
        }
        this.button = {
            caption: null,
            icon: null,
            title: null,
            color: null,
        }
    }

    Endpoint(endpoint) {
        this.endpoint = endpoint
        return this
    }

    HeaderCaption(caption) {
        this.header.caption = caption
        return this
    }

    HeaderTitle(title) {
        this.header.title = title
        return this
    }

    HeaderIcon(icon) {
        this.header.icon = icon
        return this
    }

    ButtonCaption(caption) {
        this.button.caption = caption
        return this
    }

    ButtonTitle(title) {
        this.button.title = title
        return this
    }

    ButtonIcon(icon) {
        this.button.icon = icon
        return this
    }

    ButtonColor(color) {
        this.button.color = color
        return this
    }

}

module.exports = FormAction