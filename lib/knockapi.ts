const { Knock } = require("@knocklabs/node");
const knock = new Knock(process.env.NEXT_PUBLIC_KNOCK_API_KEY);

export const KnockAPI = {
    setIdentify: async (userData: any) => {
        return await knock.users.identify(userData.cuid, {
            name: userData.name,
            email: userData.email,
        }).catch((err: any) => console.log(err))
    },

    getUser:async (userId: any) => {
        return await knock.users.get(userId)
        .catch((err: any) => console.log(err))
    },

    getMessages: async (userId: any) => {
        return await knock.users.getMessages(userId,
            {
                page_size: 5,
            }
        )
    }
}