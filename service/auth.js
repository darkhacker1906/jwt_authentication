const userIdToUserMap= new Map();
function setUser(userId, user) {
    userIdToUserMap.set(userId, user);
}
function getUser(userId) {
    return userIdToUserMap.get(userId);
}
module.exports = { setUser, getUser };