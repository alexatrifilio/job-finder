const postJob = async (data: object, endpoint: string): Promise<void> => {
    await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/${endpoint}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })

}

const getJobs = async (endpoint:string): Promise<Array<Object>>=> {
    const get = await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/${endpoint}`);
    const data = await get.json();
    return data
}

const getJob = async (id: string, endpoint:string): Promise<Object> => {
    const get = await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/${endpoint}/${id}`);
    const data = await get.json();
    return data
    }

const deleteJob = async (id: string, endpoint:string): Promise<void>=> {
await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", }, 
    })
}

const patchJob = async (id: string, data: Object, endpoint:string): Promise<void>=> {
await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/${endpoint}/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })
}