
import Blackboard from "../../components/blackboard/Blackboard"
const RoomPage = () => {

    return (
        <div className="">
            <h1
                className="text-center text-3xl font-bold text-white pb-2"
            >
                Black Board Sharing App by Szymon😎🖊️
                <span className="text-2xl">[Użytkownicy Online: 0]</span>
            </h1>
            <div className="flex justify-center">
                <Blackboard />
            </div>
        </div>
    )
}

export default RoomPage
