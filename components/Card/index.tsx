import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function Card({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
} & HTMLMotionProps<"div">) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [open, id]);

  return (
    <AnimatePresence>
      <motion.div
        id={id}
        key={id}
        onClick={() => {
          setOpen(!open);
        }}
        transition={{ type: "just", bounce: 0.2, duration: 0.2 }}
        layout
        className={
          `flex flex-col cursor-pointer overflow-hidden w-full hover:bg-neutral-700 hover:text-white transition-all duration-150` +
          (open
            ? `  rounded-2xl  bg-zinc-950 hover:bg-zinc-950`
            : `  bg-zinc-900 text-zinc-500 rounded-lg p-4 `)
        }>
        <div>
          <div className="flex flex-col">
            <motion.div
              transition={{ type: "just", bounce: 0.2, duration: 0.6 }}
              className={
                open
                  ? "flex flex-col justify-center items-center h-[500px] w-full"
                  : "hidden flex-col justify-center items-center"
              }>
              <Image
                height={1920}
                width={930}
                src="/images/tictactoe.webp"
                alt="test"
                className=" w-full object-fill  h-full bg-contain"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          className={
            open ? "flex flex-col justify-center items-center mt-4" : ""
          }>
          <motion.h2
            className={open ? "text-3xl mb-1" : "text-2xl"}
            transition={{ type: "tween", bounce: 0.3, duration: 0.3 }}
            layout>
            {title}
          </motion.h2>
          <motion.p
            className={"font-sans" + (open ? " font-sans opacity-60" : "")}
            transition={{ type: "tween", bounce: 0.3, duration: 0.3 }}
            layout>
            {subtitle}
          </motion.p>

          {open && (
            <motion.button
              className="my-4 text-white bg-black rounded-full text-2xl px-12 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "ease", ease: "easeInOut", duration: 0.3 }}
              layout>
              Button
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Card;
