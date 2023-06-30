import { KnockAPI } from "@/lib/knockapi"
import { useEffect, useState } from "react"

const DisplayUser = ({
    userData
}:any) => {
    const [messageList,setMessageList] = useState<any>({
        items: [],
        pageInfo: {}
    });
    useEffect(() => {
        KnockAPI.getMessages(userData.cuid)
        .then((res: any) => {
            setMessageList((prev: any) => ({
                ...prev,
                items: res.items,
                pageInfo: res.pageInfo,
            }))
            console.log(res)
        })
        .catch((err: any) => console.log(err))
    }, [])

    return (
        <div
        className="border-2 border-black p-10 rounded-lg h-fit "
        >
            <p>User Name: {userData.name}</p>
            <p>Messages: {messageList.items.length}</p>
            {/* <p>{messageList.items}</p> */}
        </div>
    )
}

export default DisplayUser