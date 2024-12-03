"use client";
const Details = () => {
    return (
        <div className="flex justify-between text-[1vw]">
            {["ROLE", "CONTEXT", "YEAR"].map((label, index) => (
                <div
                    key={index}
                    className={`w-1/3 place-items-center`}
                >
                    <div>{label}</div>
                    <div
                        style={{ animationDelay: `${0.3 + index * 0.3}s` }}
                        className="font-extrabold transition-all ease-in-out duration-500  fade-in-left rounded-full mt-2 w-10/12 text-center mx-auto px-4 py-2 flex justify-evenly place-items-center gap-2 hover:bg-[#8090d7] bg-[#9eaffc]">
                        {label === "ROLE" ? "UI Dev" : label === "CONTEXT" ? "Hackathon" : "2023"}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Details;
