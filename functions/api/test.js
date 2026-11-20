export async function onRequest(context) {
  const data = {
    message: "Success! Your API endpoint is working.",
    timestamp: new Date().toISOString()
  };

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
