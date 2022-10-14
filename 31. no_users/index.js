let usernames = []

for(const user of usernames){
    if (user == "admin")
        console.log("Hello admin, would you like to see a status report?")
    else 
        console.log(`Hello ${user}, thank you for logging in again`)
}

if(usernames.length === 0){
    console.log("we need new users.");
}