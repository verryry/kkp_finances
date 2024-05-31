import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  questionName: z.string().min(1, { message: "Question is invalid" }),
  answer: z.string().min(1, { message: "Answer is invalid" }),
  category: z.string().min(1, { message: "Category is invalid" }),
});

export default function PopupModalJabatan({
  open,
  onOpenChange,
  cancelCallback,
  callback,
  data = {},
}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      questionName: data.questionName || "",
      answer: data.answer || "",
      category: data.category || "",
    },
  });

  const onSubmit = (data) => {
    callback(data);
    onOpenChange();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-lg"
        disableCloseButton
        disableInteractOutside
        disableEscapeKeyDown
      >
        <DialogHeader>
          <DialogTitle>Frequently Asked Question</DialogTitle>
          <DialogDescription>
            Make changes Asked Question here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="questionName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question *</FormLabel>
                  <FormControl>
                    <Input placeholder="Input Question" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Answer *</FormLabel>
                  <FormControl>
                    <Input placeholder="Input Answer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category *</FormLabel>
                  <FormControl>
                    <Input placeholder="Input Category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="sm:justify-start">
              <Button type="submit" variant="default">
                Save changes
              </Button>
              <Button variant="outline" onClick={cancelCallback}>
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
