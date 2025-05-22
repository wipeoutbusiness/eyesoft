import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FundingGoal } from "../components/FundingGoal";

export function Booking() {
  const createBooking = useMutation(api.bookings.createBooking);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    package: "",
    category: "",
    vision: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.package ||
      !formData.category ||
      !formData.vision
    ) {
      toast.error("Please fill out all fields");
      return;
    }
    try {
      await createBooking(formData);
      toast.success("Booking submitted successfully!");
      setFormData({ name: "", email: "", package: "", category: "", vision: "" });
    } catch {
      toast.error("Failed to submit booking");
    }
  };

  const portraitPackages = [
    {
      name: "Basic",
      price: "$155",
      color: "from-emerald-400 to-emerald-600",
      features: ["1-hour session", "20 edited photos", "Online gallery"],
    },
    {
      name: "Premium",
      price: "$225",
      color: "from-violet-400 to-violet-600",
      features: ["2-hour session", "25 edited photos", "Location Consultation", "2 outfit changes", "10 photocards of your choice"],
    },
    {
      name: "Ultimate",
      price: "$300",
      color: "from-amber-400 to-amber-600",
      features: ["3-hour session", "35 edited photos", "Location Consultation", "2 outfit changes", "5 8x10 photos", "All image files"],
    },
  ];

  const athleticPackages = [
    {
      name: "Game Day",
      price: "$30",
      color: "from-emerald-400 to-emerald-600",
      features: ["Full game coverage", "10 edited action and game pictures"],
    },
    {
      name: "3 Game Coverage",
      price: "$100",
      color: "from-violet-400 to-violet-600",
      features: ["3 game coverage", "35-40 edited pictures", "Simple 30 second mixtape w/ song choice"],
    },
    {
      name: "Elite Athlete",
      price: "$300",
      color: "from-amber-400 to-amber-600",
      features: [
        "Full season coverage",
        "100+ edited photos shots",
        "Season Highlight mixtape",
      ],
    },
  ];

  const packages = formData.category === "Athletics" ? athleticPackages : portraitPackages;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-emerald-900 text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Book Your Session
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl"
          >
            Fill out the form below to schedule your photography session
          </motion.p>
        </div>
      </motion.div>

      {/* Socials below banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-12">
        <div
          className="bg-emerald-100 border border-emerald-300 rounded-2xl py-6 px-8 flex items-center gap-3 text-emerald-900 text-lg font-medium shadow-lg max-w-3xl mx-auto"
          role="alert"
        >
          <p>
            Booking page in progress! The form does not work. If you want to book me, email me at{" "}
            <a
              href="mailto:filmbythomas@gmail.com"
              className="underline hover:text-emerald-700"
            >
              filmbythomas@gmail.com
            </a>{" "}
            or DM me on Instagram!{" "}
            <a
              href="https://instagram.com/eyesofteee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 underline hover:text-emerald-700"
            >
              <InstagramIcon className="w-5 h-5 fill-current" />
              @eyesofteee
            </a>
          </p>
        </div>
      </div>

      {/* Main form area with blur overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blur overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-2xl pointer-events-none z-0"
        />

        {/* Content inside form container */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-8 mb-16"
          >
            {["Athletics", "Portraits"].map((cat) => (
              <motion.button
                key={cat}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormData({ ...formData, category: cat })}
                className={`p-8 text-center rounded-2xl ${
                  formData.category === cat
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/50"
                    : "bg-white text-emerald-900 hover:bg-emerald-50 shadow-xl"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{cat}</h3>
                <p className="text-lg opacity-80">
                  {cat === "Athletics"
                    ? "Capture your sporting moments"
                    : "Professional portrait sessions"}
                </p>
              </motion.button>
            ))}
          </motion.div>

          {formData.category && (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${pkg.color} text-white p-8 shadow-xl`}
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-white/20 blur-2xl" />
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold mb-6">{pkg.price}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFormData({ ...formData, package: pkg.name })}
                    className={`mt-6 w-full py-3 px-4 rounded-lg bg-white/20 hover:bg-white/30 transition-colors ${
                      formData.package === pkg.name ? "ring-2 ring-white" : ""
                    }`}
                  >
                    Select {pkg.name}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto relative"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tell us your vision</label>
                <textarea
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 h-32"
                  placeholder="Share your ideas, preferences, or any specific requirements for your photo session..."
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg hover:bg-emerald-700 transition font-medium text-lg"
              >
                Book Now
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      <FundingGoal />
    </div>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm8.75 3.5a1 1 0 110 2 1 1 0 010-2zm-4.25 1a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
    </svg>
  );
}
