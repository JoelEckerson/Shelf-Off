const items = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            console.log('In setItems() reducer payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default items;