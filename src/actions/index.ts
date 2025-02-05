"use server";
import { savePost } from "@/lib/posts";
import { redirect } from "next/navigation";
import { string, z } from "zod";

export async function createAction(prevState: any, formData: FormData) {
  formData.append("owner", "1");
  const postFormData = Object.fromEntries(formData.entries());

  const categoryScheme = z.object({
    title: z.string().trim().nullable(),
    id: z.coerce.number().nullable(),
  });

  const postScheme = z.object({
    title: z
      .string()
      .trim()
      .min(5, {
        message: "Post title length has to be minimum 5 characters long.",
      })
      .max(100, {
        message: "Post title length has to be maximum 100 characters long.",
      }),

    content: z
      .string()
      .trim()
      .min(50, {
        message: "Post content length has to be minimum 50 characters long.",
      })
      .max(1000, {
        message: "Post content length has to be maximum 1000 characters long.",
      }),
    category: z.coerce.number({
      required_error: "Category field is required",
      invalid_type_error: "Category value must be an integer.",
    }),
    owner: z.coerce.string().trim(),
  });

  const validated_fields = postScheme.safeParse(postFormData);

  console.log("v : ", validated_fields);

  if (!validated_fields.success) {
    return {
      errors: validated_fields.error.flatten().fieldErrors,
      data: postFormData,
    };
  }

  //createPost into database
  try {
    await savePost(validated_fields.data);
    //redirect to blog index page

    redirect("/blog");
  } catch (error) {
    console.error(`An error occured while saving the post. ${error}`);
    throw error;
  }
}
