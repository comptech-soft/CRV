const Column = require('./Column')

class Grid {

    constructor(name) {
        this.name = name
        this.default_order = null
        this.per_page_options = [1, 2, 3, 4, 5, 10, 15, 20, 50, 100, 200, 500]
        this.types = ['table', 'list']
        this.current = 'table'
        this.columns = {}
    }

    DefaultOrder(order) {
        this.default_order = order
        return this
    }

    AddColumn(key, column){
        let col = _.isFunction(column) ? column() : column
        if(! (col instanceof Column) )
        {
            throw 'Grid::AddColumn. [' + col.toString() + '] is not a column object'
        }
        this.columns[key] = col
        return this
    }

}

module.exports = Grid