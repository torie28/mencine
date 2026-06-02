import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    const backendBase = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || "";

    if (!backendBase) {
      return NextResponse.json(
        { error: "Backend URL not configured. Set BACKEND_URL in server env." },
        { status: 500 },
      );
    }

    const target = `${backendBase.replace(/\/+$/g, "")}/api/request-quote`;

    const res = await fetch(target, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    const contentType = res.headers.get("content-type") || "text/plain";

    const init: ResponseInit = { status: res.status, headers: { "content-type": contentType } };

    if (contentType.includes("application/json")) {
      try {
        const json = JSON.parse(text || "null");
        return NextResponse.json(json, init);
      } catch (e) {
        return new NextResponse(text, init);
      }
    }

    return new NextResponse(text, init);
  } catch (err) {
    console.error("/api/request-quote proxy error:", err);
    return NextResponse.json({ error: "Proxy error", details: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}
