module.exports = {

    id: ComptechApp.CreateColumn('id', {
        width: 10,
        caption: 'ID', 
        orderby: ['colors.id'], 
        direction: 'asc', 
        source: 'id'
    }),

    color: ComptechApp.CreateColumn('color', {
        width: 90,
        caption: 'Denumire', 
        orderby: ['colors.color'], 
        direction: 'asc', 
        source: 'color'
    }),
    
}