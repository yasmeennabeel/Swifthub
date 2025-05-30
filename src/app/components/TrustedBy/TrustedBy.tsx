export default function TrustedBy({ align = "left" }) {
  const alignmentClasses =
    align === "center"
      ? "items-center text-center"
      : "items-start text-start";

  return (
    <div className={`mx-auto p-4 w-full max-w-screen-xl my-5`}>
      <div className=" justify-center">
        <div className={`gap-3 flex flex-col ${alignmentClasses}`}>
          <h1 className="text-4xl mona-font font-semibold">Trusted by Businesses</h1>
          <p className="text-gray-600 text-sm w-1/2">
            We deliver reliability with cutting-edge technology, real-time tracking, and a commitment to on-time performance, ensuring seamless logistics solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
