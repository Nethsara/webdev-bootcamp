const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nameReceipient = document.getElementById("nameReceipient").value;
  const nameSender = document.getElementById("nameSender").value;
  const address = document.getElementById("address").value;
  const content = document.getElementById("content").value;

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `write a letter in 150 words using below details
       sender - ${nameSender} 
       receipient - ${nameReceipient}
       receipient address - ${address}
       content - ${content}. 
       Date -  31st of January 2023
       include the salutation, receipient address in header and Complimentary Close.
      `,
      max_tokens: 300,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  });
  const data = await response.json();
  const letter = data.choices[0].text;
  output.innerText = letter;
});
