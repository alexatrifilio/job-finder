const postJob = async (data: object): Promise<void> => {
    await fetch('https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs', {
        method: 'POST',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })

}

const getJobs = async (): Promise<Array<Object>>=> {
    const get = await fetch('https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs');
    const data = await get.json();
    return data
}

const getJob = async (id: Number): Promise<Object> => {
    const get = await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs/${id}`);
    const data = await get.json();
    return data
    }

const deleteJob = async (id: Number): Promise<void>=> {
await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs/${id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", }, 
    })
}

const patchJob = async (id: Number, data: Object): Promise<void>=> {
await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })
}