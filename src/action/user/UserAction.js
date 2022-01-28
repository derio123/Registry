import { BASE_URL } from "../../Services/api/api"

export const submitUserAction = (data) => {
    //console.log(data);

    let url = BASE_URL;
    fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(json => { console.log(json) })
} 