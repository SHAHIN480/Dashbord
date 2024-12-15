import { useState } from "react";

const Settings = () => {

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  // email toggle btn

  const [Email, setEmail] = useState(false);
  const handleonEmail = () => {
    setEmail(!Email)
  }
  // sms toggle 

  const [sms, setsms] = useState(false);
  const handleonSms = () => {
    setsms(!sms)
  }


  return (
    <div className='w-full h-full flex flex-col  items-start justify-start px-5 gap-4'>
      <div className='pt-4'>
        <h3 className='text-white text-[26px] tracking-widest font-bold'>User Settings</h3>
        <p className='font-semibold text-[16px] text-white/80'>Manage Your User Notification Settings </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="flex items-center justify-center gap-2">
          <label className="switch">
            <input type="checkbox" checked={isOn} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <span className="font-semibold text-[16px] text-white">Course Notification</span>
        </div>
        <div className="flex items-center justify-center gap-2 opcaty ">
          <label className="switch relative inline-block w-[60px] h-[30px]">
            <input type="checkbox" checked={Email} onChange={handleonEmail} />
            <span className="slider_email"></span>
          </label>
          <span className="font-semibold text-[16px] text-white">Email Alearts</span>
        </div>
        <div className="flex items-center justify-center gap-2 opcaty ">
          <label className="switch">
            <input type="checkbox" checked={sms} onChange={handleonSms} />
            <span className="slider_email"></span>
          </label>
          <span className="font-semibold text-[16px] text-white">Sms Alearts</span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <div>
          <span className="font-semibold text-[16px] text-white/80">Notification Frequency</span>
        </div>
        <div className="text-white">
          <select className="w-[500px] px-4 h-[35px] rounded-lg bg-gray-950" name="select" id="">
            <option value="Daily">Daily</option>
            <option value="weekly">weekly</option>
            <option value="10 Day">10 Day</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-[170px]  h-[40px] font-semibold text-[16px] text-center bg-indigo-600 rounded-full text-white">Update Setting</button>
      </div>
    </div>
  )
}

export default Settings
