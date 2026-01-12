export type AuthContextType = {
    state: {
        user: string | null;
        isAuthenticated?: boolean;
    };
    dispatch: React.ActionDispatch<[action: any]>;
};