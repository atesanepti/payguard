"use client";
import React, { useTransition } from "react";
import useSWR from "swr";
import { DocumentPayloadObj, DocumentUpdate } from "@/types";
import { fetchData } from "@/lib/fetchData";
import Image from "next/image";
import moment from "moment";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

const DocumentDetailsView = () => {
  const [pending, startTranstion] = useTransition();
  const { id } = useParams();
  const { data } = useSWR(`/api/admin/document/${id}`, async (url: string) =>
    fetchData<DocumentPayloadObj>(url)
  );

  const handleAccept = async () => {
    startTranstion(async () => {
      const data: DocumentUpdate = {
        actionType: "ACCEPT",
      };
      try {
        interface DataFetch {
          message: string;
          success: number;
        }
        const res = await axios.put<DataFetch>(
          `/api/admin/document/${id}`,
          data
        );
        if (!res.data.success) {
          throw new Error("Failed");
        }
        toast("Updated", {
          description: `The Document was updated for Accepted`,
        });
      } catch {
        toast("Failed", {
          description: `The Document was not updated for Accepted`,
        });
      }
    });
  };

  const handleReject = async () => {
    startTranstion(async () => {
      const data: DocumentUpdate = {
        actionType: "REJECT",
      };
      try {
        interface DataFetch {
          message: string;
          success: number;
        }
        const res = await axios.put<DataFetch>(
          `/api/admin/document/${id}`,
          data
        );
        if (!res.data.success) {
          throw new Error("Failed");
        }
        toast("Updated", {
          description: `The Document was updated for Rejected`,
        });
      } catch {
        toast("Failed", {
          description: `The Document was not updated for Rejected`,
        });
      }
    });
  };

  return (
    <div>
      {!data && (
        <div className="relative">
          <Spinner />
        </div>
      )}

      {data && (
        <div className="w-[350px] lg:w-[450px] mx-auto">
          <div>
            <h4 className="text-lg font-semibold text-white">
              {data?.user?.email}
            </h4>
            <span className="text-gray-500">
              {moment(data?.createdAt).format("MMM Do YY")}
            </span>
          </div>
          <Image
            src={data.file_url}
            alt={data.file_url}
            width={100}
            height={100}
            className="w-full h-auto"
          />
          <div className="flex items-center gap-3 mt-3">
            <Button disabled={pending} onClick={handleAccept} type="button">
              Accept
            </Button>
            <Button
              disabled={pending}
              onClick={handleReject}
              className="bg-red-600 hover:bg-red-600/90"
              type="button"
            >
              Reject
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentDetailsView;
