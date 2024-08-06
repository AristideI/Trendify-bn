export const getRecievedSocketId = (recieverId: string, currentlyOnlineUsers: {}) => {
    return currentlyOnlineUsers[recieverId];
};
