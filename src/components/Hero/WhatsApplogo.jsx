import React from 'react'
import whatsapp from "./../../../public/assets/images/WhatsApp.png"

const WhatsApplogo = () => {
  return (
   <div className="fixed bottom-6  right-4 z-50 w-[60px] h-[100px]">
            <a  href="https://api.whatsapp.com/send?phone=9247534848&text=Hello" target='_blank'>
                <img src={whatsapp} alt="" />
            </a>
            <p className='text-xs font-semibold h-4'>Quick chat</p>
            </div>
  )
}

export default WhatsApplogo
