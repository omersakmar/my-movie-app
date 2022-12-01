import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div
        className="w-full py-5 max-w-xs border border-gray-200 rounded-lg shadow-md mb-5"
        style={{
          background:
            "linear-gradient(0deg, rgba(99,2,69,1) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div
          className="flex flex-col items-center"
          style={{ color: "#EFF5F5" }}
        >
          {user?.picture && (
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={user.picture}
              alt={user?.name}
            />
          )}
          <h2 className="mb-1 text-xl font-medium">{user?.name}</h2>
          <span className="text-sm">{user.email}</span>
          <span className="text-sm">{user.locale.toUpperCase()}</span>
        </div>
      </div>
    )
  );
};

export default Profile;
