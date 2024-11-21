export default function BigButton({ message, icon: Icon }) {
    return (
        <div className={`flex text-[1vw] z-30 px-5 gap-3 border hover:border-transparent border-gray-500 transition-all ease-in-out duration-500 py-2 hover:px-8 hover:cursor-pointer mx-auto bg-white hover:bg-white/90 rounded-full place-items-center spinningBorder`}>
            {/* Dynamically render the passed icon */}
            {Icon && <Icon color="black" />}
            <span>{message}</span>
        </div>
    );
}
