export default function ThemeBackground() {
  return (
    <div className="fixed top-0 left-0 h-full w-full -z-20" role="none">
      <div className="h-[1000%] bg-app-linear-gradient w-[1000%] transition duration-700 dark:translate-x-0 dark:-translate-y-[90%] -translate-x-[90%] translate-y-0 -z-10 relative" />
    </div>
  );
}
