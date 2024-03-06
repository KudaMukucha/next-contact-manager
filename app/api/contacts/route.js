import db from "@/libs/db"
import { NextResponse } from "next/server"

//creating a new record
export async function POST(request){
    try {
        const {name,phone,email,profile} = await request.json()
        const data = {
            name,phone,email,profile
        }
        //use prisma to create a contact
        const newContact = await db.contact.create({
            data:{
                name,
                phone,
                email,
                profile 
            }
        })
        console.log(newContact)
        return NextResponse.json(newContact,{
            status:201
        })
    } catch (error) {
        console.log('Error while creating contact...',error)
        return NextResponse.json({
            message:'Failed to create contact',
            error: error.message
        },{
            status:500
        })
    }
}

//getting all records
export async function GET(){
    try {
        const contacts = await db.contact.findMany()
        return NextResponse.json(contacts)
    } catch (error) {
        console.log('Error while fetching contacts...',error)
        return NextResponse.json({
            message:'Failed to fetch contacts',
            error: error.message
        },{
            status:500
        })
    }
}

