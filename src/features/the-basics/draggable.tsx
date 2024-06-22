"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export function Draggable() {
  const ref = React.useRef(null);
  const x = useMotionValue(0);

  // 入力範囲と出力範囲を指定して、値を変換する
  const opacity = useTransform(x, [0, 300], [1, 0]);

  return (
    <div ref={ref} className="h-40 w-full border">
      <motion.div
        className="size-10 cursor-grab rounded-full bg-yellow-500"
        drag
        dragConstraints={ref}
        // 離したときのアニメーションを無効にする
        // dragMomentum={false}
      />

      <motion.div
        className="size-10 cursor-grab rounded-full bg-pink-500"
        drag="x"
        dragConstraints={ref}
        dragMomentum={false}
        onPan={(_, info) => {
          x.set(info.offset.x);
        }}
        onPanEnd={() => x.set(0)}
        style={{ x, opacity }}
      />
    </div>
  );
}
