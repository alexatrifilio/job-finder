const postJobs = async (data) => {
    await fetch('https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs', {
        method: 'POST',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })

}

const getJobs = async () => {
    const get = await fetch('https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs');
    const data = await get.json();
    return data
}

const getJob = async (id) => {
    const get = await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs/${id}`);
    const data = await get.json();
    return data
    }

const deleteJobs = async (id)=> {
await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs/${id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", }, 
    })
}

const patchJobs = async (id)=> {
await fetch(`https://62ab5f25a62365888bdafbfe.mockapi.io/api/v1/jobs/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })
}