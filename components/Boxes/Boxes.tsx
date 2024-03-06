import './boxes.css'
export default function Boxes() {
  return (
    <div className="mt-14 flex justify-around items-center">
      <div className=" rounded-[6px]  ">
        <div className="w-[500px] p-9  gap-[100px]  border-r-2">
          <div>
            <h1 className="text-3xl text-[#212121] text-bold w-[664px]  text-left">
          
              Experience World-class Agile <br />
              Product Development
            </h1>
          </div>
          <div className="w-[450px] h-[143px] py-5 opacity-[70%]">
            Harness digitized business solutions comprising web, android and iOS
            app solutions leveraging Blockchain, AI Chatbots, Machine Learning
            and IoT technologies for your startup or enterprise. Build and
            deploy thriving agile solutions that help you design, develop, and
            scale.
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-center items-center ">
            <div className="card  p-6 ml-6 w-[189px] h-[154px] text-center justify-center gap-3">
              <h1 className="text-[#212121] text-3xl">3+</h1>
              <p className='font-sans'>years experience</p>
            </div>

            <div className="card  p-6 ml-6 w-[189px] h-[154px] text-center justify-center gap-3">
              <h1 className="text-[#212121] text-3xl">100%</h1>
              <p className='capitalize font-sans'>project delivered</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="card  p-6 ml-6 w-[189px] h-[154px] text-center justify-center gap-3">
              <h1 className="text-[#212121] text-3xl">1+</h1>
              <p className='font-sans'>app developed</p>
            </div>
            <div className="card  p-6 ml-6 w-[189px] h-[154px] text-center justify-center gap-3">
              <h1 className="text-[#212121] text-3xl">6+</h1>
              <p className='font-sans'>website built</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
