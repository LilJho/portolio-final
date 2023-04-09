import aboutsvg from "../assets/about.svg";

const Aboutme = () => {
  return (
    <section className="flex justify-center items-center gap-4 py-8 my-12 w-full bg-[#F8F8F8]">
      <img
        src={aboutsvg}
        alt="A man developing web applications and softwares"
        className="w-[30rem] h-[30rem]"
      />
      <div className="max-w-[20rem] font-montserrat font-semibold">
        <h4>ABOUT ME</h4>
        <p>A software development enthusiast with a Computer Science degree.</p>
        <span className="text-xs font-poppins text-[#555555] font-normal">
          I'm Jhonnel T. Garcia, a Fullstack Developer from Puerto Princesa,
          Palawan. With expertise in HTML, CSS, JavaScript, React, Tailwindcss,
          Typescript, Express.js, Node.js, and MongoDB, I can create visually
          stunning and responsive web applications. I specialize in writing
          efficient code and collaborating with colleagues to deliver
          high-quality results on time.
        </span>
      </div>
    </section>
  );
};

export default Aboutme;
