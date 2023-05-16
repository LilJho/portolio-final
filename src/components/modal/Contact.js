import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ setIsOpen }) => {
  const [emailDetails, setEmailDetails] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleTextInput = (val, prop) => {
    setEmailDetails((prev) => ({ ...prev, [prop]: val }));
  };

  useEffect(() => {
    emailjs.init("CI2-yFumeP2_hcUlG");
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailDetails);

    const serviceID = "default_service";
    const templateID = "template_72o6ii9";

    const email = {
      from_name: emailDetails.name,
      to_name: "Jhonnel",
      message: emailDetails.msg,
      from_email: emailDetails.email,
    };

    await emailjs.send(serviceID, templateID, email).then(
      () => {
        alert("Sent!");
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );

    setEmailDetails({ name: "", email: "", msg: "" });
    setIsOpen((prev) => !prev);
  };

  return (
    <form className="flex flex-col items-center justify-center w-full gap-2 mt-4 text-xs">
      <div className="flex gap-2 ">
        <div>
          <label>Your Name</label>
          <input
            onChange={(e) => handleTextInput(e.target.value, "name")}
            value={emailDetails.name}
            className="w-full p-2 bg-white border border-gray-400 rounded"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label>Your Email</label>
          <input
            value={emailDetails.email}
            onChange={(e) => handleTextInput(e.target.value, "email")}
            className="w-full p-2 bg-white border border-gray-400 rounded"
            type="text"
            placeholder="johndoe@gmail.com"
          />
        </div>
      </div>
      <div className="w-full">
        <label>Message</label>
        <textarea
          value={emailDetails.msg}
          onChange={(e) => handleTextInput(e.target.value, "msg")}
          className="w-full p-2 bg-white border border-gray-400 rounded"
          name="message"
          placeholder="Write here..."
          cols="20"
          rows="10"
        ></textarea>
      </div>

      <button
        value
        onClick={handleSubmit}
        className="px-4 py-2 mt-8 ml-auto text-white bg-green-500 rounded"
      >
        Send
      </button>
    </form>
  );
};

export default Contact;
