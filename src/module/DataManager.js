const remoteURL = "http://localhost:8088"

export default Object.create(null, {
    get: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`)
            .then(result => result.json())
        }
    },

    //looky here. get All Ascend and call later for ascending order

    getAllAscend: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}?_sort=date&_order=asc`)
            .then(result => result.json())
        }

    },

    getUnfinishedTasks: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}?isChecked=false&_sort=date&_order=asc`)
            .then(result => result.json())
        }

    },

    getAll: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}`)
            .then(result => result.json())
        }
    },
    delete: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(result => result.json())
        }
    },
    add: {
        value: (resource, item) => {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
            .then(result => result.json())
        }
    },
    edit: {
        value: (resource, id, item) => {
            console.log(item, "item")
            console.log(`${remoteURL}/${resource}/${id}`)
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
            .then(result => result.json())
        }
    }
})