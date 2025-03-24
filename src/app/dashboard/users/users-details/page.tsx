import React from "react";

interface IUser {
  name: string;
  email: string;
  role: string;
  status: string;
  bio: string;
  profilePicture: string;
  activities: {
    id: number;
    description: string;
    timestamp: string;
  }[];
}

const UserDetails = () => {
  const user: IUser = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Software Engineer",
    status: "Active",
    bio: "Passionate developer with 5 years of experience in web technologies",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
    activities: [
      {
        id: 1,
        description: "Updated project documentation",
        timestamp: "2024-01-15",
      },
      {
        id: 2,
        description: "Completed code review for feature X",
        timestamp: "2024-01-14",
      },
      {
        id: 3,
        description: "Deployed new version to production",
        timestamp: "2024-01-13",
      },
    ],
  };

  const userStatusClass =
    user.status === "Active" ? "text-green-500" : "text-red-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center mb-8">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user?.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
            <p className={`text-sm mt-2 ${userStatusClass}`}>
              Status: {user.status}
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {user.activities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span>A</span>
                </div>

                <div>
                  <p className="text-gray-700">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="px-2 py-1 cursor-pointer text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button className="px-2 py-1 cursor-pointer text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
