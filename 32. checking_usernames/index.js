let current_usernames = ["zubair", "Ahmed", "admin", "usama", "amir"]
let new_users = ["kaleem", "ahmed", "shadab", "rizwan", "babar"]


for(const key in current_usernames){
    if(new_users[key].toLowerCase() === current_usernames[key].toLowerCase() )
        console.log(`${new_users[key]}, you need a new username as that username has been taken already exist.`)
    else
        console.log(`${new_users[key]}, username is available.`)

}