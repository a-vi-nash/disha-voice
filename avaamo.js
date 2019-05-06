const fetch = require('node-fetch')
const Avaamo = {
    url: "https://c5.avaamo.com//bot_connector_webhooks/c9f09705-1cd8-41ae-9442-b5bfbbd35b93/message.json",
    sendMessage(user, message) {
        let payload = {
            "channel_uuid": "53babb60-804f-47e8-805c-420cde4e26eb",
            "user": {
                "first_name": user.name.display || "Google Home",
                "last_name": user.name.family || "User",
                "uuid": user.raw.userId
            },
            "message": {
                "text": message
            }
        };
        return fetch(this.url, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => res.json()).then(data => {
            console.log(data)
            return data;
        })
    },
}

module.exports = Avaamo