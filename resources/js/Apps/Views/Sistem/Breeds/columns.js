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
        orderby: ['breeds.id'], 
        direction: 'asc', 
        source: 'id',
        html_style: {
            'text-align': 'right'
        }
    }),

    breed: ComptechApp.CreateColumn('breed', {
        width: 40,
        caption: 'Denumire', 
        orderby: ['breeds.breed'], 
        direction: 'asc', 
        source: 'breed'
    }),

    code: ComptechApp.CreateColumn('code', {
        width: 30,
        caption: 'Cod', 
        orderby: ['breeds.code'], 
        direction: 'asc', 
        source: 'code'
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
                clicktype: 'event',
                event: 'record-action-click',
                onClick: (v, record) => {

                    v.grid.visible = false
                    v.filter.visible = false
                    
                    v.form.visible = true
                    v.form.action = 'update'
                    v.form.record = record

                    v.fm.resetResults()

                }
            }))
            .AddOption('delete', ComptechApp.CreateMenu('delete', {
                caption: record => 'Șterge',
                icon: 'la la-trash',
                html_class: {
                    'm--font-danger': true,
                },
                clicktype: 'event',
                event: 'record-action-click',
                onClick:  (v, record) => {

                    v.grid.visible = false
                    v.filter.visible = false
                    
                    v.form.visible = true
                    v.form.action = 'delete'
                    v.form.record = record

                    v.fm.resetResults()

                }
            }))
    })
    
}