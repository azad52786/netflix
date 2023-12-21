import { useNavigate } from "react-router";
import { BACKGROUND_IMG } from "../utils/constant";

const LandingPage = () => {

    const navigate = useNavigate();
  return (
    <div
      className=" relative w-full bg-gradient-to-br from-gray-800 via-black to-opacity-24
     rounded-lg "
    >
      <div>
        <img src={BACKGROUND_IMG} alt="backgound" className=" object-cover h-screen w-screen" />
      </div>
      <div
        className="absolute bg-black w-full min-h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          rounded-lg bg-opacity-60 text-white sm:p-[58px] flex flex-col justify-around"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className=" sm:w-4/6 w-5/6  mx-auto flex flex-col items-center justify-around min-h-[50%]">
            <h1 className=" sm:text-5xl text-3xl font-bold text-center sm:leading-[60px] leading-[39px]">The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
            <p className=" sm:text-2xl text-lg sm:my-4  my-3">Join Today. Cancel Anytime.</p>
            <p className=" text-center sm:text-2xl text-lg mb-4 ">Ready to watch? Get Started to create or restart your membership.</p>
            <button
            onClick={() => navigate('/login')}
            className=' h-14  w-40 py-4 bg-red-500 rounded-sm text-white font-bold'
            >Get Started</button>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
