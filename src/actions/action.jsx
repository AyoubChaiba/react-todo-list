let add = (text)=> {
    return {
        type : 'add',
        text : text ,
    }
}
let update = (id,text)=> {
    return {
        type : 'update',
        id : id ,
        text : text ,
    }
}
let remove = (id)=> {
    return {
        type : 'remove',
        id : id ,
    }
}
let marke = (id,checked)=> {
    return {
        type : 'marke',
        id : id ,
        complete : checked
    }
}

export {add ,update , remove ,marke}