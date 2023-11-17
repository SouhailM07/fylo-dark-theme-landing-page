import "./email.css";
export default function Email() {
  return (
    <>
      <article
        id="Email"
        className=" rounded-lg relative top-[9rem] bg-dark-blue-intro text-white py-[3rem] shadow-xl text-center max-w-[70rem] m-auto"
      >
        <h1 className="text-[2.5rem] mb-[1rem] font-bold font-[raleway]">
          Get early access today
        </h1>
        <p className="px-[12rem] mb-[2rem]">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="">
          <input
            type="text"
            placeholder="email@example.com "
            className="py-[1rem] rounded-full w-[50%] pl-[2rem] text-black outline-none"
          />
          <button> Get Started For Free</button>
        </div>
      </article>
    </>
  );
}
