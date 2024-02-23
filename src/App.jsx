import { QueryClient, QueryClientProvider } from "react-query";
import { CustomSnackbar } from "./hocs/CustomSnackbar";
import Router from "./router/Router";
import GlobalStyles from "./utils/GlobalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CustomSnackbar>
          <GlobalStyles />
          <Router />
        </CustomSnackbar>
      </QueryClientProvider>
    </>
  );
}

export default App;
