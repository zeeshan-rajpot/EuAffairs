import { useParams } from "react-router-dom";
import { format } from "date-fns";
import Sidebar from "../../../Compunents/SideBar";
import { userApi } from "../../../api";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ArticleDetail = () => {
  const navigate = useNavigate();

  const {
    heading,
    createdAt,
    readTime,
    category,
    reportDescription,
    image,
    id,
  } = useParams();
  // alert(createdAt)

  const handleSaveArticle = async () => {
    try {
      const response = await userApi.savearticle(id);
      console.log("Article saved:", response);
      toast.success(error.response.data.message);
    } catch (error) {
      console.error("Error saving article:", error.response.data.message);
      toast.error(error.response.data.message);
      // Handle error, show an error message, etc.
    }
  };

  const formatDate = (isoString) => {
    try {
      const formattedDate = format(new Date(isoString), "MMMM dd, yyyy"); // Adjust the format string as per your requirements
      return formattedDate;
    } catch (error) {
      console.error("Error formatting date:", error);
      return isoString; // Return the original string if formatting fails
    }
  };
  return (
    <>
      <Toaster />

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-10">
          <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
            <Sidebar />
          </div>
          <div className="col-span-8 lg:col-span-8 p-8 pt-0">
            <div className="flex items-center justify-between border-b-2 py-8">
              <div className="flex  space-x-2 cursor-pointer" onClick={() => navigate(-1)}>
                <img src="/back.png" alt="back_icon" className="w-5" />
                <p>Go Back</p>
              </div>

              <div className="flex items-center justify-between">
                <img
                  src="/savegreen.png"
                  className="cursor-pointer"
                  alt=""
                  onClick={handleSaveArticle}
                />
                <p className="ms-2 cursor-pointer" onClick={handleSaveArticle}>
                  Save
                </p>
              </div>
            </div>
            <div>
              <div className="w-full">
                <img src={image} className="w-[50%] mx-auto" alt="" />
              </div>
              <div className="flex items-center justify-between border-b-2 pb-8">
                <h2 className="text-2xl md:text-4xl font-semibold text-theme">
                  {heading}
                </h2>
                <div className="flex items-center justify-between text-secColor font-semibold ">
                  {formatDate(createdAt)}
                </div>
              </div>
              <div className="py-8">
                <p className="text-xl md:text-2xl"> {reportDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
