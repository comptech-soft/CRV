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
        orderby: ['geo_countries.id'], 
        direction: 'asc', 
        source: 'id',
        html_style: {
            'text-align': 'right'
        }
    }),

    name: ComptechApp.CreateColumn('name', {
        width: 50,
        caption: 'Denumire', 
        orderby: ['geo_countries.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    code: ComptechApp.CreateColumn('code', {
        width: 10,
        caption: 'Cod', 
        orderby: ['geo_countries.code'], 
        direction: 'asc', 
        source: 'code'
    }),

    icon: ComptechApp.CreateColumn('icon', {
        width: 10,
        caption: 'Icon',
        type: 'html', 
        source: record => {
            return ! record.icon ? null : '<img class="img-fluid" src="' + record.icon + '" />'
        }
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