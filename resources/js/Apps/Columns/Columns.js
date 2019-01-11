module.exports = {

    RecCount: width => ComptechApp.CreateColumn('reccout', {
        width,
        caption: '#', 
        type: 'reccount',
        html_style: {
            'text-align': 'right'
        }
    }),

    Actions: width => ComptechApp.CreateColumn('actions', {
        width,
        caption: 'Acțiuni', 
        component: 'actions',
        type: null,
        html_style: {
            'text-align': 'center',
        },
        actions: require('./../Menus/Portlets/RecordActions')
    })
}