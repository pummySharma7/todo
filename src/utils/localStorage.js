export const loadData=(key)=>{
    if(!JSON.parse(localStorage.getItem(key))){
        localStorage.setItem(key,JSON.stringify([]));
    }
    let data=JSON.parse(localStorage.getItem(key));
    console.log(data);
    return data;
   
}




export const saveData=(key,payload)=>{
    if(!JSON.parse(localStorage.getItem(key))){
        localStorage.setItem(key,JSON.stringify([]));
    }
    console.log(JSON.parse(localStorage.getItem(key)));
    let data=JSON.parse(localStorage.getItem(key));
    data=[...data,payload];
    localStorage.setItem(key,JSON.stringify(data));
    return data;
}

export const deleteTodo=(key,payload) =>{
    let data=JSON.parse(localStorage.getItem(key));

    data=data.filter((e)=>e.id!==payload.id);
    localStorage.setItem(key,JSON.stringify(data));
    return data;
}

export const toggleTodo=(key,payload) =>{
    let data=JSON.parse(localStorage.getItem(key));

    data=data.map((e)=>e.id===payload.id?e.status=!e.status:e)
    localStorage.setItem(key,JSON.stringify(data));
    return data;
}