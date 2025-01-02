
export default function AttendLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
          {children}
          <h3>Attend Layout!</h3>
      </div>
    );
  }
  