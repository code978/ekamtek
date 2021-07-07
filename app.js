const express = require("express");
const { Octokit } = require("@octokit/core");
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

const octokit = new Octokit();

const owner = "code978";
const repo = "ekamtek";

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('main');
});

app.get('/commits', async (req, res) => {

	const commits = await octokit.request(
		`GET /repos/{owner}/{repo}/commits`, { owner, repo }
	);

	console.log(commits)

	res.render('commit', { data: commits.data });
});

app.listen(port, () => console.log(`Express started on http://localhost:${port}\n Press Ctrl-C to terminate.`));
