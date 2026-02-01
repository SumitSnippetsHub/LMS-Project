# LMS Project

LMS Project is a Learning Management System web-based application designed to simplify online education and course management. From course creation to facilitating communication between instructors and students, this project empowers educators and learners alike with robust tools and a user-friendly interface.

---

## 🚀 Features

- User Registration and Authentication
- Course Management (Create, Update, Delete, View Courses)
- Admin Dashboard for Managing Users, Courses, and Reports
- Reports and Analytics using Chart.js
- Responsive and Interactive User Interface designed with Tailwind CSS
- Real-time Notifications using React Hot Toast
- Customizable UI themes with DaisyUI

---

## 🚀 Setup Instructions

### 1. Clone the project
```bash
git clone https://github.com/SumitSnippetsHub/LMS-Project.git
```

### 2. Move into the directory
```bash
cd lms-project
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the server locally
```bash
npm run dev
```

---

## 🔧 CI/CD Setup

This project employs **Continuous Integration and Continuous Deployment (CI/CD)** pipelines for seamless and automated builds, tests, and deployments.

### Key CI/CD Features:
- **Automated Testing**: Every code implementation is tested using pre-configured testing scripts.
- **Deployment Pipeline**: Automatically triggers deployment to the production server after successfully passing all checks.
- **GitHub Actions**: Workflows are configured to handle build, test, and deployment steps.

### Configure CI/CD:
1. The CI/CD pipeline is configured in the **GitHub Actions** workflow file `/.github/workflows/main.yml`.
2. To modify or customize the pipeline, update the YAML file.
3. Pushes to the `main` branch initiate the pipeline automatically.
4. Ensure your repository secrets like `DEPLOY_KEY` and others for your hosting environment (e.g., AWS, Vercel, or Netlify) are properly set up in the GitHub repository settings.

---

## 🌍 Deployment

The LMS Project is deployed to a production environment for live use. The deployment process uses one of the following managed cloud platforms:
- **AWS**: EC2 or Elastic Beanstalk for server-side hosting
- **Vercel**: For seamless frontend deployment
- **Netlify**: Alternative option for hosting static assets

For deployment, make sure you have the necessary environment variables configured:
- `API_KEY`: Your API key
- `DATABASE_URL`: Connection string to your database
- Other keys as required based on your hosting service

To deploy manually:
1. Install dependencies:
```bash
npm install
```
2. Build the production version:
```bash
npm run build
```
3. Deploy the build:
   - For **Vercel** or **Netlify**, link your repository and follow platform-specific instructions.
   - For **AWS**, use `aws-cli` to deploy via Elastic Beanstalk or EC2.

---

## ✨ Technologies and Dependencies

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **React Icons**
- **React Chart.js**
- **DaisyUI**
- **Axios**
- **React Hot Toast**
- **Tailwind CSS**
- **GitHub Actions** (CI/CD)

To install all plugins and dependencies:
```bash
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp-project
```

Add the following plugin in `index.css`:
```
@plugin "daisyui";
```

---

## 🤝 Contribution

Contributions are welcome! If you want to contribute to this project, please consider the following:
1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
