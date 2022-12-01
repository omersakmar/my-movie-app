import MainRoutes from "./routes/MainRoutes";

function App() {
  // const { isLoading, error } = useAuth0();

  return (
    <main>
      {/* <h1>Auth0 Login</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )} */}
      <MainRoutes />
    </main>
  );
}

export default App;
