const Events = require('./../../Events/Events')

module.exports = ComptechApp.CreateMenu('actions')
    .AddOption('update', ComptechApp.CreateMenu('update', {
        caption: record => 'Editează',
        icon: 'la la-pencil',
        html_class: {
            'm--font-primary': true,
        },
        clicktype: 'event',
        event: 'record-action-click',
        onClick: Events.Record.onClickUpdate
    }))
    .AddOption('delete', ComptechApp.CreateMenu('delete', {
        caption: record => 'Șterge',
        icon: 'la la-trash',
        html_class: {
            'm--font-danger': true,
        },
        clicktype: 'event',
        event: 'record-action-click',
        onClick:  Events.Record.onClickDelete
    }))