// pages/api/users.js
import db, { Users } from "@/backend/db";
import { NextResponse } from "next/server";

export async function GET() {
  const users = db.getCollection<Users>("users");
  // const allUsers: Users[] = JSON.parse(JSON.stringify((users.chain().find({name: {$contains: "mjolnir"}}).data())));
  return NextResponse.json(users.find());
}
