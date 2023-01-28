import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useCallback } from 'react';
import { HttpConfig } from '../models';

const BASE_URL: string = process.env.REACT_APP_BASE_URL!;

const useHttps = () => {
  const toast = useToast();
  const sendRequest = useCallback(
    async (
      httpConfig: HttpConfig,
      callback: any,
      loadingFunc?: any,
      errorFunc?: any
    ) => {
      const apiUrl = `${BASE_URL}${httpConfig.url}`;

      const config = {
        ...httpConfig,
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          ...httpConfig.headers,
        },
      };

      try {
        loadingFunc && loadingFunc(true);
        const response = await axios(config);
        callback(response.data);
      } catch (err: any) {
        toast({
          title: 'An error occurred.',
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        errorFunc && errorFunc(err);
      } finally {
        loadingFunc && loadingFunc(false);
      }
    },

    [toast]
  );
  return sendRequest;
};

export default useHttps;
