# Creativity official legal website

A small static website for the Creativity Discord application. It contains only the official landing page, Terms of Service, Privacy Policy and a link to the support server.

## Configure

Open `site-config.js` and change only these two values:

- `applicationId`: your Discord application ID.
- `supportInvite`: the permanent invite URL for your support server.

No bot invite, support email, owner name, API key, backend, database or environment variable is required.

## Deploy to Vercel

1. Put the contents of this folder in the root of a GitHub repository.
2. Import the repository into Vercel.
3. Select **Other** as the framework preset.
4. Leave the build command empty and deploy the static files.

The legal pages are drafts based on the supplied Creativity project. Review them against the live bot's actual data handling and applicable laws before publishing. The support server must be monitored and should have a private way to receive privacy requests.

## Pages

- `/` — official information page
- `/terms.html` — Terms of Service
- `/privacy.html` — Privacy Policy
