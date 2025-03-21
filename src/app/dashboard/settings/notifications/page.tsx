import React from "react";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Notifications</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Notification Preferences
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="emails"
                className="block text-sm font-medium text-gray-600"
              >
                Email Notifications
              </label>
              <select
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500"
                name="emails"
                id="emails"
                aria-label="Email notifications preferences"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="sms"
                className="block text-sm font-medium text-gray-600"
              >
                SMS Notifications
              </label>
              <select
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500"
                name="sms"
                id="sms"
                aria-label="SMS notifications preferences"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="push"
                className="block text-sm font-medium text-gray-600"
              >
                Push Notifications
              </label>

              <select
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500"
                name="push"
                id="push"
                aria-label="Push notifications preferences"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>
          </div>
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

export default Notifications;
