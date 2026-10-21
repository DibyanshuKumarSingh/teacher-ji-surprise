import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";

function LoveLetter({ onContinue }) {
return ( <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-purple-200 px-4 py-12">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="w-full max-w-2xl rounded-3xl border border-white/80 bg-white/80 p-6 shadow-2xl backdrop-blur-lg sm:p-10"
> <Mail
       size={42}
       className="mx-auto mb-5 text-rose-500"
     />

```
    <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">
      A Message From Your Love
    </p>

    <h2 className="mt-4 text-center text-3xl font-bold text-rose-700 sm:text-5xl">
      To My Teacher Ji ❤️
    </h2>

    <div className="mt-8 space-y-5 text-base leading-8 text-gray-700 sm:text-lg">
      <p>Hey, my favourite person! 💗</p>

      <p>
        Today is all about you, your beautiful smile, and the happiness
        you bring into the lives of the people who care about you.
      </p>

      <p>
        I hope this new year of your life brings you countless reasons
        to smile, dreams that come true, and moments that make your
        heart feel truly happy.
      </p>

      <p>
        Never forget how special you are. Keep smiling, keep shining,
        and always be the wonderful person you are. 🌷
      </p>

      <p className="font-semibold text-rose-600">
        Happy Birthday, Teacher Ji! 🎂❤️
      </p>
    </div>

    <div className="mt-8 text-center">
      <Heart
        size={26}
        fill="currentColor"
        className="mx-auto mb-6 text-rose-400"
      />

      <button
        type="button"
        onClick={onContinue}
        className="rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-200"
      >
        One Last Surprise 🎁
      </button>
    </div>
  </motion.div>
</section>

);
}

export default LoveLetter;
