import {
  LuHeartHandshake,
  LuRocket,
  LuBrainCircuit,
  LuLaugh,
} from "react-icons/lu";

const features = [
  {
    name: "Customer-Centric Expertise",
    description:
      "Agado places your customers at the heart of our strategy, ensuring every interaction is optimized for lasting success. Our deep industry knowledge and digital trends expertise drive revenue and competitiveness.",
    icon: LuLaugh,
  },
  {
    name: "Result-Oriented Analytics",
    description:
      "Agado employs a data-driven, results-centric methodology to guide every aspect of our consulting services.",
    icon: LuRocket,
  },
  {
    name: "Agile and Adaptive Strategies",
    description:
      "In a world where customer needs evolve rapidly, Agado leads with an agile mindset. We embrace new technologies and trends, crafting strategies that adapt to industry shifts for long-term success.",
    icon: LuBrainCircuit,
  },
  {
    name: "Building Lasting Relationships",
    description:
      "Agado stands out for its commitment to more than just transactions. We're dedicated to cultivating enduring partnerships with our clients.",
    icon: LuHeartHandshake,
  },
];

export default function CoreValue() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
