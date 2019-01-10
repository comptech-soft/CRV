const Datatable = require('./Datatable')
    
module.exports = (name, options = {}) => {

    let grid = new Datatable(name)
    
    if(options.hasOwnProperty('default_order'))
    {
        grid.DefaultOrder(options.default_order)
    }
    
    if(options.hasOwnProperty('columns'))
    {
        _.each(options.columns, (column, key) => {
            grid.AddColumn(key, column)
        })
    }

    return grid
}