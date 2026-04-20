#!/usr/bin/env node
import 'dotenv/config';

const username = process.argv[2];

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!username) {
  console.log('Use: github-activity <username>');
  process.exit(1);
}

console.log(`Searching github activity of: ${username}`);

const url = `https://api.github.com/users/${username}/events`;

async function getActivity() {
  try {
    const headers: any = {
      'User-Agent': 'node',
    };

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers });

    const data = await response.json();

    if (!response.ok) {
      console.error('API Error: ', data.message);
      return [];
    }

    if (data.length === 0) {
      console.log('No recent activity found.');
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error: ', error);
    return [];
  }
}

function formatEvent(event: any) {
  switch (event.type) {
    case 'PushEvent': {
      return `Pushed to ${event.repo.name}`;
    }
    case 'CreateEvent': {
      return `Created ${event.payload?.ref_type} in ${event.repo.name}`;
    }
    case 'IssuesEvent': {
      return `Opened an issue in ${event.repo.name}`;
    }
    case 'WatchEvent': {
      return `Starred ${event.repo.name}`;
    }
    default:
      return null;
  }
}

async function printResults() {
  try {
    const data = await getActivity();

    data.forEach((event: any) => {
      const formatted = formatEvent(event);

      if (formatted) {
        console.log('- ' + formatted);
      }
    });
  } catch (error) {
    console.error('Error', error);
  }
}

printResults();