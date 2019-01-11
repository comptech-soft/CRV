module.exports = {

    reccount: ComptechApp.CreateColumn('reccout', {
        width: 10,
        caption: '#', 
        type: 'reccount',
        html_style: {
            'text-align': 'right'
        }
    }),

    name: ComptechApp.CreateColumn('name', {
        width: 70,
        caption: 'Denumire', 
        orderby: ['companies.name'], 
        direction: 'asc', 
        source: 'name'
    }),

    logo: ComptechApp.CreateColumn('logo', {
        width: 10,
        caption: 'Logo',
        type: 'html', 
        source: record => {
            return ! record.logo ? null : '<img class="img-fluid" src="' + record.logo + '" />'
        }
    }),

    actions: ComptechApp.CreateColumn('actions', {
        width: 10,
        caption: 'Acțiuni', 
        component: 'actions',
        type: null,
        source: 'code',
        html_style: {
            'text-align': 'center'
        },
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