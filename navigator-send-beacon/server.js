require("http")
  .createServer(function (req, res) {
    if (req.method === "POST") {
      let buf = Buffer.from("");
      req.on("data", (chunk) => {
        buf = Buffer.concat([buf, chunk]);
      });
      req.on("end", () => {
        console.log("req headers", req.headers);
        console.log("post data", buf.toString());
        res.end(buf.toString());
      });
    }
  })
  .listen(3333, () => {
    console.log("server start at http://localhost:3333");
  });
