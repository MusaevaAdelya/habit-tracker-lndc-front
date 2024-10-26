import React, { useState, useEffect } from "react";
import API from "../api"; // Import the centralized API instance
import RoomItem from "../components/RoomItem";
import SearchPanel from "../components/SearchPanel";
import Pagination from "../components/Pagination";

function MyRooms() {
    const [rooms, setRooms] = useState([]); // All rooms
    const [filteredRooms, setFilteredRooms] = useState([]); // Filtered rooms based on search
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // State to track the search query
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10); // You can make this dynamic if needed
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const token = localStorage.getItem('accessToken'); // Get the access token
                setLoading(true); // Start loading
                const response = await API.get(`/find-user-room?page=${currentPage}&pageSize=${pageSize}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Add the token to the headers
                    },
                });
                // Update the state based on the API response
                setRooms(response.data.data); // Accessing the 'data' array from the response
                setFilteredRooms(response.data.data); // Initially set filtered rooms to all rooms
                setTotalPages(response.data.pagination.totalPages); // Get the total number of pages from the response
                setTotalResults(response.data.pagination.total); // Get the total number of results
                setLoading(false); // Stop loading after data fetch
            } catch (err) {
                const errorMessage = err.response?.data?.error?.message || "Failed to fetch rooms.";
                setError(errorMessage);
                setLoading(false);
            }
        };

        fetchRooms();
    }, [currentPage, pageSize]); // Refetch data when currentPage or pageSize changes

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Function to handle search query change from the SearchPanel
    const handleSearchChange = (query) => {
        setSearchQuery(query.toLowerCase());
        filterRooms(query.toLowerCase());
    };

    // Function to filter rooms based on search query
    const filterRooms = (query) => {
        const filtered = rooms.filter((room) => room.name.toLowerCase().includes(query));
        setFilteredRooms(filtered);
    };

    return (
        <main className="px-2 py-10 md:px-10">
            <h1 className="mb-6 text-2xl text-center fw-semibold lg:text-4xl md:text-3xl">
                My Rooms
            </h1>

            {/* Updated SearchPanel integrated with filtering */}
            <SearchPanel onSearchChange={handleSearchChange} />

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div className="space-y-8 py-9">
                {filteredRooms.map((room) => (
                    <RoomItem
                        key={room.id}
                        image={room.image || "/images/default-room-image.svg"} // Fallback if no image
                        name={room.name}
                        peopleQty={room.users?.count || 0}
                        isPrivate={room.close}
                        description={room.description}
                        goal={room.room_setting?.isGlobal ? "Global Goal" : "Room Goal"} // Example goal based on room setting
                    />
                ))}
            </div>
            {!loading && !error && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalResults={totalResults}
                    pageSize={pageSize}
                />
            )}
        </main>
    );
}

export default MyRooms;
