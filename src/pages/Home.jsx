import { useCounter } from '@/hooks/useCounter';
import Counter from '@/components/Counter';
import logo from '@/assets/logo.svg';

const Home = () => {
  const { count, increment } = useCounter(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-center text-white">
      <header>
        <img
          src={logo}
          className="h-40vmin w-40vmin animate-spin-slow pointer-events-none"
          alt="logo"
        />
        <h1 className="mt-4 text-4xl font-bold">Vite + React</h1>
        <div className="mt-4">
          <Counter count={count} onIncrement={increment} />
        </div>
        <p className="mt-4 text-lg">
          Edit <code className="rounded bg-gray-700 px-2 py-1">App.jsx</code> and save to test HMR
          updates.
        </p>
        <p className="mt-4 flex items-center justify-center gap-4">
          <a
            className="text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <span className="text-gray-500">|</span>
          <a
            className="text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default Home;
