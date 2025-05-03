import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Btn } from "../button";

export default function WrappedDialog({
  title,
  trigger,
  description,
  cancelText,
  activeText,
}) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <DialogFooter>
          {cancelText && (
            <Btn className="w-full" variant="cancel">
              {cancelText}
            </Btn>
          )}
          {activeText && <Btn className="w-full">{activeText}</Btn>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Dialog,
// DialogPortal,
// DialogOverlay,
// DialogTrigger,
// DialogClose,
// DialogContent,
// DialogHeader,
// DialogFooter,
// DialogTitle,
// DialogDescription,
