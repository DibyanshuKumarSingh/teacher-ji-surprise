import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Gift } from "lucide-react";
import confetti from "canvas-confetti";

function FinalSurprise() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const blowCandles = () => {
    setCandlesBlown(true);

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setShowMessage(true);
    }, 1200);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 px-4 py-12">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-8 top-12 text-rose-400 sm:left-20"
      >
        <Heart size={32} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-8 top-20 text-purple-400 sm:right-20"
      >
        <Sparkles size={36} />
      </motion.div>

      <section className="w-full max-w-2xl rounded-3xl border border-white/70 bg-white/70 p-6 text-center shadow-2xl backdrop-blur-lg sm:p-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">
            Your Special Moment
          </p>

          <h1 className="mt-4 text-3xl font-bold text-rose-700 sm:text-5xl">
            Happy Birthday, Teacher Ji! 🎂
          </h1>

          <p className="mt-4 text-gray-600 sm:text-lg">
            Close your eyes, make a beautiful wish, and get ready for a little
            birthday magic. 💗
          </p>
        </motion.div>

        {/* Birthday Cake */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-10 flex flex-col items-center"
        >
          {/* Candles */}
          <div className="mb-1 flex h-16 items-end justify-center gap-5">
            {[0, 1, 2].map((candle) => (
              <div
                key={candle}
                className="relative h-12 w-3 rounded-t-sm bg-gradient-to-b from-purple-300 to-rose-400 shadow-sm"
              >
                {!candlesBlown && (
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 0.85, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      delay: candle * 0.15,
                    }}
                    className="absolute -top-5 left-0.5 h-4 w-2 rounded-full bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Cake top */}
          <div className="relative z-10 flex h-16 w-52 items-center justify-center rounded-t-2xl border-b-4 border-pink-300 bg-gradient-to-r from-pink-300 via-rose-200 to-pink-300 shadow-lg sm:w-64">
            <span className="text-3xl">🍓 🍓 🍓</span>
          </div>

          {/* Cake body */}
          <div className="flex h-20 w-60 items-center justify-center rounded-b-2xl border-t-4 border-rose-100 bg-gradient-to-b from-rose-400 to-pink-500 shadow-xl sm:w-72">
            <span className="text-2xl">💗</span>
          </div>

          {/* Cake plate */}
          <div className="h-3 w-72 rounded-full bg-gradient-to-r from-purple-200 via-white to-purple-200 shadow-md sm:w-80" />
        </motion.div>

        {!candlesBlown && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={blowCandles}
            className="mt-9 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-200"
          >
            🕯️ Blow the Candles!
          </motion.button>
        )}

        {candlesBlown && !showMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 font-semibold text-rose-600"
          >
            Your wish is on its way to the stars! ✨💫
          </motion.p>
        )}

        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 rounded-2xl bg-rose-50 p-6"
          >
            <Gift size={36} className="mx-auto mb-4 text-rose-500" />

            <h2 className="text-2xl font-bold text-rose-700 sm:text-3xl">
              A Message From Your Love ❤️
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              My Teacher Ji, you deserve all the happiness this world has to
              offer. May your smile always shine brighter than the stars, and
              may every dream in your heart find its way to reality.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              No matter how many birthdays pass, I hope I always find new
              reasons to celebrate you. Keep smiling, keep shining, and never
              forget how special you are to me. 💖
            </p>

            <p className="mt-6 text-xl font-bold text-rose-600">
              Happy Birthday, My Love! 🎂💗
            </p>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="mt-5 flex justify-center text-rose-500"
            >
              <Heart size={32} fill="currentColor" />
            </motion.div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

export default FinalSurprise;
