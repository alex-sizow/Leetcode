async function sendPostRequest() {
  try {
    const response = await fetch(
      "https://dev-lawyer.dev.tdsgn.ru/api/auth/recovery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "mail@tdsgn.ru",
        }),
      }
    );
    if (response.ok) {
      console.log("POST request successful");
    } else {
      console.log("POST request failed");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

sendPostRequest();
