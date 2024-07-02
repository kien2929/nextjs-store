import { cookies } from "next/headers";

export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res?.token;

  if (!sessionToken) {
    return Response.json(
      {
        message: "Invalid token",
      },
      { status: 401 }
    );
  }
  return Response.json(
    { res },
    {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=${
          60 * 60 * 24 * 7
        }`,
      },
    }
  );
}
