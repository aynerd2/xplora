import { FaChartLine, FaRegLightbulb, FaHandsHelping } from 'react-icons/fa';

const Features = () => (
  <section className="bg-primary text-white py-16 px-6">
    <h2 className="text-center text-3xl font-bold mb-8">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center">
        <FaChartLine size={40} className="mb-4 text-accent" />
        <h3 className="text-xl font-semibold">Data Analysis</h3>
        <p className="text-center mt-2">
          Unlock actionable insights with advanced analytics.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <FaRegLightbulb size={40} className="mb-4 text-accent" />
        <h3 className="text-xl font-semibold">Innovative Tools</h3>
        <p className="text-center mt-2">
          Utilize cutting-edge tools to enhance your workflow.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <FaHandsHelping size={40} className="mb-4 text-accent" />
        <h3 className="text-xl font-semibold">Collaboration</h3>
        <p className="text-center mt-2">
          Seamlessly collaborate with your team in real-time.
        </p>
      </div>
    </div>
  </section>
);

export default Features;
