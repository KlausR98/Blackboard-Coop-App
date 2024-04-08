

const JoinRoomForm = () => {

    return (
        <div className="bg-white bg-opacity-[0.15] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-[1px] border-white rounded-lg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Dołącz do tablicy
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                            Wpisz swoje imię
                        </label>
                        <div className="mt-2">
                            <input
                                id="userName"
                                name="userName"
                                type="name"
                                autoComplete="name"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Wpisz kod do tablicy
                            </label>

                        </div>
                        <div className="flex flex-row mt-2 gap-1">
                            <input
                                id="roomCode"
                                name="roomCode"
                                type="code"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Dołącz
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JoinRoomForm