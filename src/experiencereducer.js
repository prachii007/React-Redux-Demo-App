const Experiencelist = (state = [], action) => {

    let allexperience = Object.assign([], state);
    if (action.type === "addexperience") 
    {
        allexperience.push(action.info);
    }

    if(action.type==="deleteExp"){
        allexperience.splice(action.eindex, 1)
    }
    return allexperience; 
}
export default Experiencelist;