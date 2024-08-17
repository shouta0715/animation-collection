"use client";

import clsx from "clsx";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrashBack, TrashFront } from "./trash-assets";

const IMAGES = ["japan", "jungle", "new-york", "desert"];

export function TrashAnimation() {
  const [imagesToRemove, setImagesToRemove] = useState<string[]>([]);
  const [readyToRemove, setReadyToRemove] = useState<boolean>(false);
  const [removed, setRemoved] = useState(false);
  const [hide, setHide] = useState(false);

  const imagesToShow = readyToRemove
    ? IMAGES.filter((img) => !imagesToRemove.includes(img))
    : IMAGES;

  useEffect(() => {
    if (removed) {
      setTimeout(() => {
        setHide(true);
      }, 1000);

      setTimeout(() => {
        setImagesToRemove([]);
        setReadyToRemove(false);
        setRemoved(false);
      }, 1200);

      setTimeout(() => {
        setHide(false);
      }, 1700);
    }
  }, [removed]);

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}>
      <motion.div
        animate={{ opacity: hide ? 0 : 1 }}
        className="relative flex h-[500px] flex-col items-center justify-center"
        initial={false}
      >
        <ul className="grid grid-cols-2 gap-4">
          <AnimatePresence>
            {!readyToRemove &&
              imagesToShow.map((image) => {
                const isSelected = imagesToRemove.includes(image);

                return (
                  <motion.li
                    key={image}
                    className="relative flex size-[100px]"
                    exit={
                      isSelected
                        ? {}
                        : {
                            opacity: 0,
                            filter: "blur(4px)",
                            transition: { duration: 0.17 },
                          }
                    }
                  >
                    <motion.div
                      className={clsx(
                        "pointer-events-none absolute right-2 top-2 flex size-4 items-center justify-center rounded-full border border-white/60"
                      )}
                      exit={{ opacity: 0, transition: { duration: 0 } }}
                    >
                      <AnimatePresence>
                        {isSelected ? (
                          <motion.div
                            animate={{ scale: 1.1, opacity: 1 }}
                            exit={{
                              scale: 0.9,
                              opacity: 0,
                              transition: { duration: 0.1 },
                            }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            transition={{
                              type: "spring",
                              duration: 0.25,
                              bounce: 0,
                            }}
                          >
                            <div className="absolute inset-0.5 rounded-full bg-white" />
                            <svg
                              className="relative size-5 shrink-0 rounded-full text-black"
                              fill="none"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="bg-white"
                                clipRule="evenodd"
                                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5805 9.97493C15.8428 9.65434 15.7955 9.18183 15.4749 8.91953C15.1543 8.65724 14.6818 8.70449 14.4195 9.02507L10.4443 13.8837L9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.96967 15.5303C10.1195 15.6802 10.3257 15.7596 10.5374 15.7491C10.749 15.7385 10.9463 15.6389 11.0805 15.4749L15.5805 9.97493Z"
                                fill="currentColor"
                                fillRule="evenodd"
                              />
                            </svg>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>
                    <button
                      aria-label="Remove book"
                      onClick={() => {
                        if (isSelected) {
                          setImagesToRemove((images) =>
                            images.filter((img) => img !== image)
                          );
                        } else {
                          setImagesToRemove((images) => [...images, image]);
                        }
                      }}
                      type="button"
                    >
                      <motion.img
                        alt="A guy"
                        className="rounded-xl"
                        height={100}
                        layoutId={`image-${image}`}
                        src={`https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/why-framer-motion/${image}.webp`}
                        width={100}
                      />
                    </button>
                  </motion.li>
                );
              })}
          </AnimatePresence>
        </ul>
        <AnimatePresence>
          {imagesToRemove.length > 0 && !readyToRemove ? (
            <motion.div
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              className="absolute bottom-8 flex gap-1 rounded-xl p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_8px_8px_-8px_rgba(0,0,0,0.16)] will-change-transform"
              exit={{ y: 20, filter: "blur(4px)", opacity: 0 }}
              initial={{ y: 20, filter: "blur(4px)", opacity: 0 }}
            >
              <div className="flex w-full justify-between gap-1">
                <button
                  className="flex w-12 flex-col items-center gap-px rounded-lg bg-[#F9F9F8] pb-1 pt-[6px] text-[10px] font-medium text-[#8D8D86]"
                  type="button"
                >
                  <svg
                    className="size-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.8839 18.6339C10.3957 19.122 9.60427 19.122 9.11612 18.6339L3.36612 12.8839C3.1317 12.6495 3 12.3315 3 12C3 11.6685 3.13169 11.3506 3.36612 11.1161L9.11612 5.36612C9.60427 4.87796 10.3957 4.87796 10.8839 5.36612C11.372 5.85427 11.372 6.64573 10.8839 7.13388L7.26776 10.75H19.75C20.4404 10.75 21 11.3097 21 12C21 12.6904 20.4404 13.25 19.75 13.25H7.26777L10.8839 16.8661C11.372 17.3543 11.372 18.1457 10.8839 18.6339Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                  Back
                </button>
                <button
                  className="flex w-12 flex-col items-center gap-px rounded-lg bg-[#F9F9F8] pb-1 pt-[6px] text-[10px] font-medium text-[#8D8D86] hover:bg-[#FFF7F7] hover:text-[#E5484D]"
                  onClick={() => {
                    if (readyToRemove) {
                      setRemoved(true);
                    } else {
                      setReadyToRemove(true);
                    }
                  }}
                  type="button"
                >
                  <svg
                    className="size-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.58393 5C8.28068 3.24301 9.99487 2 12.0009 2C14.007 2 15.7212 3.24301 16.4179 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H19.9532L19.0588 20.3627C18.9994 21.2835 18.2352 22 17.3124 22H6.68756C5.76481 22 5.0006 21.2835 4.94119 20.3627L4.04683 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75C2 5.33579 2.33579 5 2.75 5H7.58393ZM9.26161 5C9.83935 4.09775 10.8509 3.5 12.0009 3.5C13.151 3.5 14.1625 4.09775 14.7403 5H9.26161Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                  Trash
                </button>
                <button
                  className="flex w-12 flex-col items-center gap-px rounded-lg bg-[#F9F9F8] pb-1 pt-[6px] text-[10px] font-medium text-[#8D8D86]"
                  type="button"
                >
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.4902 2.84406C11.1661 1.69 12.8343 1.69 13.5103 2.84406L22.0156 17.3654C22.699 18.5321 21.8576 19.9999 20.5056 19.9999H3.49483C2.14281 19.9999 1.30147 18.5321 1.98479 17.3654L10.4902 2.84406ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                  Report
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        {readyToRemove ? (
          <motion.div
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            className="absolute bottom-10 flex flex-col gap-2"
            initial={{ scale: 1.2, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3, bounce: 0, type: "spring" }}
          >
            <button
              className="flex h-8 w-[200px] items-center justify-center gap-[15px] rounded-full bg-[#FF3F40] text-center text-[13px] font-semibold text-[#FFFFFF]"
              onClick={() => {
                if (readyToRemove) {
                  setRemoved(true);
                } else {
                  setReadyToRemove(true);
                }
              }}
              type="button"
            >
              Trash {imagesToRemove.length} Collectibles
            </button>
          </motion.div>
        ) : null}
        <AnimatePresence>
          {readyToRemove ? (
            <div className="absolute top-1/2 z-10 h-[114px] w-24 -translate-y-1/2">
              <motion.div
                animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                exit={{ scale: 1.2, filter: "blur(4px)", opacity: 0 }}
                initial={{ scale: 1.2, filter: "blur(4px)", opacity: 0 }}
              >
                <TrashBack />
              </motion.div>

              <motion.div
                animate={{
                  y: removed ? 110 : 73,
                  scale: removed ? 0.7 : 1,
                  filter: removed ? "blur(4px)" : "blur(0px)",
                }}
                className="absolute top-[-60px] flex w-full flex-col-reverse items-center"
                transition={
                  removed
                    ? { duration: 0.3, type: "spring", bounce: 0 }
                    : { delay: 0.13 }
                }
              >
                {imagesToRemove.map((image, index) => (
                  <li key={image} className="flex h-1 items-center gap-2">
                    <motion.img
                      alt="A guy"
                      className="rounded"
                      height={65}
                      layoutId={`image-${image}`}
                      src={`https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/why-framer-motion/${image}.webp`}
                      style={{
                        rotate:
                          index % 2 === 0
                            ? 4 * (imagesToRemove.length - index + 1)
                            : -1 * (imagesToRemove.length - index + 1) * 4,
                      }}
                      width={65}
                    />
                  </li>
                ))}
              </motion.div>
              <motion.div
                animate={{ opacity: 1 }}
                className="absolute bottom-0 left-[3px] h-full w-[90px]"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.175, duration: 0 }}
              >
                <TrashFront />
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}
