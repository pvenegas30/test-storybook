

import React, { useState } from "react";
import "./globals.css";
import { Button } from "./Button";
import PropTypes from "prop-types";
const defaultFormData = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

const Form = ({ title, first, last, mail, tel, text, topic }: any): JSX.Element => {

  const [formData, setFormData] = useState(defaultFormData);
  const { name, lastname, email, phone, message, subject } = formData;

  const onChange = (e:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  return (
    <div className='container bg-white m-auto flex flex-col justify-center w-full h-full px-3 lg:w-[50%] lg:pb-[200px] lg:px-[50px] '>
      <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1000px] px-2 py-2 w-full '>
          <h2 className='text-center font-bold  mb-0 pb-0 text-xl sm:text-2xl tracking-[8px] text-black'>
            {title}
          </h2>

          <div className='flex w-full'>
            <div className='bg-white w-full h-auto '>
              <div className='pt-4 px-8 lg:px-3 '>
                
                <form
                  onSubmit={onSubmit}
                  className="w-full text-black"
                  method='POST'
                >
                    <div  className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>
                        {first}
                      </label>
                      <input
                        maxLength={15}
                        value={name}
                        id="name"
                        onChange={onChange}
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='name'
                        name='name'
                        required
                      />
                    </div>
                    <div  className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>
                        {last}
                      </label>
                      <input
                        maxLength={15}
                        value={lastname}
                        id="lastname"
                        onChange={onChange}
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='lastname'
                        name='lastname'
                        required
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>
                        {tel}
                      </label>
                      <input
                        maxLength={12}
                        value={phone}
                        id="phone"
                        onChange={onChange}
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='phone'
                        name='phone'
                        required
                      />
                    </div>
                  
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>
                      {mail}
                    </label>
                    <input
                      maxLength={30}
                      value={email}
                      id="email"
                      onChange={onChange}
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                      required
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>
                      {topic}
                    </label>
                    <input
                      maxLength={25}
                      value={subject}
                      id="subject"
                      onChange={onChange}
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='subject'
                      name='subject'
                      required
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>
                      {text}
                    </label>
                    <textarea
                      maxLength={60}
                      value={message}
                      id="message"
                      onChange={onChange}
                      className='resize-none border-2 rounded-lg p-3 border-gray-300'
                      // rows ='7'
                      name='message'
                    ></textarea>
                  </div>

                    {/* <button type="submit" className='w-full flex justify-center active:bg-black text-xl font-bold md:w-[100%] rounded-full p-3 mb-10 sm:mb-0 text-white mt-4 bg-black hover:bg-teal-900 transition-colors'>
                      Send
                    </button> */}

              	    <Button primary label="Send"/>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

Form.PropTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  first: PropTypes.string, 
  last: PropTypes.string, 
  mail: PropTypes.string, 
  tel: PropTypes.string, 
  text: PropTypes.string, 
  topic: PropTypes.string
};