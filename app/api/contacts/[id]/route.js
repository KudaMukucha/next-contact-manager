import db from "@/libs/db"
import { NextResponse } from "next/server"

//get a single record
export async function GET(request,{params:{id}}){
    // console.log(id)
    try {
        // console.log(params)
        const contact = await db.contact.findUnique({
            where:{
                id
            }
        })
        if(!contact){
            return NextResponse.json({
                message:'Contact not found',
                
            },{
                status:404
            })
        }
        return NextResponse.json(contact)
    } catch (error) {
        console.log('Error while fetching contact...',error)
        return NextResponse.json({
            message:'Failed to fetch contact',
            error: error.message
        },{
            status:500
        })
    }
}