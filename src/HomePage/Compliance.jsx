const Compliance = () => {
  return (
    <div>
      <div className="mt-section max-w-5xl mx-auto px-5 lg:px-0">
        <div className="flex items-center flex-col gap-2 text-xs md:text-sm">
          <p className="text-center">
            Check the background of this advisor on{" "}
            <span>
              <a
                href="https://brokercheck.finra.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                FINRA's BrokerCheck
              </a>
            </span>
          </p>
          <p className="text-center">
            Securities and Advisory Services Offered Through{" "}
            <span className="font-semibold">Harbour Investments, Inc.</span> |
            Member{" "}
            <a
              href="https://www.finra.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              FINRA
            </a>{" "}
            and{" "}
            <a
              href="https://www.sipc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              SIPC
            </a>
          </p>
          <p className="text-center">
            Securities licensed in CA, CO, FL, IL, NC, OH, SC, WI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
