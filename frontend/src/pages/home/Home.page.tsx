import "./home.scss";

const Home = () => {
  return (
    <div className="content home">
      <h3>Welcome To Job Portal</h3>
      <p>
        <small>
          You are running version <b>{process.env.REACT_APP_VERSION} </b>{" "}
          application in <b>{process.env.NODE_ENV}</b> mode.
        </small>
      </p>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed
        cras ornare arcu. Quam lacus suspendisse faucibus interdum posuere. Eget
        nunc scelerisque viverra mauris in. Nunc consequat interdum varius sit
        amet. Facilisi etiam dignissim diam quis enim lobortis scelerisque
        fermentum dui. Nisi lacus sed viverra tellus in hac habitasse platea.
        Eros donec ac odio tempor orci dapibus ultrices in iaculis. Duis ut diam
        quam nulla porttitor massa. Orci porta non pulvinar neque laoreet
        suspendisse. At volutpat diam ut venenatis tellus in. Feugiat in ante
        metus dictum at tempor commodo ullamcorper a. Non consectetur a erat
        nam. Dapibus ultrices in iaculis nunc sed augue. Lorem ipsum dolor sit
        amet consectetur adipiscing. Massa massa ultricies mi quis hendrerit
        dolor. Faucibus a pellentesque sit amet porttitor eget dolor morbi.
        Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
        Lectus mauris ultrices eros in cursus turpis massa. Diam maecenas sed
        enim ut sem viverra.
      </span>
    </div>
  );
};

export default Home;
