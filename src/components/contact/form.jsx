import emailjs from '@emailjs/browser';
import { useRef } from 'react';
 
 const Form = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLETE_KEY, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return(
        <>
        <div >
        <form ref={form} className="mt-4 flex flex-col gap-2 max-w-[97%]" onSubmit={sendEmail}>
            <div className="flex gap-2 ">
        <div class="relative basis-full">
  <input type="text" name="name" id="email-address-icon" class="bg-[#14101b] border border-[#100d15] text-white font-Roboto rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"/>
</div>
            
<div class="relative basis-full">
  <input type="email" name="email" id="email-address-icon" class="bg-[#14101b] border border-[#100d15] text-white font-Roboto rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"/>
</div>
</div>

<div class="relative">
  <input type="text" name="subject" id="email-address-icon" class="bg-[#14101b] border border-[#100d15] text-white font-Roboto rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject"/>
</div>

<textarea id="message" name="message" rows="4" class="block p-2.5 w-full font-Roboto text-white bg-[#14101b] rounded-lg border border-[#100d15] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a Message..."></textarea>
        
        <div className="self-end">
        {/* <button class="button mt-8">
        Send Message!
        </button> */}
        <button type="submit" class="button mb-6 mt-8" value="Send Message!" >
        Send Message!</button>
        </div>
        </form>
        </div>

        {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}


        </>
    )
  }

  export default Form;