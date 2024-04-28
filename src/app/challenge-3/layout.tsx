export default function Challenge2Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <main className="">
            {children}
        </main>
      </>
    );
}