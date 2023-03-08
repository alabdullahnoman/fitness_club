const addTobrDB = id =>{

    localStorage.setItem("Break-Time",id)
}
const getFromDB =()=>{

    const man = localStorage.getItem("Break-Time")
    return man
}

export{
    addTobrDB,
    getFromDB
}