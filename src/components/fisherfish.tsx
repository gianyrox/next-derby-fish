export default function FisherFish() {
  return (
    <div>
      <div className="container">
        <div className="form_area">
          <p className="title">SIGN UP</p>
          <form action="">
            <div className="form_group">
              <label className="sub_title">Name</label>
              <input
                placeholder="Enter your full name"
                className="form_style"
                type="text"
              />
            </div>
            <div className="form_group">
              <label className="sub_title">Email</label>
              <input
                placeholder="Enter your email"
                id="email"
                className="form_style"
                type="email"
              />
            </div>
            <div className="form_group">
              <label className="sub_title">Password</label>
              <input
                placeholder="Enter your password"
                id="password"
                className="form_style"
                type="password"
              />
            </div>
            <div>
              <button className="btn">SIGN UP</button>
              <p>
                Have an Account?{" "}
                <a className="link" href="">
                  Login Here!
                </a>
              </p>
              <a className="link" href=""></a>
            </div>
            <a className="link" href=""></a>
          </form>
        </div>
        <a className="link" href=""></a>
      </div>
    </div>
  );
}
