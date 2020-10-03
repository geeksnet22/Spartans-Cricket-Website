import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data.nameRequired);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "20px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Name</label>
      <input
        name="nameRequired"
        placeholder="Enter your name here..."
        ref={register({ required: true })}
      />
      {errors.nameRequired && <span>Please enter your name</span>}
      <label>Subject</label>
      <input
        name="subjectRequired"
        placeholder="Enter the subject you are enquiring about..."
        ref={register({ required: true })}
      />
      {errors.subjectRequired && (
        <span>Please enter the subject you are enquiring about</span>
      )}
      <label>Message</label>
      <textarea
        name="messageRequired"
        placeholder="Enter your message here..."
        rows={10}
        ref={register({ required: true })}
      />
      {errors.messageRequired && <span>Please enter your message</span>}
      <input type="submit" />
    </form>
  );
}

export default Contact;
