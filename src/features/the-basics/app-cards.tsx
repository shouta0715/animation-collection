"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Game = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
};

const GAMES: Game[] = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];

export function AppCards() {
  const [activeGame, setActiveGame] = React.useState<Game | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    setActiveGame(null);
  });

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;

      setActiveGame(null);
    };

    document.addEventListener("keydown", onKeydown);

    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="popLayout">
        {activeGame ? (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-10 bg-black/50"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
            />
            <div className="fixed inset-0 z-20 flex items-center justify-center">
              <motion.div
                ref={ref}
                className="max-w-2xl bg-white p-8"
                layoutId={activeGame.title}
                style={{ borderRadius: 12 }}
              >
                <div className="flex w-full flex-1 gap-4 text-left">
                  <motion.img
                    alt={activeGame.title}
                    height={56}
                    layoutId={`image-${activeGame.title}`}
                    src={activeGame.image}
                    style={{ borderRadius: 12 }}
                    width={56}
                  />
                  <div className="flex flex-1 items-center justify-between gap-4">
                    <div className="h-14 flex-1">
                      <motion.h2
                        className="font-bold"
                        layoutId={`title-${activeGame.title}`}
                      >
                        {activeGame.title}
                      </motion.h2>
                      <motion.p
                        className="text-muted-foreground"
                        layoutId={`description-${activeGame.title}`}
                      >
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <motion.span
                      className="rounded-full bg-muted px-2.5 py-1 text-sm text-blue-500"
                      layoutId={`get-${activeGame.title}`}
                    >
                      Get
                    </motion.span>
                  </div>
                </div>
                <motion.p
                  animate={{ opacity: 1 }}
                  className="mt-4 text-muted-foreground"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0 }}
                >
                  {activeGame.longDescription}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <ul className="flex flex-col gap-6">
        {GAMES.map((game) => (
          <motion.li key={game.title} layoutId={game.title}>
            <button
              className="flex w-full flex-1 gap-4 text-left"
              onClick={() => setActiveGame(game)}
              style={{ borderRadius: 8 }}
              tabIndex={0}
              type="button"
            >
              <motion.img
                alt={game.title}
                height={56}
                layoutId={`image-${game.title}`}
                src={game.image}
                style={{ borderRadius: 12 }}
                width={56}
              />
              <div className="flex flex-1 items-center justify-between gap-4">
                <div className="h-14 flex-1 border-b">
                  <motion.h2
                    className="font-bold"
                    layoutId={`title-${game.title}`}
                  >
                    {game.title}
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground"
                    layoutId={`description-${game.title}`}
                  >
                    {game.description}
                  </motion.p>
                </div>

                <motion.span
                  className="rounded-full bg-muted px-2.5 py-1 text-sm text-blue-500"
                  layoutId={`get-${game.title}`}
                >
                  Get
                </motion.span>
              </div>
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
