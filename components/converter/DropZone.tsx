"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { ACCEPTED_EXTENSIONS } from "@/lib/formats";

type Props = {
  onFile: (file: File) => void;
  prompt: string;
  hint?: string;
  className?: string;
};

export function DropZone({ onFile, prompt, hint, className }: Props) {
  const onDrop = useCallback(
    (accepted: File[]) => {
      if (accepted[0]) onFile(accepted[0]);
    },
    [onFile],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "video/*": ACCEPTED_EXTENSIONS },
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card px-6 py-16 text-center transition-all hover:border-foreground/40",
        isDragActive && "border-foreground bg-muted scale-[1.005]",
        className,
      )}
    >
      <input {...getInputProps()} />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground transition-transform group-hover:scale-105">
        <Upload className="h-5 w-5" />
      </div>
      <p className="text-base font-semibold tracking-tight text-foreground">
        {prompt}
      </p>
      {hint && (
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">{hint}</p>
      )}
    </div>
  );
}
