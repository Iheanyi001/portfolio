import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { handleError } from "../utils/helperFunctions";



const Contact = () => {
  const formRef = useRef();
  const [showModal, setShowModal] = useState({active:false, msg:''})
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [valid, setValid] = useState({
    from_name_error: '',
    from_email_error : '',
    message_error : '',
  })

  const [loading, setLoading] = useState(false);

  const Modal = (message) =>{
    return(
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={()=>setShowModal({active:false, msg:''})}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  )
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoading(true);
    
    if(handleError('Name', form.name, {required:true}) || handleError('Email', form.email, {required:true}) || handleError('Message', form.message, {required:true})){
      setValid({from_name_error: handleError('Name', form.name, {required:true}),
      from_email_error : handleError('Email', form.email, {required:true}),
      message_error : handleError('Message', form.message, {required:true})})
      setShowModal({active:true, msg:'Please fill out the contact form correctly and try again'})
      //console.log(valid.from_email_error, valid.from_name_error, valid.message_error)
      setLoading(false);
    }
    else{
      setValid({from_name_error: '',
      from_email_error : '',
      message_error : ''})
    emailjs
      .send(
        'service_wjp8uz2',
        'template_ysk0yrm',
        {
          from_name: form.name,
          to_name: "Iheanyi Uko",
          from_email: form.email,
          to_email: "ukoiheanyiking@gmail.com",
          message: form.message,
        },
        'Dq_2RfTxfdPKchW_4'
      )
      .then(
        () => {
          setLoading(false);
          setShowModal(true)
         // alert("Thank you. I will get back to you as soon as possible.");
          setShowModal({active:true, msg:'Thank you. I will get back to you as soon as possible.'})

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setShowModal(true)

          setShowModal({active:true, msg:'Ahh, something went wrong. Please try again.'})

          //alert("Ahh, something went wrong. Please try again.");
        }
      );
    }
  };

  return (
    <div>
      {showModal.active && Modal(showModal.msg)}
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            
            <span className='text-white font-medium mb-4'>Your Name</span>
            {valid.from_name_error && <span  style={{ color:'#f00' }}>{valid.from_name_error}</span>}
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            {valid.from_email_error && <span  style={{ color:'#f00' }}>{valid.from_email_error}</span>}
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            {valid.message_error && <span  style={{ color:'#f00' }}>{valid.message_error}</span>}
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
