"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/features/ui/button";

type Status = "idle" | "loading" | "success";

const buttonCopy: Record<Status, React.ReactNode> = {
  idle: "Send Feedback",
  loading: <Loader2 className="size-6 animate-spin" />,
  success: "Feedback received!",
};

export function FeedBack() {
  const [open, setOpen] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState<Status>("idle");

  const [feedback, setFeedback] = React.useState("");
  const outerRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(outerRef, () => setOpen(false));

  async function handleSubmit() {
    setFormStatus("loading");
    const t = setTimeout(() => {
      setFormStatus("success");
      clearTimeout(t);
    }, 2000);

    const t2 = setTimeout(() => {
      setOpen(false);
      clearTimeout(t2);
    }, 3500);
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter" &&
        open &&
        formStatus === "idle"
      ) {
        handleSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [formStatus, open]);

  const onClickHandler = () => {
    setOpen(true);
    setFormStatus("idle");
    setFeedback("");
  };

  return (
    <div className="flex h-[500px] w-full items-center justify-center rounded-md border">
      {open ? null : (
        <motion.div layoutId="feedbacks">
          <Button onClick={onClickHandler} variant="outline">
            <motion.span layoutId="feedback-label">Feedback</motion.span>
          </Button>
        </motion.div>
      )}
      <div ref={outerRef}>
        <AnimatePresence mode="popLayout">
          {open ? (
            <motion.div
              className="relative h-48 w-[440px] rounded-xl border-4"
              layoutId="feedbacks"
            >
              <motion.span
                aria-hidden
                className={clsx(
                  "absolute left-4 top-2.5 text-sm text-muted-foreground data-[feedback=true]:!opacity-0"
                )}
                data-feedback={feedback ? "true" : "false"}
                data-success={formStatus === "success" ? "true" : "false"}
                layoutId="feedback-label"
              >
                Feedback
              </motion.span>
              <AnimatePresence mode="popLayout">
                {formStatus === "success" ? (
                  <motion.div
                    key="success"
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-muted/40"
                    initial={{ opacity: 0, y: -25 }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                  >
                    <CheckCircle2 className="mb-4 text-blue-600" />
                    <h3>Feedback received!</h3>
                    <p>Thanks for helping me improve Sonner.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="flex h-full flex-col"
                    exit={{ y: 8, opacity: 0, filter: "blur(4px)" }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0.5 }}
                  >
                    <Textarea
                      className="flex-1 resize-none"
                      onChange={(e) => setFeedback(e.target.value)}
                      value={feedback}
                    />
                    <div className="flex p-2">
                      <Button
                        className="ml-auto w-40"
                        disabled={formStatus === "loading"}
                        size="sm"
                        type="submit"
                      >
                        <AnimatePresence initial={false} mode="popLayout">
                          <motion.span
                            key={formStatus}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 25 }}
                            initial={{ opacity: 0, y: -25 }}
                          >
                            {buttonCopy[formStatus]}
                          </motion.span>
                        </AnimatePresence>
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
