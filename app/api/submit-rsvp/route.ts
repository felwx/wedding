import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const GOOGLE_SHEET_URL =
      "https://script.google.com/macros/s/AKfycbzQBV8cKIyeocKuwfZiIeWFyZM10Uqzc1_dyJL2TwDmDxLuD02gWOrKeju6WjiXalJs/exec"
    if (GOOGLE_SHEET_URL) {
      /*const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      console.log(response);
      if (!response.ok) {
        throw new Error(`Failed to save to Google Sheets: ${response.statusText}`)
      }*/
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(() => {
          alert("Datos enviados correctamente")
        })
        .catch((error) => console.error("Error:", error))
    } else {
      throw new Error("Google Sheet URL is not set")
    }

    console.log("Form data received:", data)

    return NextResponse.json({ message: "RSVP submitted successfully" })
  } catch (error) {
    console.error("Error in API route:", error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 },
    )
  }
}

