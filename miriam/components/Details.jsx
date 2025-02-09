"use client";

const Details = ({ name }) => {
    // Define details for each project
    const projectDetails = {
        "Route Optimizer": {
            role: "UI Dev",
            context: "Hackaton",
            year: "2023",
        },
        "Fake News Detector": {
            role: "UI Dev",
            context: "Hackathon",
            year: "2023",
        },
        "Reading Assistant": {
            role: "UI Dev",
            context: "Hackaton",
            year: "2022",
        },
        "Financial Tool": {
            role: "Full Dev",
            context: "Contractor",
            year: "2025",
        },
    };

    // Get details for the current project, or set defaults
    const details = projectDetails[name] || {
        role: "Developer",
        context: "General Project",
        year: "N/A",
    };

    return (
        <div className="flex md:mt-0 mt-[4vh] justify-between text-[3vw] md:text-[1vw]">
            {["ROLE", "CONTEXT", "YEAR"].map((label, index) => (
                <div key={index} className="w-1/3 place-items-center">
                    <div>{label}</div>
                    <div
                        style={{ animationDelay: `${0.3 + index * 0.3}s` }}
                        className="font-extrabold transition-all ease-in-out duration-500 fade-in-left rounded-full mt-2 w-10/12 text-center mx-auto px-2 md:px-4 py-1 md:py-2 flex justify-evenly place-items-center gap-3 md:gap-2 hover:bg-[#8090d7] bg-[#9eaffc]"
                    >
                        {label === "ROLE" ? details.role : label === "CONTEXT" ? details.context : details.year}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Details;
