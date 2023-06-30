const DisplayUser = ({
    userData
}:any) => {
    return (
        <div
        className="border-2 border-black p-10 rounded-lg h-fit "
        >
            <p>User Name: {userData.name}</p>
        </div>
    )
}

export default DisplayUser