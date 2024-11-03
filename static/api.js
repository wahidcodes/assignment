export const fetchHeader = async () => {
    const res = await fetch('http://localhost:3000/header',{ 
        method:'GET', headers: {"Content-Type": "application/json"} 
    })
    const data = await res.json()
    return data;
}

export const fetchFooter = async () => {
    const res = await fetch('http://localhost:3000/footer',{ 
        method:'GET', headers: {"Content-Type": "application/json"} 
    })
    const data = await res.json()
    return data;
}

export const fetchPages = async () => {
    const res = await fetch('http://localhost:3000/pages',{ 
        method:'GET', headers: {"Content-Type": "application/json"} 
    })
    const data = await res.json()
    return data;
}
