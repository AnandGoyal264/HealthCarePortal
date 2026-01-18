const Login = () => {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <form className="bg-white p-6 rounded shadow w-80">
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
  
          <input
            className="w-full border p-2 mb-3 rounded"
            placeholder="Email"
          />
  
          <input
            className="w-full border p-2 mb-3 rounded"
            type="password"
            placeholder="Password"
          />
  
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default Login;
  