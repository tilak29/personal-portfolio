  const Form = () => {
    return(
        <>
        <div className="mt-4 flex flex-col gap-2 max-w-[97%]">
            <div className="flex gap-2 ">
        <div class="relative basis-full">
  <input type="text" id="email-address-icon" class="bg-[#14101b] border border-[#100d15] text-white font-Roboto rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"/>
</div>
            
<div class="relative basis-full">
  <input type="text" id="email-address-icon" class="bg-[#14101b] border border-[#100d15] text-white font-Roboto rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"/>
</div>
</div>

<div class="relative">
  <input type="text" id="email-address-icon" class="bg-[#14101b] border border-[#100d15] text-white font-Roboto rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject"/>
</div>

<textarea id="message" rows="4" class="block p-2.5 w-full font-Roboto text-white bg-[#14101b] rounded-lg border border-[#100d15] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a Message..."></textarea>
        
        <div className="self-end">
        <button class="button mt-8">
        Send Message!
        </button>
        </div>
        
        </div>
        </>
    )
  }

  export default Form;