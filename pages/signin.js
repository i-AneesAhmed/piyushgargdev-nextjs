import { getProviders, signIn } from "next-auth/react";
import { RiGithubFill, RiDiscordFill } from "react-icons/ri";

export default function SignIn({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">Sign in to continue</p>
      </div>
      <div className="mt-8">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="mt-4">
            <button
              onClick={() => signIn(provider.id)}
              className="flex items-center justify-center w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-800 rounded-md hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {provider.name === "GitHub" && <RiGithubFill className="mr-2 text-white" />}
              {provider.name === "Discord" && <RiDiscordFill className="mr-2 text-white" />}
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}