
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
        <h1>Dashboard!</h1>
        &copy; Next JS Test!
    </div>
  );
}
