import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="bg-[#025cca] p-3 text-xl font-bold rounded-full text-white cursor-pointer hover:bg-[#0274ff] transition-colors">
        <IoArrowBackOutline/>
    </button>
  )
}

export default BackButton