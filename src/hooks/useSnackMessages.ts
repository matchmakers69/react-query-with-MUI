import useEnqueueSnackbar from "./useEnqueueSnackbar";

const useSnackMessages = () => {
  // const enqueueSnackbar = useEnqueueSnackbar();
  const enqueueSnackbar = useEnqueueSnackbar();

  return {
    msgSuccess: (msg: string) => enqueueSnackbar(msg, { variant: `success` }),
    msgWarning: (msg: string) => enqueueSnackbar(msg, { variant: `warning` }),
    msgError: (msg: string) => enqueueSnackbar(msg, { variant: `error` }),
  };
};

export default useSnackMessages;
