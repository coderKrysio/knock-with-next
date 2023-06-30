import { KnockAPI } from "@/lib/knockapi"
import { useEffect, useState } from "react"
import NotificationFeed from "./NotificationFeed";
import { KnockFeedProvider } from "@knocklabs/react-notification-feed";

const DisplayUser = ({
    userData,
    recipientId
}:any) => {
    const [message, setMessage] = useState("");
    // const [showToast, setShowToast] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [messageList,setMessageList] = useState<any>({
        items: [],
        pageInfo: {}
    });

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        KnockAPI.triggerWorkflow(userData.cuid, recipientId ,message);
        setIsLoading(false);
        e.target.reset();
    };
    
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
    }, [userData.cuid])

    return (
        <KnockFeedProvider
        userId={userData.cuid}
        apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY ?? ""}
        feedId={process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID ?? ""}
        >
            <div
            className="flex flex-col border-2 border-black p-10 rounded-lg h-screen w-full"
            >
                <div
                className="flex items-center ml-auto"
                ><NotificationFeed /></div>
                
                <p>User Name: {userData.name}</p>
                <br />

                <p>Send Message</p>

                <form
                onSubmit={onSubmit}
                >
                    <input
                    type="text"
                    placeholder="type message to send"
                    className="placeholder:whitespace-normal text-left border-[1px] border-black my-2 p-2 rounded-lg"
                    onChange={(e) => setMessage(e.target.value)}
                    /> 
                    
                    <br />

                    {/* <input
                    type="checkbox"
                    name="show-toast"
                    checked={showToast}
                    onChange={(e) => setShowToast(e.target.checked)}
                    />
                    <label htmlFor="show-toast">Show Toast</label> */}
                    
                    <br />

                    <button
                    disabled={message === ""}
                    className="border-2 border-black rounded-lg p-2 my-2"
                    >Send</button>
                </form>
            </div>
        </KnockFeedProvider>
    )
}

export default DisplayUser