"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type SuccessStateProps = {
  title: string;
  message: string;
  onClose?: () => void;
  actionLabel?: string;
  actionHref?: string;
};

export function SuccessState({
  title,
  message,
  onClose,
  actionLabel = "Done",
  actionHref,
}: SuccessStateProps) {
  return (
    <div className="py-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15"
      >
        <CheckCircle2 className="h-9 w-9 text-primary" />
      </motion.div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">{message}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {actionHref ? (
          <Link href={actionHref} className="btn-primary" onClick={onClose}>
            {actionLabel}
          </Link>
        ) : (
          <button type="button" onClick={onClose} className="btn-primary">
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
