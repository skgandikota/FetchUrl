const core = require("@actions/core");
const fetch = require("node-fetch");

try {
  const url = core.getInput("url");
  const method = core.getInput("method") || "GET";
  const headers = JSON.parse(core.getInput("headers")) || {};
  const body = (method !== 'GET' && method !== 'HEAD') ? core.getInput("body") : null;

  fetch(url, { method, headers, body })
    .then((response) => {
      core.setOutput("status", response.status);
      core.setOutput("headers", JSON.stringify(response.headers.raw()));
      return response.json();
    })
    .then((body) => {
    core.setOutput(
      "body",
      typeof body === "object" ? JSON.stringify(body, null, 2) : body
    );
    })
    .catch((err) => {
      core.setOutput("status", err.status);
      core.setOutput("body", err.message);
    });

} catch (error) {
  core.setFailed(error.message);
  console.log(error.message);
}
