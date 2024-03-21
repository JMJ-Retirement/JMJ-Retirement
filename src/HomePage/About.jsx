const circleDimensions = 350;
import JeromePic from "../assets/JeromePic.png";

const About = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-5 pb-12 pt-24 md:flex-row">
        <div className="relative flex h-64 justify-center md:w-1/2">
          <svg
            className="absolute -left-44 -top-24 hidden scale-75 md:-left-0 md:-top-0 md:block md:scale-90 lg:left-20 lg:scale-100"
            height={`${circleDimensions}`}
            width={`${circleDimensions}`}
          >
            <circle
              cx={`${circleDimensions / 2}`}
              cy={`${circleDimensions / 2}`}
              r={`${circleDimensions / 2}`}
              strokeWidth="0"
              fill="#b4aa89"
            />
          </svg>
          <img
            className="absolute bottom-10 w-60 max-w-xs md:-left-2 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80"
            src={JeromePic}
            alt="Picture of Jerome"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-6">
            <h3 className="text-center text-5xl font-bold md:text-left">
              About Jerome
            </h3>
            <p className="font-light">
              Jerome Jedynak has been working as an Independent Advisor with
              Harbour Investments since 2008 and has been in the financial
              services industry since 2001. Jerome currently manages $35 million
              dollars in assets for both individuals and corporations. Jerome
              focuses on corporate retirement plan consulting and participant
              services. Jerome manages many of the day-to-day operations for his
              401(k) clients, providing enrollment and ongoing support services
              for plan participants and offers support services for plan
              sponsors. He also takes an active role with his individual
              clients, listening to their needs and creating a workable plan for
              them to help achieve their financial goals. <br></br>
              <br></br>Prior to founding JMJ Retirement Solutions, Jerome
              Jedynak worked in Chicago for JPMorgan Chase as a Banker. An
              Alumnus of the University Of Illinois Champaign-Urbana; Jerome
              earned his B.A. in economics. He holds a Series 6, 7, 63 and 65
              securities licenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
