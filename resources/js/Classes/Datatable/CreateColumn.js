const Column = require('./Column')

module.exports = (name, options) => {

    let 
        column = new Column(name),
        properties = {
            width: 'Width', 
            caption: 'Caption', 
            orderby: 'OrderByFields', 
            direction: 'OrderByDirection',
            source: 'Source',
            html_style: 'HtmlStyle',
            html_class: 'HtmlClass',
            component: 'Component',
            type: 'Type',
            actions: 'Actions',
            onClick: 'onClick'
        }

    _.each(properties, (method, property) => {

        if( options.hasOwnProperty(property) ) 
        {
            column[method](options[property])
        }
    })
    
    return column

}