
export const getUsersState = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFetchFollowing = (state) => {
    return state.usersPage.fetchFollowing;
}
