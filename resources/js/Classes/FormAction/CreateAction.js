/**
 * Creaza o actiune de formular din:
 *  name .......... : numele
 *  endpoint ...... : endpointul la care raspunde
 *  header ........ : headerul formularului
 *  button ........ : aspectul butonului commit
 */

const FormAction = require('./FormAction')

module.exports = CreateAction = (name, endpoint, header, button) => {
    
    let formaction = new FormAction(name)
    
    formaction
        .Endpoint(endpoint)
        
        .HeaderCaption(header.caption)
        .HeaderTitle(header.title)
        .HeaderIcon(header.icon)
        
        .ButtonCaption(button.caption)
        .ButtonTitle(button.title)
        .ButtonIcon(button.icon)
        .ButtonColor(button.color)
    
    return formaction
    
}