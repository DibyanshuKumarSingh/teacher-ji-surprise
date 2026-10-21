import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MailOpen, Sparkles } from "lucide-react";

function MysteryReveal({ onContinue }) {
const [isOpen, setIsOpen] = useState(false);

return ( <section className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-200 px-4 py-12"> <div className="w-full max-w-xl text-center">

```
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Sparkles className="mx-auto mb-4 text-rose-500" size={34} />

      <h2 className="text-3xl font-bold text-rose-700 sm:text-5xl">
        A Secret For You
      </h2>

      <p className="mt-4 text-gray-600 sm:text-lg">
        Someone has a little message waiting for you. 💗
      </p>
    </motion.div>

    <motion.button
      type="button"
      onClick={() => setIsOpen((previous) => !previous)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      aria-label={isOpen ? "Close the secret letter" : "Open the secret letter"}
      aria-expanded={isOpen}
      className="mx-auto flex h-48 w-64 flex-col items-center justify-center rounded-2xl border-2 border-rose-300 bg-gradient-to-br from-rose-400 to-pink-600 p-6 text-white shadow-2xl shadow-rose-300/40 sm:h-56 sm:w-80"
    >
      <motion.div
        animate={isOpen ? { rotateY: 180, scale: 1.1 } : { rotateY: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen ? (
          <MailOpen size={56} />
        ) : (
          <Heart size={56} fill="currentColor" />
        )}
      </motion.div>

      <span className="mt-4 text-lg font-semibold">
        {isOpen ? "Your Secret Is Here 💌" : "Tap to Open 💌"}
      </span>
    </motion.button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-3xl border border-white bg-white/75 p-6 shadow-xl backdrop-blur-lg sm:p-8"
        >
          <Heart
            className="mx-auto mb-4 text-rose-500"
            size={30}
            fill="currentColor"
          />

          <h3 className="text-2xl font-bold text-rose-700 sm:text-3xl">
            For Someone Truly Special ❤️
          </h3>

          <p className="mt-4 leading-7 text-gray-700">
            Some people make the world a little brighter just by being
            themselves. This little surprise was created to bring a smile
            to your face and make you feel special. ✨
          </p>

          <button
            type="button"
            onClick={onContinue}
            className="mt-7 rounded-full bg-rose-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-200"
          >
            Discover More 💖
          </button>
        </motion.div>
      )}
    </AnimatePresence>

  </div>
</section>

);
}

export default MysteryReveal;
