import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReportForm() {
  const [formData, setFormData] = useState({
    category: "Doping",
    athleteName: "",
    description: "",
    attachments: [],
    whistleblowerName: "",
    whistleblowerEmail: "",
    athleteSport: "",
  });

  const navigate = useNavigate();

  const submitReport = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/athletes/report-athlete-by-id",
        {
          athleteName: data.athleteName,
          athleteSport: data.athleteSport,
          whistleblowerName: data.whistleblowerName,
          whistleblowerEmail: data.whistleblowerEmail,
          description: data.description,
        }
      );
      console.log(response?.data);
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData({ ...formData, attachments: [...formData.attachments, ...files] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const missingFields = [];
    if (!formData.athleteName) missingFields.push("Athlete's Name");
    if (!formData.description) missingFields.push("Additional Information");
    if (!formData.athleteSport) missingFields.push("Athlete's Sport");

    if (missingFields.length > 0) {
      alert(
        `Please fill the following mandatory fields: ${missingFields.join(", ")}`
      );
      return;
    }

    submitReport(formData);
    navigate("/thank-you");
  };

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#203c5c] mb-4">
          Whistleblower Reporting Channel
        </h1>
        <p className="text-[#203c5c] mb-8">
          If you have credible information regarding any suspected doping
          activities, please use this secure channel to report it.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          {/* Report Category */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-[#203c5c] text-sm font-semibold mb-2"
            >
              Report Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              readOnly
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Whistleblower Name */}
          <div className="mb-6">
            <label
              htmlFor="whistleblowerName"
              className="block text-[#203c5c] text-sm font-semibold mb-2"
            >
              Your Name (Optional)
            </label>
            <input
              type="text"
              id="whistleblowerName"
              name="whistleblowerName"
              value={formData.whistleblowerName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            />
          </div>

          {/* Whistleblower Email */}
          <div className="mb-6">
            <label
              htmlFor="whistleblowerEmail"
              className="block text-[#203c5c] text-sm font-semibold mb-2"
            >
              Your Email (Optional)
            </label>
            <input
              type="email"
              id="whistleblowerEmail"
              name="whistleblowerEmail"
              value={formData.whistleblowerEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            />
          </div>

          {/* Athlete Name */}
          <div className="mb-6">
            <label
              htmlFor="athleteName"
              className="block text-[#203c5c] text-sm font-semibold mb-2"
            >
              Athlete Name
            </label>
            <input
              type="text"
              id="athleteName"
              name="athleteName"
              value={formData.athleteName}
              onChange={handleChange}
              placeholder="Enter athlete's name"
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            />
          </div>

          {/* Athlete Sport */}
          <div className="mb-6">
            <label
              htmlFor="athleteSport"
              className="block text-[#203c5c] text-sm font-semibold mb-2"
            >
              Athlete's Sport
            </label>
            <input
              type="text"
              id="athleteSport"
              name="athleteSport"
              value={formData.athleteSport}
              onChange={handleChange}
              placeholder="Enter athlete's sport"
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            />
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-[#203c5c] text-sm font-semibold mb-2"
            >
              Additional Information
            </label>
            <textarea
              id="description"
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide as much detail as possible. Be specific and descriptive."
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            ></textarea>
          </div>

          {/* Attachments */}
          <div className="mb-6">
            <label
              htmlFor="attachments"
              className="block text-[#203c5c] text-sm font-semibold mb-2"
            >
              Attachments (Optional)
            </label>
            <input
              type="file"
              id="attachments"
              name="attachments"
              multiple
              onChange={handleFileChange}
              className="shadow-md border rounded w-full py-2 px-3 text-[#203c5c] leading-tight focus:outline-none focus:ring-2 focus:ring-[#203c5c]"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="bg-[#203c5c] hover:bg-[#2c577a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#2c577a]"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;
