import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="bg-image"
      style={{ backgroundImage: `url("./media/bg-image.jpg")` }}
    >
      <div className="form-container">
        <div className="form-header">
          <h1 className="title">Welcome</h1>
          <span className="subtitle">Let's begin new adventure</span>
        </div>
        <form action="" className="form-content">
          <div className="form-group">
            <label htmlFor="email" className="label">
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
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="username"
              className="input"
              placeholder="Enter your username"
            />
          </div>

          <button className="form-btn">Register</button>
          <Link to="/" className="form-register">
            Already have an account? Login here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
