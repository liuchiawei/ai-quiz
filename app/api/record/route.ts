import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ユーザーの回答時間、正解数、タイプ別正解数を記録する
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received record data:", body);

    const { score, typeScores, timeSpent, userId } = body;

    // 驗證必要字段
    if (
      !userId ||
      typeof score !== "number" ||
      !typeScores ||
      typeof timeSpent !== "number"
    ) {
      console.error("Invalid record data:", body);
      return NextResponse.json(
        { success: false, error: "Invalid record data" },
        { status: 400 }
      );
    }

    // 創建新的測驗記錄
    const record = await prisma.record.create({
      data: {
        score,
        typeScores,
        timeSpent,
        completedAt: new Date(),
        userId,
      },
    });

    console.log("Record created successfully:", record);
    return NextResponse.json({ success: true, record });
  } catch (error) {
    console.error("Error creating record:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create record" },
      { status: 500 }
    );
  }
}

// 獲取用戶的所有測驗記錄
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User ID is required" },
        { status: 400 }
      );
    }

    const records = await prisma.record.findMany({
      where: {
        userId,
      },
      orderBy: {
        completedAt: "desc",
      },
    });

    return NextResponse.json({ success: true, records });
  } catch (error) {
    console.error("Error fetching records:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch records" },
      { status: 500 }
    );
  }
}
