import Button from "../Utills/Button";

const Partners = () => (

  <section className="flex flex-col items-center justify-center mb-32 sm:mb-16 md:mb-32 gap-12">
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-graphik text-center mb-2">
        PARTNERS
      </h1>
      <p className="font-graphik text-sm sm:text-base md:text-lg text-center text-white">
        We focus on ergonomics and meeting you where you work.
      </p>
      <p className="font-graphik text-sm sm:text-base md:text-lg text-center text-white">
        It's only a keystroke away.
      </p>
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8">
      <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" src="./assets/apple.png" />
      <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" src="./assets/apiary-logo.png" />
      <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" src="./assets/android.png" />
      <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" src="./assets/bsb.png" />
      <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" src="./assets/bnb.png" />
      <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" src="./assets/ibm.png" />
    </div>


    <div className="mt-8">
      <Button text="All Partners" />
    </div>
  </section>

);

export default Partners;
