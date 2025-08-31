export async function sendMessage(data: any) {
  console.log(data);
  
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Request failed");
    return { success: true };
  } catch (err) {
   
    console.error(err);
    return { success: false };
  }
}
