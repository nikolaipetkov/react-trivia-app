const rootReducer = (state = [{title: 'test title 123', id: 1, platform: 'desktop'}], action) => {
	switch (action.type) {
    	case 'ADD':
    		return [...state, action.payload];
    	default:
    		return state;
	}
};

export default rootReducer;