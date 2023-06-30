import { KnockAPI } from "@/lib/knockapi"
import { useState } from "react"
import NotificationFeed from "./NotificationFeed";
import { KnockFeedProvider } from "@knocklabs/react-notification-feed";

const DisplayUser = ({
    userData,
    recipientId
}:any) => {
    const [message, setMessage] = useState("");

    const onSubmit = async (e: any) => {
        e.preventDefault();
        KnockAPI.triggerWorkflow(userData.cuid, recipientId ,message);
        e.target.reset();
    };

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