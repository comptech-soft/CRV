module.exports = {

    Year: (date = null, format = 'YYYY') => {
        let d = (date === null ? moment() : moment(date))
        return d.format(format)
    }
}