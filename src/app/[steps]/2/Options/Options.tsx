"use client";

import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@/components/ui/Button/Button";
import useOptionsStore from "@/app/store/options";
import { Option } from "@/types/options";
import { PlusIcon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input/Input";

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "An option should be at least 3 character long." })
    .max(60, {
      message: "A deoptioncision should be at most 60 characters long.",
    }),
});

type FormData = z.infer<typeof schema>;

export default function Options() {
  const { options, setOptions, removeOption } = useOptionsStore();
  const [title, setTitle] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title,
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newOptions = [
      ...options,
      {
        id: uuidv4(),
        title,
      },
    ];

    setOptions(newOptions);
    setTitle("");
  };

  const handleDelete = (option: Option) => {
    removeOption(option);
  };

  return (
    <div className="font-[300]">
      <ul className="space-y-4">
        {options.map((option) => (
          <li
            key={option.id}
            className="bg-white rounded-[4px] p-4 flex justify-between items-center"
          >
            {option.title}

            <button
              type="button"
              className="text-red-500"
              onClick={() => handleDelete(option)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex flex-col mt-4 space-y-8">
        <Input
          placeholder="Enter a new option"
          {...form.register("title")}
          className="h-[50px]"
        />

        <div className="h-[1px] bg-neutral-6" />

        <div>
          <Button type="submit" disabled={!form.formState.isValid}>
            <PlusIcon className="w-[18px] h-[18px] mr-1.5 relative bottom-[1px]" />

            <span>Add Option</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
