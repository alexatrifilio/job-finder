let host= "https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1"
const test = 'https://62bba0c56b1401736ce71b64.mockapi.io/job-finder'

const postElement = async (data: object, endpoint: string): Promise<void> => {
    await fetch(`${host}/${endpoint}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })

}

const getElements = async (endpoint:string, payload: string): Promise<Array<Object>>=> {
    const get = await fetch(`${host}/${endpoint}?${payload}`);
    const data = await get.json();
    return data
}

const getElement = async (id: string, endpoint:string): Promise<Object> => {
    const get = await fetch(`${host}/${endpoint}/${id}`);
    const data = await get.json();
    return data
    }

const deleteElement = async (id: string, endpoint:string): Promise<void>=> {
await fetch(`${host}/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", }, 
    })
}

const patchElement = async (id: string, data: Object, endpoint:string): Promise<void>=> {
await fetch(`${host}/${endpoint}/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })
}