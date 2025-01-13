import { nanoid } from "nanoid";
import { createClient } from "./client";

type UploadProps = {
  file: File;
  bucket: string;
  folder?: string;
};
export const uploadFile = async ({ file, bucket, folder }: UploadProps) => {
  const fileName = file.name;
  const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
  const path = `${folder ? folder + "/" : ""}${nanoid()}.${fileExtension}`;

  const { storage } = createClient();
  const { data, error } = await storage.from(bucket).upload(path, file);
  if (error) {
    return { imageUrl: "", error: "Image upload failed" };
  }

  const imageUrl = `${process.env
    .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${
    data?.path
  }`;
  return { imageUrl, error: "" };
};
