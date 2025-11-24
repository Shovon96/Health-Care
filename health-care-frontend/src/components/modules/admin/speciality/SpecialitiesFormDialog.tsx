"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import InputFieldError from "@/src/components/shared/InputFieldError";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import { useActionState, useEffect } from "react";
import { createSpeciality } from "./specialitiesManagement";


interface SpecialitiesFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function SpecialitiesFormDialog({ open, onClose, onSuccess }: SpecialitiesFormDialogProps) {

  const [state, formAction, isPending] = useActionState(createSpeciality, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state?.message);
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      toast.error(state?.message || state?.errors[0].message);
    }
  }, [state, onSuccess, onClose]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>

        <DialogHeader>
          <DialogTitle>Add New Specialty</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input id="title" name="title" placeholder="Cardiology" />
            <InputFieldError fieldName="title" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="file">Upload Icon</FieldLabel>

            <Input id="file" name="file" type="file" accept="image/*" />
            <InputFieldError fieldName="file" state={state} />
          </Field>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save Specialty"}
            </Button>
          </div>
        </form>

      </DialogContent>
    </Dialog>
  )
}