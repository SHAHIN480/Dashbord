import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Billing = () => {
  return (
    <div className='billing w-full h-full flex flex-col  items-start justify-start px-5 gap-4'>
      <div className='pt-4'>
        <h3 className='text-white text-[26px] tracking-widest font-bold'>Payment History</h3>
        <p className='font-semibold tracking-wide text-[16px] text-white/80'>View Your Enrolled Courses</p>
      </div>
      <div className='mt-3 w-full flex items-center justify-between gap-2'>
        <div className='w-[200px] bg-gray-950 h-[40px] text-white tracking-wide text-[14px] font-semibold rounded-md px-2 flex items-center justify-between'>
          <select className=' bg-gray-950 w-full h-[40px] ' >
            <option value="N/A">All Types</option>
            <option value="1">2</option>
            <option value="2">3</option>
          </select>
        </div>
      </div>
      <div className="w-full h-full px-11 bg-gray-950">
        <Carousel loop={true}>
          <CarouselContent>
            <CarouselItem>
              <div className=" w-[900px]  py-3 overflow-auto h-full  flex-col items-start justify-between text-white rounded-sm">
                <div className="flex items-center justify-between w-full h-[35px] bg-gray-800 px-2 py-2 rounded-md">
                  <div className="flex items-center justify-start w-[300px] h-[40px] font-semibold tracking-wide text-[16px] text-white/80 ">Date</div>
                  <div className=" flex items-center justify-center  w-[300px] h-[35px] font-semibold tracking-wide text-[16px] text-white/80 ">Account</div>
                  <div className=" flex items-center justify-center  w-[300px] h-[35px] font-semibold tracking-wide text-[16px] text-white/80  ">Payment Method</div>
                </div>
                <div className="flex items-center justify-between ">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 "><span>11/08/24</span></div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]"><span>$15</span></div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80"><span>Credit Card</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">11/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$20</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2">11/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$30</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2">11/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$15</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">11/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$30</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">11/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] ">$20</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-end justify-end mt-3 px-3 gap-4">
                  <span classname="font-semibold tracking-wide text-[16px] text-white/80">Rows per page:100</span> <p>1-3 of 3</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className=" w-[900px]  py-3 overflow-auto h-full  flex-col items-start justify-between text-white rounded-sm">
                <div className="flex items-center justify-between w-full h-[35px] bg-gray-800 px-2 py-2 rounded-md">
                  <div className="flex items-center justify-start w-[300px] h-[40px] font-semibold tracking-wide text-[16px] text-white/80 ">Date</div>
                  <div className=" flex items-center justify-center  w-[300px] h-[35px] font-semibold tracking-wide text-[16px] text-white/80 ">Account</div>
                  <div className=" flex items-center justify-center  w-[300px] h-[35px] font-semibold tracking-wide text-[16px] text-white/80  ">Payment Method</div>
                </div>
                <div className="flex items-center justify-between ">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 "><span>12/08/24</span></div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]"><span>$15</span></div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80"><span>Credit Card</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">12/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$20</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2">12/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$30</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2">12/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$15</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">12/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$30</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">12/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] ">$20</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-end justify-end mt-3 px-3 gap-4">
                  <span>Rows per page:100</span> <p>2-3 of 3</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className=" w-[900px]  py-3 overflow-auto h-full  flex-col items-start justify-between text-white rounded-sm">
                <div className="flex items-center justify-between w-full h-[35px] bg-gray-800 px-2 py-2 rounded-md">
                  <div className="flex items-center justify-start w-[300px] h-[40px] font-semibold tracking-wide text-[16px] text-white/80 ">Date</div>
                  <div className=" flex items-center justify-center  w-[300px] h-[35px] font-semibold tracking-wide text-[16px] text-white/80 ">Account</div>
                  <div className=" flex items-center justify-center  w-[300px] h-[35px] font-semibold tracking-wide text-[16px] text-white/80  ">Payment Method</div>
                </div>
                <div className="flex items-center justify-between ">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 "><span>13/08/24</span></div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]"><span>$15</span></div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80"><span>Credit Card</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">13/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$20</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2">13/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$30</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2">13/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$15</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">13/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px]">$30</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className=" flex items-center justify-start w-[300px] h-[40px] px-2 ">13/08/24</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] ">$20</div>
                  <div className=" flex items-center justify-center w-[300px] h-[40px] border-l-[1px] font-semibold tracking-wide text-[16px] text-white/80">Credit Card</div>
                </div>
                <div className="flex items-end justify-end mt-3 px-3 gap-4">
                  <span classname="font-semibold tracking-wide text-[16px] text-white/80">Rows per page:100</span> <p>3-3 of 3</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="mt-[180px] " />
          <CarouselNext className="mt-[180px]" />
        </Carousel>

      </div>
    </div>
  )
}

export default Billing
