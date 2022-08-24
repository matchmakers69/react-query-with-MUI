import { CssBaseline } from "@mui/material";
import { QueryClientProvider, setLogger, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRoutes } from "react-router-dom";
import router from "./routes/router";
// import { queryClient } from "react-query/queryClient";
import ThemeProviderWrapper from "theme/ThemeProvider";

// suppress errors written to console
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {
    // swallow the errors
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// // make this a function for unique queryClient per test
// const generateTestQueryClient = () => {
//   const client = generateQueryClient();
//   const options = client.getDefaultOptions();
//   options.queries = { ...options.queries, retry: false };
//   return client;
// };

// const queryClient = generateTestQueryClient();

const App = () => {
  const content = useRoutes(router);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProviderWrapper>
          <CssBaseline />
          {content}
        </ThemeProviderWrapper>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
