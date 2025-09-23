function UserProfile() {
    return (
        <div className="bg-gray-100 hover:shadow-xl hover:outline-2 hover:outline-red-500 hover:bg-blue-200 p-8 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
            <img src="https://picsum.photos/150" alt="User" className="rounded-full md:w-36 md:h-36 mx-auto sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out" />
            <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
            <p className="text-gray-600 md:text-base sm:text-sm hover:text-blue-500">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    );
}

export default UserProfile;