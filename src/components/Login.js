import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="bg-image"
      style={{ backgroundImage: `url("./media/bg-image.jpg")` }}
    >
      <div className="form-container">
        <div className="form-header">
          <h1 className="title">Welcome Back !</h1>
          <span className="subtitle">Let's begin the adventure</span>
        </div>
        <form action="" className="form-content">
          <div className="form-group">
            <label for="email" className="label">
              Email
            </label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <a href="#forgot-password" className="forgot-password">
              Forgot password
            </a>
            <input
              type="password"
              className="input"
              placeholder="Enter your password address"
            />
          </div>
          <div className="form-group form-checkbox">
            <input
              type="checkbox"
              className="checkbox"
              placeholder="Enter your password"
            />
            <label htmlFor="checkbox" className="label">
              Remember me
            </label>
          </div>
          <button className="form-btn">Login</button>
          <Link to="/register" className="form-register">
            Are you new? Register here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
