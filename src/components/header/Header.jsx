import { useAuth0 } from "@auth0/auth0-react";
import { ThemeButton } from "../buttons/ThemeButton";
import { Link } from "react-router-dom";

import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
export const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <header className="px-4 lg:px-6 py-2.5">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Link className="flex items-center gap-3" to="/">
            <h2 className="text-2xl font-bold">LOGO</h2>
          </Link>
          <ThemeButton />
        </div>
        {isAuthenticated ? (
          <>
            <ul className="flex flex-col gap-2 md:flex-row">
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
              <li>
                <h2 className="font-bold">{user?.name}</h2>
              </li>
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <LoginButton />
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
