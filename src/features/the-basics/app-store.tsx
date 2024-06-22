"use client";

import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import React from "react";
import { useOnClickOutside } from "usehooks-ts";

const CARDS: CardProps[] = [
  {
    title: "Game of the DAY",
    description: "A game about vikings",
    longDescription:
      "A game about vikings, where you can play as a viking and fight other vikings. You can also build your own viking village and explore the world.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp",
  },
];

type CardProps = {
  title: string;

  description: string;
  longDescription: string;
  image: string;
};

type CardActionProps = {
  setActiveGame: (card: CardProps | null) => void;
};

function Card(props: CardProps & CardActionProps) {
  const { title, description, image, setActiveGame, longDescription } = props;

  return (
    <motion.div
      className="relative block h-[370px] w-[320px] cursor-pointer overflow-hidden  text-left"
      layoutId={`card-${title}`}
      onClick={() => setActiveGame(props)}
      style={{
        borderRadius: "20px",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        alt={title}
        className="absolute inset-0 -z-10 size-full object-cover"
        height={370}
        layoutId={`image-${title}`}
        src={image}
        width={320}
      />
      <motion.div
        className="flex h-full flex-col justify-end p-4"
        layoutId={`card-contents-${title}`}
      >
        <motion.h2
          className="w-36 text-5xl font-black leading-none text-white"
          layoutId={`title-${title}`}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-white"
          layoutId={`description-${title}`}
        >
          {description}
        </motion.p>
      </motion.div>
      <motion.button
        className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white"
        layoutId={`close-${title}`}
        onClick={() => setActiveGame(null)}
        style={{ opacity: 0 }}
        type="button"
      >
        <XIcon size={24} />
      </motion.button>
      <motion.div
        layoutId={`card-desc-${title}`}
        style={{ position: "absolute", top: "100%", opacity: 0 }}
      >
        <p className="p-4 text-lg text-primary">{longDescription}</p>
      </motion.div>
    </motion.div>
  );
}

function CardModal({
  setActiveGame,
  card,
}: CardActionProps & { card: CardProps }) {
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    setActiveGame(null);
  });

  return (
    <motion.div
      className="absolute top-0 z-20 flex h-full w-[320px] flex-col overflow-hidden rounded-xl"
      layoutId={`card-${card.title}`}
      style={{
        borderRadius: "20px",
      }}
    >
      <div ref={ref} className="relative block h-[370px] text-left">
        <motion.img
          alt={card.title}
          className="absolute inset-0 -z-10 size-full object-cover "
          height={370}
          layoutId={`image-${card.title}`}
          src={card.image}
          width={320}
        />
        <motion.div
          className="flex h-full flex-col justify-end p-4"
          layoutId={`card-contents-${card.title}`}
        >
          <motion.h2
            className="w-36 text-5xl font-black leading-none text-white"
            layoutId={`title-${card.title}`}
          >
            {card.title}
          </motion.h2>
          <motion.p
            className="text-lg text-white"
            layoutId={`description-${card.title}`}
          >
            {card.description}
          </motion.p>
        </motion.div>
        <motion.button
          animate={{ opacity: 1 }}
          className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white"
          layoutId={`close-${card.title}`}
          onClick={() => setActiveGame(null)}
          type="button"
        >
          <XIcon size={24} />
        </motion.button>
      </div>

      <motion.div
        className="h-1/4"
        exit={{ opacity: 0 }}
        layoutId={`card-desc-${card.title}`}
      >
        <p className="h-full rounded-b-xl bg-background p-4 text-lg text-primary">
          {card.longDescription}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function AppStore() {
  const [activeGame, setActiveGame] = React.useState<CardProps | null>(null);

  return (
    <div className="relative mx-auto flex h-[675px] w-[600px] flex-col items-center justify-center ">
      {CARDS.map((card, index) => (
        <Card key={index} {...card} setActiveGame={setActiveGame} />
      ))}
      {activeGame ? (
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/10"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          />
        </AnimatePresence>
      ) : null}

      <AnimatePresence mode="wait">
        {activeGame ? (
          <CardModal card={activeGame} setActiveGame={setActiveGame} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
