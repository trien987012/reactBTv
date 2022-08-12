const stateDefault = {
    arrSinhVien : [{id:1, name:'Nguyen V A'},{id:2, name:'Nguyen V B'}],
    sinhVien: {
        id:'',
        name:''
    }
}

export const qlsvReducer =(state = stateDefault, action)=>{
    switch(action.type){
        default: return state;
    }
}