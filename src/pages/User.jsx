import { useEffect, useState } from 'react';
import axios from 'axios';
function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(res => {
        setUsers(res.data.users);
      })
      .catch(err => {
        console.error("Failed to fetch users:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Age</th>
                <th className="px-4 py-2 border">Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{user.id}</td>
                  <td className="px-4 py-2 border">{user.firstName} {user.lastName}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border">{user.phone}</td>
                  <td className="px-4 py-2 border">{user.age}</td>
                  <td className="px-4 py-2 border capitalize">{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default User;
