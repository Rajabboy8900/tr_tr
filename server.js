const http = require("http");
require("dotenv").config();
const { read_file, write_file } = require("./api/methods.js");
const { register } = require("module");

const PORT = process.env.PORT;
const options = { "Content-Type": "application/json" };

const app = http.createServer((req, res) => {
    ////////////////////////Register1////////////////////////

    if (req.method === "POST" && req.url === "/register") {
        try {
            req.on("data", (chunk) => {
                const userData = JSON.parse(chunk);
                const { username, email, password } = userData;
                const fileData = read_file("auth_module.json");

                if (!username || !email || !password) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Username, Email, Password are required!"
                    }));
                }

                if (typeof username !== "string" || typeof email !== "string" || typeof password !== "string") {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Username, Email, Password must be strings!"
                    }));
                }

                const foundedUser = fileData.find((user) => user.email === email);
                if (foundedUser) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "User already exists!"
                    }));
                }

                fileData.push(userData);
                write_file("auth_module.json", fileData);
                res.writeHead(201, options);
                res.end(JSON.stringify({ message: "User registered successfully!" }));
            });
        } catch (error) {
            res.writeHead(500, options);
            res.end(JSON.stringify({ message: "Internal server error!" }));
        }
    }
    ////////////////////////Login1////////////////////////
    if (req.method === "POST" && req.url === "/login") {
        try {
            req.on("data", (chunk) => {
                const userData = JSON.parse(chunk);
                const { email, password } = userData;
                const fileData = read_file("auth_module.json");

                if (!email || !password) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Email and Password are required!"
                    }));
                }

                if (typeof email !== "string" || typeof password !== "string") {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Email and Password must be strings!"
                    }));
                }

                const foundedUser = fileData.find((user) => user.email === email && user.password === password);
                if (!foundedUser) {
                    res.writeHead(401, options);
                    return res.end(JSON.stringify({
                        message: "Invalid email or password!"
                    }));
                }

                res.writeHead(200, options);
                res.end(JSON.stringify({ message: "Login successful!" }));
            });
        } catch (error) {
            res.writeHead(500, options);
            res.end(JSON.stringify({ message: "Internal server error!" }));
        }
    }
    ////////////////////////Register2////////////////////////

    if (req.method === "POST" && req.url === "/register2") {
        try {
            req.on("data", (chunk) => {
                const userData = JSON.parse(chunk);
                const { username, email, password } = userData;
                const fileData = read_file("rajabboy.json");

                if (!username || !email || !password) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Username, Email, Password are required!"
                    }));
                }

                if (typeof username !== "string" || typeof email !== "string" || typeof password !== "string") {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Username, Email, Password must be strings!"
                    }));
                }

                const foundedUser = fileData.find((user) => user.email === email);
                if (foundedUser) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "User already exists!"
                    }));
                }

                fileData.push(userData);
                write_file("rajabboy.json", fileData);
                res.writeHead(201, options);
                res.end(JSON.stringify({ message: "User registered successfully!" }));
            });
        } catch (error) {
            res.writeHead(500, options);
            res.end(JSON.stringify({ message: "Internal server error!" }));
        }
    }
    ///////////////////////////Login2////////////////////////

    if (req.method === "POST" && req.url === "/login2") {
        try {
            req.on("data", (chunk) => {
                const userData = JSON.parse(chunk);
                const { email, password } = userData;
                const fileData = read_file("rajabboy.json");

                if (!email || !password) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Email and Password are required!"
                    }));
                }

                if (typeof email !== "string" || typeof password !== "string") {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Email and Password must be strings!"
                    }));
                }

                const foundedUser = fileData.find((user) => user.email === email && user.password === password);
                if (!foundedUser) {
                    res.writeHead(401, options);
                    return res.end(JSON.stringify({
                        message: "Invalid email or password!"
                    }));
                }

                res.writeHead(200, options);
                res.end(JSON.stringify({ message: "Login successful!" }));
            });
        } catch (error) {
            res.writeHead(500, options);
            res.end(JSON.stringify({ message: "Internal server error!" }));
        }
    }
    ///////////////////////////Register3////////////////////////

    if (req.method === "POST" && req.url === "/register3") {
        try {
            req.on("data", (chunk) => {
                const userData = JSON.parse(chunk);
                const { username, email, password } = userData;
                const fileData = read_file("other.json");

                if (!username || !email || !password) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Username, Email, Password are required!"
                    }));
                }

                if (typeof username !== "string" || typeof email !== "string" || typeof password !== "string") {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Username, Email, Password must be strings!"
                    }));
                }

                const foundedUser = fileData.find((user) => user.email === email);
                if (foundedUser) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "User already exists!"
                    }));
                }

                fileData.push(userData);
                write_file("other.json", fileData);
                res.writeHead(201, options);
                res.end(JSON.stringify({ message: "User registered successfully!" }));
            });
        } catch (error) {
            res.writeHead(500, options);
            res.end(JSON.stringify({ message: "Internal server error!" }));
        }
    }



    ///////////////////////////Login3////////////////////////

    if (req.method === "POST" && req.url === "/login3") {
        try {
            req.on("data", (chunk) => {
                const userData = JSON.parse(chunk);
                const { email, password } = userData;
                const fileData = read_file("other.json");

                if (!email || !password) {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Email and Password are required!"
                    }));
                }

                if (typeof email !== "string" || typeof password !== "string") {
                    res.writeHead(400, options);
                    return res.end(JSON.stringify({
                        message: "Email and Password must be strings!"
                    }));
                }

                const foundedUser = fileData.find((user) => user.email === email && user.password === password);
                if (!foundedUser) {
                    res.writeHead(401, options);
                    return res.end(JSON.stringify({
                        message: "Invalid email or password!"
                    }));
                }

                res.writeHead(200, options);
                res.end(JSON.stringify({ message: "Login successful!" }));
            });
        } catch (error) {
            res.writeHead(500, options);
            res.end(JSON.stringify({ message: "Internal server error!" }));
        }
    }



});

app.listen(PORT, () => {
    console.log("Server is running at: http://localhost:" + PORT);
});
