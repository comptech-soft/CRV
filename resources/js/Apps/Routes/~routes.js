module.exports = [
    
    require('./Welcome/Home'),

    /**
     * Sistem (date de baza, nomenclatoare)
     */
    require('./Sistem/Breeds'),
    require('./Sistem/Colors'),
    require('./Sistem/Companies'),
    require('./Sistem/Countries'),
    require('./Sistem/Regions'),
    require('./Sistem/Judete'),
    require('./Sistem/Localities'),

    /**
     * Ferme
     */
    require('./Farms/Farms'),

    /**
     * Tauri generali
     */
    require('./Animals/Sires'),
    require('./Animals/Ameliorare'),
    
    /**
     * Footer
     */
    require('./Footer/About'),
    require('./Footer/Privacy'),
    require('./Footer/Terms'),
    require('./Footer/Purchase'),

]
  