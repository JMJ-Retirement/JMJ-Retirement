const circleDimensions = 350;
import JeromePic from "../assets/JeromePic.png";

const About = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-5 lg:px-0 mt-section md:flex-row">
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
            fill="#d3d3d3"
          />
        </svg>
        <img
          className="md:absolute md:bottom-10 w-60 max-w-xs md:-left-2 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80 mb-paragraph md:mb-0"
          src={JeromePic}
          alt="Picture of Jerome"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-paragraph">
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center md:text-left">
            About Jerome Jedynak
          </h3>
          <p className="text-base">
            With a steadfast presence in the financial services sector since
            2001 and a specialized focus on retirement planning since 2008,
            Jerome Jedynak stands as a distinguished{" "}
            <div className="font-semibold inline-block">401(k) Advisor</div>. At
            the helm of JMJ Retirement Solutions, Jerome stewards over{" "}
            <div className="font-semibold inline-block">
              $50 million in assets
            </div>
            , delivering bespoke retirement strategies for small businesses
            throughout the Milwaukee region.<br></br>
            <br></br>
            Jerome’s philosophy is rooted in a{" "}
            <div className="font-semibold inline-block">
              white-glove approach
            </div>
            —ensuring a seamless and comprehensive management of retirement
            plans with unwavering reliability. His expertise is matched by his
            accessibility, making him a favored advisor among his clientele.
            <br></br>
            <br></br>
            Before his venture creating JMJ Retirement, Jerome honed his
            financial acumen at JPMorgan Chase in Chicago, where he served as a
            banker. A proud alumnus of the University of Illinois at
            Urbana-Champaign, he holds a B.A. in Economics and is fully licensed
            with his Series 6, 7, 63, and 65 securities licenses.
            <br></br>
            <br></br>
            Jerome’s life outside the office is rich with family, community, and
            fitness pursuits. Residing in Franklin, WI with his family, he is a
            regular at the Croatian Soccer Park, cheering on his son. His
            dedication to health is evident in his commitment to CrossFit, a
            testament to his belief in maintaining balance in all aspects of
            life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
