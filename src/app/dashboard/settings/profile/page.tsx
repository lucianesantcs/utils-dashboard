import React from "react";

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Profile Settings
        </h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>

          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Foto de perfil de uma mulher jovem sorrindo com cabelos cacheados castanhos"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div>
            <button className="px-6 mt-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Change Picture
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="name">
                Full Name
                <input
                  type="text"
                  id="name"
                  defaultValue="Jane Doe"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>

            <div>
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  id="username"
                  defaultValue="jane_doe"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>

            <div>
              <label htmlFor="emailAddress">
                Email Address
                <input
                  type="text"
                  id="emailAddress"
                  defaultValue="jane.doe@email.com"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        </section>

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

export default ProfileSettings;
