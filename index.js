import OpenClaw from "openclaw";

async function runAgent() {
  const oc = new OpenClaw({
    apiKey: process.env.OPENAI_API_KEY
  });

  await oc.start();
  console.log("OpenClaw is running!");
}

runAgent();
