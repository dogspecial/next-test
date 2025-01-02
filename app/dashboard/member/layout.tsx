
export default function DashboardMemberLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
          {children}
          <h2>Dash Member!</h2>
      </div>
    );
  }
  