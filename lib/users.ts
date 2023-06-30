const { Knock } = require("@knocklabs/node");
const knock = new Knock(process.env.NEXT_PUBLIC_KNOCK_API_KEY);

export const KnockAPI = {
    setIdentify: async (userData: any) => {
        return await knock.users.identify(userData.cuid, {
            name: userData.name,
            email: userData.email,
        }).catch((res: any) => console.log(res))
    },

    getUser:async (userId: any) => {
        return await knock.users.get(userId)
        .catch((res: any) => console.log(res))
    },


}
