import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaFilePdf, FaImage, FaTrashAlt, FaVideo, FaCopy, FaClosedCaptioning, FaCross } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const UserData = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [fileType, setFileType] = useState("");
  const [formData, setFormData] = useState({
    author: "",
    cloudinaryLink: "",
  });
  const [dataList, setDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/data");
      setDataList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFileUpload = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const fileType = file.type;

    const formData = new FormData();
    formData.append("file", file);

    try {
      if (fileType.includes("image") || fileType.includes("video")) {
        formData.append("upload_preset", "j1zytg3aasish");
        formData.append("cloud_name", "dt3n1klng");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dt3n1klng/upload",
          formData
        );
        const fileURL = res.data.url;
        setImage(fileURL);

        setFormData((prevFormData) => ({
          ...prevFormData,
          cloudinaryLink: fileURL,
        }));
      } else if (fileType.includes("pdf")) {
        formData.append("upload_preset", "j1zytg3aasish");
        formData.append("cloud_name", "dt3n1klng");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dt3n1klng/upload",
          formData
        );
        const fileURL = res.data.url;
        setFormData((prevFormData) => ({
          ...prevFormData,
          cloudinaryLink: fileURL,
        }));
      }
    } catch (error) {
      console.log("Error during file upload:", error);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileTypeChange = (e) => {
    setFileType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { ...formData, fileType };
      const { data } = await axios.post(
        "http://localhost:8000/api/upload",
        payload
      );
      if (data?.success) {
        toast.success(data?.message);
        setFormData({
          author: "",
          cloudinaryLink: "",
        });
        setImage("");
        setFileType("");
        fetchData(); // Refresh the data list after submission
      }
    } catch (error) {
      console.log("Error during form submission:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/delete/${id}`
      );
      if (data?.success) {
        toast.success(data?.message);
        fetchData(); // Refresh the data list after deletion
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const openModal = (cloudinaryLink) => {
    setModalContent(cloudinaryLink);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  const getFileIcon = (cloudinaryLink) => {
    if (cloudinaryLink.endsWith(".pdf")) {
      return (
        <span className="text-red-500 ml-2">
          <FaFilePdf />
        </span>
      ); // Example: Display PDF icon
    } else if (
      cloudinaryLink.endsWith(".mp4") ||
      cloudinaryLink.endsWith(".mov") ||
      cloudinaryLink.endsWith(".avi")
    ) {
      return (
        <span className="text-green-500 ml-2">
          <FaVideo />
        </span>
      ); // Example: Display Video icon
    } else if (cloudinaryLink.match(/\.(jpeg|jpg|gif|png|webp)$/)) {
      return (
        <span className="text-blue-500 ml-2">
          <FaImage />
        </span>
      ); // Example: Display Image icon
    } else {
      return null; // Handle other file types as needed
    }
  };

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen py-8">
      <Toaster />
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Add New Data Form */}
          <form
            className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 md:p-8 mb-8 md:mb-0"
            style={{ height: "500px", overflow: "hidden" }}
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-center mb-4">Add New Data</h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="author" className="font-medium">
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="border border-gray-300 p-2 rounded-md"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="fileType" className="font-medium">
                  File Type:
                </label>
                <select
                  id="fileType"
                  name="fileType"
                  className="border border-gray-300 p-2 rounded-md"
                  value={fileType}
                  onChange={handleFileTypeChange}
                  required
                >
                  <option value="">Select File Type</option>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="pdf">PDF</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="cloudinaryLink" className="font-medium">
                  File:
                </label>
                <input
                  type="file"
                  id="cloudinaryLink"
                  name="cloudinaryLink"
                  className="border border-gray-300 p-2 rounded-md"
                  onChange={handleFileUpload}
                />
                {image && (
                  <img
                    src={image}
                    alt="Uploaded File"
                    className="h-24 w-24 mt-4 object-cover rounded-md"
                  />
                )}
              </div>
              <button
                disabled={loading}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                type="submit"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>

          {/* Data List */}
          <div className="w-full md:w-3/4 bg-white shadow-md rounded-lg p-4 md:p-8">
            <h2 className="text-2xl font-bold text-center mb-4">Data List</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4">Serial No</th>
                    <th className="py-2 px-4">Author</th>
                    <th className="py-2 px-4">File Type</th>
                    <th className="py-2 px-4" style={{ width: "200px" }}>
                      Cloudinary Link
                    </th>
                    <th className="py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dataList.map((data, index) => (
                    <tr key={data._id} className="border-t">
                      <td className="py-2 px-4 text-center">{index + 1}</td>
                      <td className="py-2 px-4">{data.author}</td>
                      <td
                        onClick={() => openModal(data.cloudinaryLink)}
                        className="py-2 px-4 text-center flex items-center justify-center mt-2"
                      >
                        {getFileIcon(data.cloudinaryLink)}
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button
                          className="text-blue-500 hover:underline focus:outline-none truncate mb-4"
                          onClick={() => openModal(data.cloudinaryLink)}
                        >
                          <span className="truncate">{data.cloudinaryLink}</span>
                        </button>
                      </td>
                      <td className="py-2 px-4 text-center flex items-center justify-center gap-3">
                        <button
                          className="text-green-500 hover:text-green-700 focus:outline-none"
                          onClick={() => handleCopy(data.cloudinaryLink)}
                        >
                          <FaCopy />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 focus:outline-none"
                          onClick={() => handleDelete(data._id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-4 rounded-md w-full max-w-4xl">
              <button className="float-right text-red-500" onClick={closeModal}>
                <span className="sr-only">Close Modal</span>
                <ImCross/>
              </button>
              <div className="flex justify-center items-center">
                {modalContent && (
                  <div className="relative w-full h-96">
                    {modalContent && modalContent.endsWith(".pdf") ? (
                      <iframe
                        title="file-preview"
                        className="w-full h-full"
                        src={modalContent}
                        frameBorder="0"
                      />
                    ) : modalContent.endsWith(".mp4") ||
                      modalContent.endsWith(".mov") ||
                      modalContent.endsWith(".avi") ? (
                      <video controls className="w-full h-full">
                        <source src={modalContent} type={fileType} />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={modalContent}
                        alt="File Preview"
                        className="max-w-full max-h-full object-contain"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserData;
