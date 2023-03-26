const Contactlist = (state = [], action) => {

    let allcontact = Object.assign([], state);
    if (action.type === "addcontact") 
    {
        allcontact.push(action.info);
    }

    if(action.type==="deletecontact"){
        allcontact.splice(action.cindex, 1)
    }
    return allcontact; 
}
export default Contactlist;