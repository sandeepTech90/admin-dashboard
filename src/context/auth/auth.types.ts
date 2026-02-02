export type AuthContextType = {
    state: {
        user: string | null;
        token: string | null;
        isAuthenticated: boolean;
    };
    dispatch: React.ActionDispatch<[action: any]>;
};