const Menu = require('./Menu')

module.exports = (name, properties = {}, vue = null) => {

    let menu = new Menu(name, vue)
    let map = {
        caption: 'Caption', 
        title: 'Title', 
        icon: 'Icon',
        visible: 'Visible',
        enabled: 'Enabled',
        clicktype: 'ClickType',
        onClick: 'OnClick',
        event: 'Event',
        html_class: 'HtmlClass',
        html_style: 'HtmlStyle',
    }

    _.each(map, (method, property) => {
        if( properties.hasOwnProperty(property) ) 
        {
            menu[method](properties[property])
        }
    })

    return menu

}