import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X, ZoomIn } from "lucide-react";

import image1 from "../assets/images/teacher-ji-1.jpg";
import image2 from "../assets/images/teacher-ji-2.jpg";
import image3 from "../assets/images/teacher-ji-3.jpg";
import image4 from "../assets/images/teacher-ji-4.jpg";
import image5 from "../assets/images/teacher-ji-5.jpg";
import image6 from "../assets/images/teacher-ji-6.jpg";
import image7 from "../assets/images/teacher-ji-7.jpg";
import image8 from "../assets/images/teacher-ji-8.jpg";

const memories = [
  {
    id: 1,
    image: image1,
    caption: "A beautiful smile, a beautiful soul. 🌷"
  },
  {
    id: 2,
    image: image2,
    caption: "Some moments deserve to be treasured forever. 💗"
  },
  {
    id: 3,
    image: image3,
    caption: "A little happiness captured in a picture. ✨"
  },
  {
    id: 4,
    image: image4,
    caption: "Keep shining just the way you do. 🌸"
  },
  {
    id: 5,
    image: image5,
    caption: "A lovely memory worth keeping close. 💕"
  },
  {
    id: 6,
    image: image6,
    caption: "May your life always be filled with smiles. 🦋"
  },
  {
    id: 7,
    image: image7,
    caption: "A special person deserves special memories. 💖"
  },
  {
    id: 8,
    image: image8,
    caption: "Here's to many more beautiful moments. 🎀"
  }
];

function MemoriesGallery({ onContinue }) {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-purple-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Heart
            size={34}
            fill="currentColor"
            className="mx-auto mb-4 text-rose-400"
          />

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
            A Little Collection of Happiness
          </p>

          <h2 className="text-3xl font-bold text-rose-700 sm:text-5xl">
            Beautiful Memories 📸
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Every picture tells a story, and every smile makes a moment
            worth remembering. 💗
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory, index) => (
            <motion.button
              key={memory.id}
              type="button"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedMemory(memory)}
              className="group overflow-hidden rounded-3xl border border-white/80 bg-white/80 text-left shadow-lg shadow-rose-100/70 transition-shadow hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-200"
              aria-label={`View memory ${memory.id}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-rose-100 to-purple-100">
                <img
                  src={memory.image}
                  alt={`Teacher Ji memory ${memory.id}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                  <ZoomIn
                    className="text-white opacity-0 transition group-hover:opacity-100"
                    size={34}
                  />
                </div>

                <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-rose-500 shadow">
                  <Heart size={18} />
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-gray-600 sm:text-base">
                  {memory.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            type="button"
            onClick={onContinue}
            className="rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg shadow-rose-200 transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-200"
          >
            A Little More Magic 💌
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Photo preview"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedMemory(null)}
                aria-label="Close photo preview"
                className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-rose-600 shadow"
              >
                <X size={22} />
              </button>

              <img
                src={selectedMemory.image}
                alt={`Teacher Ji memory ${selectedMemory.id}`}
                className="max-h-[70vh] w-full bg-rose-50 object-contain"
              />

              <p className="p-5 text-center text-gray-700">
                {selectedMemory.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MemoriesGallery;