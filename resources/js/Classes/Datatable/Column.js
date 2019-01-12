class Column {

    constructor(name) {
        this.name = name
        
        /** Header */
        this.width = null,
        this.caption = null
        this.orderable = {fields: [], direction: null}
       
        /** Data */
        this.type = 'field'
        this.component = 'text'
        this.source = null
        this.html_style = null
        this.html_class = null
        this.actions = null
        this.click = null
    }

    Width(width) {
        this.width = width
        return this
    }

    Caption(caption) {
        this.caption = caption
        return this
    }

    OrderByFields(fields) {
        this.orderable.fields = fields
        return this
    }

    OrderByDirection(direction) {
        this.orderable.direction = direction
        return this
    }

    Source(source) {
        this.source = source
        return this
    }

    HtmlStyle(style) {
        this.html_style = style
        return this
    }

    HtmlClass(style) {
        this.html_class = style
        return this
    }

    Component(component) {
        this.component = component
        return this
    }

    Type(type) {
        this.type = type
        return this
    }

    Actions(actions) {
        this.actions = actions
        return this
    }

    onClick(click) {
        this.click = click
        return this
    }

}

module.exports = Column