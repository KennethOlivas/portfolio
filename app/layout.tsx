import "./globals.css";

export const metadata = {
  title: "Kenneth Olivas Portfolio",
  description: `Welcome to my portfolio! I am a skilled Full Stack Developer with expertise in TypeScript, Next.js, and Python. With a strong passion for building robust and scalable web applications, I have successfully developed and deployed numerous projects throughout my career.
In the front-end realm, I excel at leveraging TypeScript and Next.js to create responsive and intuitive user interfaces. I take pride in crafting clean and maintainable code, ensuring optimal performance and accessibility across different devices and browsers.
On the back-end, my proficiency lies in Python, where I design and implement efficient server-side logic. From developing RESTful APIs to integrating databases and third-party services, I have experience in building scalable and secure back-end systems that power dynamic web applications.
My portfolio showcases a diverse range of projects, including e-commerce platforms, content management systems, and data-driven applications. By combining my expertise in TypeScript, Next.js, and Python, I deliver seamless user experiences and robust functionality.
Throughout my career, I have collaborated with cross-functional teams, adhering to Agile methodologies and employing modern software development practices. With a focus on continuous learning and staying up-to-date with the latest industry trends, I am committed to delivering high-quality solutions that meet clients' requirements and exceed expectations.
Feel free to explore my portfolio and get in touch to discuss how I can contribute to your next web development project. Together, we can create powerful and scalable applications that drive business growth and user engagement`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <main className="text-white">{children}</main>
      </body>
    </html>
  );
}
