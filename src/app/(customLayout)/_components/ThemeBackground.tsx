export default function ThemeBackground() {
  return (
    <div className="fixed left-0 top-0 -z-20 h-full w-full" role="none">
      <div className="relative -z-10 h-[1000%] w-[1000%] -translate-x-[90%] translate-y-0 bg-app-linear-gradient transition duration-700 dark:-translate-y-[90%] dark:translate-x-0" />
    </div>
  );
}
