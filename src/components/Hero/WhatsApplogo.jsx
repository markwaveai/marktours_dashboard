import React from 'react'
import whatsapp from "./../../../public/assets/images/WhatsApp.png"

const WhatsApplogo = () => {
  return (
    <div className="fixed bottom-6  right-4 z-50 w-[60px] h-[100px]">
      <a href="https://api.whatsapp.com/send?phone=9247534848&text=Hello" target='_blank'>
        <img src={whatsapp} alt="" />
      </a>
      <p className='text-xs font-bold text-black bg-white/80 px-2 py-1 rounded-full shadow-md backdrop-blur-sm whitespace-nowrap -ml-4 mt-1'>Chat Now</p>
    </div>
  )
}

export default WhatsApplogo
