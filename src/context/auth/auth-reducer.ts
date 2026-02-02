export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return { 
                ...state, 
                user: action.payload.user, 
                token: action.payload.token,
                isAuthenticated: true 
            };
        case 'LOGOUT':
            return { 
                ...state, 
                user: null, 
                token: null,
                isAuthenticated: false 
            };
        case 'RESTORE_TOKEN':
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                user: 'User' // Set a default user, or fetch from server
            };
        default:
            return state;
    }
};