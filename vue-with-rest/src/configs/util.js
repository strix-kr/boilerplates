const util = {
    // convert object to query
    makeQuery (param = null, isQuery = false) {
        if(param == null) return ''
        
        return ( isQuery ) ? `?${Object.entries(param).reduce( (acc, [key, value] ) => ( acc + `${key}=${value}` ), '')}`
                           : `/${param}`
    },
}

export default util