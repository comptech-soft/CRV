module.exports = {
    redirect: (timeout = 250, url = null) => {
        if( ! url ) 
        {
            url = document.head.querySelector('meta[name="base-url"]').content
        }
        let t = setTimeout( () => {
            location.href = url
        }, timeout)
    }
}