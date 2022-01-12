import { BASE_URL } from "../../services/usuario/User"

export const submitUserAction = (data) => {
    let url = BASE_URL
    fetch(url, {
        method:"POST",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {console.log(json)})
}  