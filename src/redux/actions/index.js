const apiKey = "be7846fd4192a79de3c0616ec00ffcae"

export function getCiudad(ciudad){
    return function(dispatch){
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(result => dispatch({type: "GET_CIUDAD", payload: result}))
    }
}