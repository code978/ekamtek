const express = require('express')
const router = express.Router();
const { Octokit } = require("@octokit/core");

const octokit = new Octokit();
const owner = "code978";
const repo = "ekamtek";

router.get('/', (req, res) => {
	res.render('main');
});

router.get('/commits', async (req, res) => {

	const commit = await octokit.request(
		`GET /repos/{owner}/{repo}/commits`, { owner, repo }
		);

	res.render('commit', { data: commit.data });
});

module.exports = router;