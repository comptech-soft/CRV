const actions = {
    insert: {
        header: {
            caption: 'Adăugare',
            title: 'Adăugare',
            icon: 'la la-plus'
        },
    
        button: {
            caption: 'Salvează',
            title: 'Salvează',
            icon: 'la la-save',
            color: 'btn-primary',
        }
    },

    update: {
        header: {
            caption: 'Modificare',
            title: 'Modificare',
            icon: 'la la-pencil'
        },
    
        button: {
            caption: 'Salvează',
            title: 'Salvează',
            icon: 'la la-save',
            color: 'btn-primary',
        }
    },

    delete: {
        header: {
            caption: 'Ștergere',
            title: 'Ștergere',
            icon: 'la la-trash'
        },
    
        button: {
            caption: 'Șterge',
            title: 'Șterge',
            icon: 'la la-trash',
            color: 'btn-danger',
        }
    }

}

module.exports = (endpoints) => {

    return {
        insert: ComptechApp.CreateAction('insert', endpoints.insert, actions.insert.header, actions.insert.button),
        update: ComptechApp.CreateAction('update', endpoints.update, actions.update.header, actions.update.button),
        delete: ComptechApp.CreateAction('delete', endpoints.delete, actions.delete.header, actions.delete.button),
    }
}