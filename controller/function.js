const fs = require('fs')

const loadUser = () => {
    const file = fs.readFileSync('./player.json', 'utf-8')
    const listUser = JSON.parse(file)
    return listUser
}

const addPlayer = (data) => {
    const listUser = loadUser()
    listUser.push(data)
    fs.writeFileSync('player.json', JSON.stringify(listUser, null, 2))
}

const findPlayer = (name) => {
    const user = loadUser()
    const userTarget = user.find((userTarget) => userTarget.username.toLowerCase() === name.toLowerCase());
    return userTarget;
}

const deleteUser = (name) => {
    const listUser = loadUser()
    const filtered = listUser.filter((player) => player.name !== name);
    fs.writeFileSync('player.json', JSON.stringify(listUser, null, 2))
}

module.exports = { loadUser, addPlayer, findPlayer, deleteUser};