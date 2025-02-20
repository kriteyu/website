import { type NextRequest, NextResponse } from "next/server"
import clientPromise, { Collections } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  console.log("Activation route hit")

  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")
    console.log("Token received:", token)

    if (!token) {
      console.log("No token provided")
      return new Response("No activation token provided", { status: 400 })
    }

    console.log("Connecting to MongoDB...")
    const client = await clientPromise
    const db = client.db("astcorp_db")
    console.log("Connected to MongoDB")

    // Check both user collections for the activation token
    const userCollections = [Collections.USER, Collections.STUDENTS]
    let user = null
    let collectionName = ""

    for (const collection of userCollections) {
      console.log(`Searching in collection: ${collection}`)
      user = await db.collection(collection).findOne({ activationToken: token })
      if (user) {
        collectionName = collection
        console.log(`User found in collection: ${collectionName}`)
        break
      }
    }

    if (!user) {
      console.log("No user found with the given token")
      return new Response("Invalid activation token", { status: 400 })
    }

    if (user.isActivated) {
      console.log("User is already activated")
      return new Response("Account is already activated", { status: 200 })
    }

    // Activate the account
    console.log("Activating account...")
    const updateResult = await db.collection(collectionName).updateOne(
      { _id: user._id, isActivated: false, activationToken: token },
      {
        $set: { isActivated: true, isApproved: true },
        $unset: { activationToken: "" },
      },
    )
    console.log("Update result:", updateResult)

    if (updateResult.modifiedCount === 1) {
      console.log("Account activated successfully")
      return NextResponse.redirect(new URL("/activation-success", request.url))
    } else {
      console.log("Account was not updated")
      return NextResponse.redirect(new URL("/activation-error", request.url))
    }
  } catch (error) {
    console.error("Activation error:", error)
    return new Response("An error occurred during activation", { status: 500 })
  }
}

