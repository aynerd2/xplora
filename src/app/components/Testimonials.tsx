


const Testimonials = () => (
  
  <section className="flex flex-col items-center justify-center mb-8 sm:mb-16 md:mb-32 gap-8">
    <h1 className="text-white text-2xl font-graphik">TESTIMONIALS</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-4xl px-4 sm:px-8 lg:px-16">
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className={`flex flex-col w-full h-auto bg-[#040828] p-8 items-start gap-4 
        border border-[#364250] rounded-lg`}
      >
        <div className="flex flex-row items-center gap-4">
          <img
            className="w-16 h-16 text-tiny rounded-full"
            src={`https://i.pravatar.cc/150?u=a04258a2462d826712d-${index}`}
          />
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs text-white font-graphik">Claire Bell</p>
            <p className="text-xs text-white font-graphik">Software Engineer</p>
          </div>
        </div>

        <p className="text-basic text-white font-graphik">
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year. Slate helps you see how many
          more days you need to work to reach your financial goal for the month
          and year.
        </p>
      </div>
    ))}
  </div>


  </section>
);

export default Testimonials;
