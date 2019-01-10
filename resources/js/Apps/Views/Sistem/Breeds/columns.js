module.exports = {

    id: ComptechApp.CreateColumn('id', {
        width: 10,
        caption: 'ID', 
        orderby: ['breeds.id'], 
        direction: 'asc', 
        source: 'id'
    }),

    breed: ComptechApp.CreateColumn('breed', {
        width: 45,
        caption: 'Denumire', 
        orderby: ['breeds.breed'], 
        direction: 'asc', 
        source: 'breed'
    }),

    code: ComptechApp.CreateColumn('code', {
        width: 45,
        caption: 'Cod', 
        orderby: ['breeds.code'], 
        direction: 'asc', 
        source: 'code'
    })
}