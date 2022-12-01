import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { useTheme } from "../hooks";
import MovieItem from "../pages/MovieItem";
import PopularMovies from "../pages/PopularMovies";
import Watchlist from "../pages/Watchlist";
import ProtectedRoute from "./ProtectedRoute";

const MainRoutes = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#222222" : "#EFF5F5",
        color: isDarkMode ? "#EFF5F5" : "#222222",
      }}
    >
      <Header />
      <Routes>
        <Route exact path="/" element={<PopularMovies />} />
        <Route path="/movie/:id" element={<MovieItem />} />
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
