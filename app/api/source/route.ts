import { promises as fs } from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const filePath = request.nextUrl.searchParams.get("file")

  if (!filePath) {
    return NextResponse.json({ error: "Missing file parameter" }, { status: 400 })
  }

  // Prevent path traversal attacks — only allow paths inside the project root
  const fullPath = path.join(process.cwd(), filePath)
  if (!fullPath.startsWith(process.cwd())) {
    return NextResponse.json({ error: "Invalid file path" }, { status: 403 })
  }

  try {
    const code = await fs.readFile(fullPath, "utf8")
    return NextResponse.json({ code })
  } catch (error) {
    return NextResponse.json(
      { error: `Error reading file: ${filePath}\n${error}` },
      { status: 404 }
    )
  }
}
