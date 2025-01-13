import axios from "axios";

export const fetchData = async <T>(url: string) => {
  interface DataFetch {
    message: string;
    success: number;
    payload?: T;
  }

  const res = await axios.get<DataFetch>(url);
  console.log({ res });
  if (!res.data.success) {
    throw new Error("Fetching failed");
  }
  return res.data.payload;
};
