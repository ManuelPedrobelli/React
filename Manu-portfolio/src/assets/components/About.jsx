export default function About({text}) {
  return (
      <div id="about" className="mb-12 lg:mt-8 mx-auto  flex flex-col lg:flex-row items-center justify-center p-4 lg:p-6 gap-8 ">
          <div className=" flex flex-col items-center lg:items-start">
              <p className="text-left text-sm sm:text-base md:text-2xl p-4 lg:p-6 rounded-lg bg-white shadow-lg">
                  {text.text1}<br></br><br></br>
                  {text.text2}<br></br><br></br>
                  {text.text3}<br></br><br></br>
                  {text.text4}<br></br><br></br>
                <img src="historiaacademica.png" alt="Historia Académica" className="mt-4 w-full" />
              </p>
          </div>
      </div>
  );
}
