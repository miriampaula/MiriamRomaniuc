import { BiMessageRounded } from "react-icons/bi";

export default function ContactButton() {
    return (
        <div className={`flex text-[1vw] px-5 gap-3 border border-gray-500 transition-all ease-in-out duration-500  py-2 hover:px-8 hover:cursor-pointer mx-auto bg-white rounded-full place-items-center spinningBorder`}>
            <BiMessageRounded color="black" />
            Let's Talk
        </div>
    );
}
