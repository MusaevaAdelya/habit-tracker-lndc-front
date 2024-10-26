import {useEffect, useState} from "react";
import {
    Button,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";
import {CheckBadgeIcon, SparklesIcon} from "@heroicons/react/16/solid";
import RoomDetails from "./RoomDetails";
import {enterRoom, leaveRoom} from "../services/userServices";
import {redirect, useNavigate} from "react-router-dom";

function RoomInfoModal({
                           id,
                           open,
                           setOpen,
                           name,
                           peopleQty,
                           isPrivate,
                           description,
                           isJoined,
                           goal
                       }) {

    const [password, setPassword] = useState('');
    const [roomId, setRoomId] = useState(null);
    const token = localStorage.getItem('accessToken');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (id) {
            setRoomId(id);
        }

    }, [id]);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    async function handleClose() {
        if (roomId) {
            if (isJoined) {
                await leaveRoom(roomId, token);
                navigate(`/`);
            } else {
                const response = await enterRoom(roomId, password, token);

                if(response.error) {
                    setError(response.error)
                }else{
                    setError('')
                    navigate(`room/${roomId}`);
                }
            }
        }
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-[38px] bg-white text-left info-modal-shadow transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="p-6">
                            <div>
                                <h3 className="mb-4 text-xl font-semibold leading-tight text-center text-primary md:text-2xl lg:text-3xl">
                                    {name}
                                </h3>
                                <p className="text-base md:text-lg">
                  <span className="mr-2 font-semibold text-primary">
                    Description:
                  </span>
                                    {description}
                                </p>
                            </div>
                            <div>
                                <h4 className="mt-5 mb-3 text-lg text-center">Goal</h4>
                                <div className="flex items-center mb-9 ">
                                    <SparklesIcon
                                        className="w-6 h-6 mr-1 text-primary"
                                        fill="#9B5DE5"
                                    />
                                    {goal}
                                </div>
                                <div>
                                    {/* Correctly closing this div */}
                                    <RoomDetails isPrivate={isPrivate} peopleQty={peopleQty}/>
                                    <form action="#" method="POST" className="pt-4 space-y-6 ">
                                        {isPrivate ? (
                                            <div>
                                                <label
                                                    htmlFor="create-password"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Enter password
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="create-password"
                                                        name="create-password"
                                                        type="password"
                                                        required
                                                        autoComplete="current-password"
                                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                                        value={password} // Bind the state to the input's value
                                                        onChange={handlePasswordChange} // Update state on change
                                                    />
                                                    <span>{error}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )}

                                        <div className="flex items-center justify-center ">
                                            <Button
                                                className={`font-bold rounded-xl py-3 px-6 md:text-lg text-base info-modal-shadow mx-5 ${
                                                    isJoined
                                                        ? "bg-light-100 text-primary"
                                                        : "bg-primary text-white"
                                                }`}
                                                onClick={() => handleClose(isJoined)}
                                            >
                                                {isJoined ? "Leave Room" : "Join Room"}
                                            </Button>

                                            {isJoined ? <>
                                                <Button
                                                className={`font-bold rounded-xl py-3 px-6 md:text-lg text-base info-modal-shadow ${
                                                    isJoined
                                                        ? "bg-light-100 text-primary"
                                                        : "bg-primary text-white"
                                                }`}
                                                onClick={() => navigate(`/room/${id}`)}
                                            >
                                                Enter room
                                            </Button>
                                            </> : <></>}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}

export default RoomInfoModal;
