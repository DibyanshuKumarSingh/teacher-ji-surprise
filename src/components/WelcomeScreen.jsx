import { motion } from "framer-motion";
import { Heart, Sparkles, Gift } from "lucide-react";

function WelcomeScreen({ onContinue }) {
return ( <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-purple-200 px-4 py-12">
{/* Decorative hearts */}
<motion.div
animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
transition={{ duration: 4, repeat: Infinity }}
className="absolute left-[10%] top-[15%] text-rose-300"
> <Heart size={36} fill="currentColor" />
</motion.div>

```
  <motion.div
    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute bottom-[18%] right-[12%] text-purple-300"
  >
    <Heart size={44} fill="currentColor" />
  </motion.div>

  {/* Main card */}
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="w-full max-w-xl rounded-3xl border border-white/70 bg-white/60 p-7 text-center shadow-2xl backdrop-blur-xl sm:p-12"
  >
    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="mb-6 inline-flex rounded-full bg-rose-100 p-5 text-rose-500"
    >
      <Gift size={38} />
    </motion.div>

    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-rose-500 sm:text-base">
      A Little Surprise
    </p>

    <h1 className="text-4xl font-bold leading-tight text-rose-700 sm:text-6xl">
      Hey, Teacher Ji!
    </h1>

    <p className="mx-auto mt-5 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
      Someone has prepared something special for you.
      Are you ready to discover it? 💗
    </p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onContinue}
      className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg shadow-rose-300/50 transition focus:outline-none focus:ring-4 focus:ring-rose-200"
    >
      Open Your Surprise
      <Sparkles size={20} />
    </motion.button>

    <p className="mt-6 text-sm text-gray-500">
      Made with love, just for you ❤️
    </p>
  </motion.div>
</section>

);
}

export default WelcomeScreen;
