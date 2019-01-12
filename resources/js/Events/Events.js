module.exports = {
    ToolBar : {
        onClickInsertBtn: v => {

            /** Ascund gridul si filtrarea */
            v.grid.visible = false
            v.filter.visible = false
        
            /** Formularul devine vizibil */
            v.form.visible = true
            v.form.action = 'insert'
            v.form.record = null
            
            /** Resetez form manager (fm) */
            v.fm.resetResults()
        },

        onClickFilterBtn: v => {
            // v.form.visible = false
            v.filter.visible = true
            // v.grid.visible = true
        
            /** Deactivez toate butoanele din toolbar */
            // _.each(v.grid.actions.options, action => {
            //     action.enabled = false
            // })
        }
    },

    Record: {
        onClickUpdate: (v, record) => {
            v.grid.visible = false
            v.filter.visible = false
            
            v.form.visible = true
            v.form.action = 'update'
            v.form.record = record

            v.fm.resetResults()
        },

        onClickDelete: (v, record) => {
            v.grid.visible = false
            v.filter.visible = false
            
            v.form.visible = true
            v.form.action = 'delete'
            v.form.record = record

            v.fm.resetResults()
        }
    }
}