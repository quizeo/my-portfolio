import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        message: "Please fill in all fields",
        type: "error",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        message: "Please enter a valid email address",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ message: "", type: null });

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({
          message: "Message sent successfully! I'll get back to you soon.",
          type: "success",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus({
        message: "Something went wrong. Please try again later.",
        type: "error",
      });
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="max-w-full w-full mx-auto mt-8 p-6  rounded-lg  "
      style={{
        border: "3px solid var(--secondary)",
        boxShadow: "0 0 5px var(--secondary)",
      }}
    >
      <h1 className="text-2xl font-bold mb-6 text-center">
        Let's Work Together
      </h1>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 text-gray-200"
            style={{
              fontFamily: "var(--font-krona)",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
            placeholder="Your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1 text-gray-200"
            style={{
              fontFamily: "var(--font-krona)",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1 text-gray-200"
            style={{
              fontFamily: "var(--font-krona)",
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 bg-[#2d2d2d] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
            placeholder="What would you like to collaborate on?"
            required
          ></textarea>
        </div>

        {submitStatus.message && (
          <div
            className={`mb-4 p-3 rounded-md ${
              submitStatus.type === "success"
                ? "bg-green-800 text-green-100"
                : "bg-red-800 text-red-100"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-[#fd6c03] text-white rounded-md font-bold uppercase tracking-wider hover:bg-[#e36203] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fd6c03] focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Let's Collaborate"}
        </button>
      </form>
    </div>
  );
};

export default Form;
