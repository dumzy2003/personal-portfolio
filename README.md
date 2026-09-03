# Uzor Okafor Portfolio

A responsive personal portfolio website for Uzor Okafor, an Information Technology student interested in web development, data analysis, and technology-driven problem solving.

## Features

- Responsive single-page layout
- Smooth section navigation with active-link highlighting
- Mobile navigation menu
- Animated typing introduction
- Scroll reveal animations
- Skills showcase for HTML, CSS, JavaScript, SQL, Excel, and Power BI
- Featured web development and data analysis projects
- Downloadable CV
- Contact form powered by EmailJS
- GitHub, LinkedIn, and email links

## Sections

- **Home:** Introduction, social links, and calls to action
- **About:** Background and areas of interest
- **Skills:** Technical skills and tools
- **Projects:** Featured dashboards and websites
- **Contact:** Contact details and message form

## Project Structure

```text
.
├── index.html                         # Portfolio page markup
├── style.css                          # Layout, theme, and responsive styles
├── script.js                          # Navigation, animations, and contact form logic
├── images/                            # Portfolio and project images
│   ├── nature.png
│   ├── personal.png
│   ├── Personal financial report.png
│   ├── irukka.png
│   └── ify-z-kitchen.png
│   └── cv/
│       ├── Premium_ATS_CV_Uzor_Okafor(1).pdf
│       └── Premium_ATS_CV_Uzor_Okafor.docx
```

## Run Locally

No build tools or dependencies are required.

1. Clone or download this repository.
2. Open `index.html` directly in a browser.

For a more reliable local server, run one of the following from the project directory:

```bash
# Python
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

You can also use the Live Server extension in VS Code.

## Contact Form Setup

The form uses [EmailJS](https://www.emailjs.com/) to send messages without a custom backend.

1. Create an EmailJS account and configure an email service and template.
2. Add the EmailJS SDK include in `index.html` if it is not already present.
3. Update the EmailJS public key, service ID, and template ID in `script.js`.
4. Ensure the template uses the form field names from `index.html`:
   - `subject`
   - `from_name`
   - `from_email`
   - `message`

Do not place private credentials or server-side secrets in frontend files. EmailJS public keys are intended for browser use, but access should still be restricted through the EmailJS dashboard where possible.

## Customization

- Update personal content and links in `index.html`.
- Replace project images in `images/` and update their paths in the project cards.
- Replace the CV files in `images/cv/` or update the CV link in `index.html`.
- Adjust colors, spacing, typography, and responsive breakpoints in `style.css`.
- Update the rotating introduction text in the `words` array in `script.js`.

## Deployment

Because this is a static website, it can be deployed on services such as GitHub Pages, Vercel, Netlify, or Cloudflare Pages. Publish the project directory as-is; no build command is needed.

## License

No license has been specified for this project.
