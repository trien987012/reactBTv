const stateDefault = "./img/products/steel-car.jpg";

export const imgCarReducer = (state = stateDefault, action) =>{
    switch (action.type) {
        case 'CHANGE_COLOR':{
            state = action.imgCar;
            return state; // tra ve state moi
        }
        default: return state;
    }
}