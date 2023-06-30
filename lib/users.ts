const { Knock } = require("@knocklabs/node");
const knock = new Knock(process.env.KNOCK_API_KEY);

export const Users = async () => {
    await knock.users.bulkIdentify([
        {
            id: "1",
            name: "John Hammond",
            email: "jhammond@ingen.net",
        },
        {
            id: "2",
            name: "Ellie Sattler",
            email: "esattler@ingen.net",
        },
    ]);
}
