module.exports = {

    reccount: ComptechApp.CreateColumn('reccout', {
        width: 10,
        caption: '#', 
        type: 'reccount',
        html_style: {
            'text-align': 'right'
        }
    }),

    id: ComptechApp.CreateColumn('id', {
        width: 10,
        caption: 'ID', 
        orderby: ['colors.id'], 
        direction: 'asc', 
        source: 'id',
        html_style: {
            'text-align': 'right'
        }
    }),

    color: ComptechApp.CreateColumn('color', {
        width: 70,
        caption: 'Denumire', 
        orderby: ['colors.color'], 
        direction: 'asc', 
        source: 'color'
    }),

    actions: ComptechApp.CreateColumn('actions', {
        width: 10,
        caption: 'Acțiuni', 
        component: 'actions',
        type: null,
        source: 'code',
        actions: ComptechApp.CreateMenu('actions')
            .AddOption('update', ComptechApp.CreateMenu('update', {
                caption: record => 'Editează',
                icon: 'la la-pencil',
                html_class: {
                    'm--font-primary': true,
                },
                clicktype: 'click',
                onClick: v => {
                    alert('Update ' + v.record.id);
                }
            }))
            .AddOption('delete', ComptechApp.CreateMenu('delete', {
                caption: record => 'Șterge',
                icon: 'la la-trash',
                html_class: {
                    'm--font-danger': true,
                },
                clicktype: 'click',
                onClick: v => {
                    alert('delete ' + v.record.id);
                }
            }))
    })
    
}