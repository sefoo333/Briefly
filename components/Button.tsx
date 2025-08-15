"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'

function Buttont() {
  return (
    <Button onClick={() => toast.info("comming soon... 😉")} className="bg-[#6c63ff] text-[#f3f3f3] hover:bg-[#6c63ff]/90 px-9 py-6 rounded-full font-medium text-lg shadow-lg">
           Show versions 
          </Button>
  )
}

export default Buttont