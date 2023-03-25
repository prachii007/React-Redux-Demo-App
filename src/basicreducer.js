const Basiclist = (state = [], action) => {

    let allbasic = Object.assign([], state);
    if (action.type === "addbasic") 
    {
        allbasic.push(action.info);
    }

    if(action.type==="deletebasic"){
        allbasic.splice(action.bindex, 1)
    }
    return allbasic; 
}
export default Basiclist;