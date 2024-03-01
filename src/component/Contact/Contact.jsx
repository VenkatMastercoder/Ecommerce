//import { useState } from "react";

import { useForm } from "react-hook-form";
import { isDirty, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  // const { register } = useForm();
  // 1. Form User Enter - getValue - {...register("username")}
  // 2. Form Vaildation of User Data - Zod
  // 3. Hande Submit - {} -> get the Data -> send to Backend

  // Extra
  /**
   * watch() - to Console.log(the vaule for user Enter)
   * defaultValues - to Show to User on Inital Render of Form Fields
   * errors - To Display the Error to User
   * **/

  const schema = z.object({
    names: z.string().min(3, "Need Some Invaild Name"),
    email: z.string().email(),
    number: z.string().min(10),
    message: z.string().min(2),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Venkat",
    },
    mode: "onChange",
  });

  console.log("vaild:", isValid, isDirty);

  // const name = watch("username");
  // const email = watch("email"); // email : jnsvjkgrnsdkjgvnrs
  // const number = watch("number");
  // const message = watch("message");

  console.log(errors);

  console.log(errors.email?.message);

  const onSubmit = (data) => {
    console.log(data);
    reset({ ...data })
  };

  console.log("HIII");
  return (
    <>
      <p>Contact Page</p>

      <h1>Contact Form </h1>
      {/**
       * Onsumbit Button Form Will Trig
       * Enter Form Will Trig
       * **/}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="names"
            className="border-2 border-red-500"
            {...register("names")} // names :
            placeholder="Enter Name"
          />
          <p className="text-red-500">{errors.names?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="border-2 border-red-500"
            {...register("email")} // email :
            placeholder="Enter email"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="number">Phone Number</label>
          <input
            id="number"
            className="border-2 border-red-500"
            {...register("number")}
            placeholder="Enter Number"
          />
          <p className="text-red-500">{errors.number?.message}</p>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            cols={10}
            className="border-2 border-red-500"
            {...register("message")}
            placeholder="Enter Message"></textarea>
          <p className="text-red-500">{errors.message?.message}</p>
        </div>

        {isDirty ? (
          <button
            type="submit"
            className="bg-green-500 px-8 py-4"
            disabled={isValid}>
            Sumbit
          </button>
        ) : (
          <button type="submit" className="bg-gray-500 px-8 py-4">
            Sumbit
          </button>
        )}
      </form>
    </>
  );
};

export default Contact;
