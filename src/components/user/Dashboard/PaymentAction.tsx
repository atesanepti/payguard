"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import  Link  from 'next/link';

interface PaymentActionProps{
    paymentId : string
}

const PaymentAction = ({paymentId} : PaymentActionProps) => {
  return (
    <Link href={`payment/${paymentId}`}>
      <Button className="bg-[#0D92F4] hover:bg-[#0D92F4]/90 h-7">View</Button>
    </Link>
  );
}

export default PaymentAction